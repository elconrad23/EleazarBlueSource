import Stripe from 'stripe'
import { getQuery } from 'h3'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-11-15' })

export default defineEventHandler(async (event) => {
  const q = getQuery(event) as { session_id?: string }
  const sessionId = q.session_id
  if (!sessionId) {
    return { error: 'session_id query parameter required' }
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items', 'payment_intent'] })

    // Normalize response for frontend
    const lineItems = (session.line_items?.data || []).map((li: any) => ({
      description: li.description,
      quantity: li.quantity,
      price: li.price?.unit_amount,
      currency: li.price?.currency,
      product: li.price?.product
    }))

    return {
      id: session.id,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_details: session.customer_details || null,
      line_items: lineItems
    }
  } catch (err: any) {
    return { error: err.message || String(err) }
  }
})
