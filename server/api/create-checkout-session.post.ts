import Stripe from 'stripe'
import { readBody } from 'h3'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-11-15' })

const PRODUCTS = [
  { id: 'eco-basic', name: 'EcoFilter Basic', price: 200000 },
  { id: 'eco-pro', name: 'EcoFilter Pro', price: 700000 },
  { id: 'eco-premium', name: 'EcoFilter Premium Kit', price: 100000 }
]

function findProduct(id: string) {
  return PRODUCTS.find(p => p.id === id)
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, qty } = body as { id: string, qty: number }
  const product = findProduct(id)
  if (!product) {
    return { error: 'Invalid product' }
  }

  const host = event.node.req.headers.host || 'localhost:3000'
  const proto = (event.node.req.headers['x-forwarded-proto'] as string) || 'http'
  const origin = `${proto}://${host}`

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'ugx',
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100)
        },
        quantity: qty || 1
      }
    ],
    success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/shop?canceled=true`
  })

  return { url: session.url }
})
