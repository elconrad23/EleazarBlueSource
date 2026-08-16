<template>
  <div class="success container">
    <header class="success-hero">
      <h1>Order Confirmation</h1>
      <p v-if="loading">Retrieving your order details…</p>
      <p v-if="error" class="error">{{ error }}</p>
    </header>

    <section v-if="session && !loading" class="details-card">
      <h2>Thank you — your payment status is: <strong>{{ session.payment_status }}</strong></h2>
      <p v-if="session.customer_details">Customer: {{ session.customer_details.name }} — {{ session.customer_details.email }}</p>

      <div class="items">
        <h3>Items</h3>
        <ul>
          <li v-for="(it, idx) in session.line_items" :key="idx">
            {{ formatAmount(it.price, it.currency) }} × {{ it.quantity }}
            <span v-if="it.product"> — {{ it.product }}</span>
          </li>
        </ul>
      </div>

      <div class="total">Total: {{ formatAmount(session.amount_total, session.currency) }}</div>

      <nuxt-link to="/shop" class="continue">Continue Shopping</nuxt-link>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const session = ref(null)
const loading = ref(true)
const error = ref('')

function formatAmount(amount: number, currency = 'usd'){
  if (!amount && amount !== 0) return ''
  // Stripe returns amounts in smallest currency unit (e.g., cents)
  const unit = amount / 100
  return new Intl.NumberFormat('en-US',{style:'currency',currency: (currency || 'usd').toUpperCase()}).format(unit)
}

onMounted(async ()=>{
  const sid = route.query.session_id
  if (!sid) {
    error.value = 'No session id provided.'
    loading.value = false
    return
  }

  try{
    const res = await fetch(`/api/checkout-session?session_id=${encodeURIComponent(String(sid))}`)
    const data = await res.json()
    if (data?.error) {
      error.value = data.error
    } else {
      session.value = data
    }
  }catch(e){
    error.value = 'Failed to load session.'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.container{padding:2rem}
.success-hero{max-width:700px;margin:0 auto 1rem;text-align:center}
.details-card{background:#fff;border-radius:12px;padding:1rem;max-width:800px;margin:0 auto;box-shadow:0 6px 18px rgba(16,24,40,0.06)}
.items ul{margin:0;padding-left:1.25rem}
.total{font-weight:700;margin-top:1rem}
.continue{display:inline-block;margin-top:1rem;background:#10b981;color:#fff;padding:.5rem .75rem;border-radius:8px}
.error{color:#b91c1c}
</style>
