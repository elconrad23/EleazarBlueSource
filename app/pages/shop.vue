<template>
  <div class="shop-page container">
    <header class="shop-hero">
      <h1>Eco Filters Shop</h1>
      <p class="lead">
        High-quality, sustainable water filters designed for lasting environmental impact.</p>
    </header>

    <div class="products-grid">
      <article v-for="p in products" :key="p.id" class="card">
        <img v-if="p.image" :src="p.image" :alt="p.name" class="card-image"/>
        <div class="card-body">
          <h2 class="product-name">{{ p.name }}</h2>
          <p class="product-desc">{{ p.description }}</p>
          <div class="price-row">
            <div class="price">{{ formatPrice(p.price) }}</div>
            <div class="qty">
              <label>Qty
                <input type="number" v-model.number="qty[p.id]" min="1" />
              </label>
            </div>
          </div>
          <div class="card-actions">
            <button class="buy" @click="buy(p)">
              Buy
            </button>
            <button class="details" @click="toggle(p.id)">
              Details
            </button>
          </div>
          <p v-if="open === p.id" class="more">{{ p.long }}</p>
        </div>
      </article>
    </div>

    <section class="checkout-note">
        <p>Click <strong>Buy</strong> to start secure checkout. You will be redirected to Stripe's hosted payment page.</p>
      </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const products = [
  {
    id: 'eco-basic',
    name: 'EcoFilter Basic',
    price: 200000,
    description: 'Compact ceramic filter for household use — durable and low-maintenance.',
    long: 'Removes sediments and improves taste. Ideal for small families and demonstrations.',
    image: '/hero/random-3.avif'
  },
  {
    id: 'eco-pro',
    name: 'EcoFilter Pro',
    price: 700000,
    description: 'High-capacity multi-stage filter combining carbon and bio-ceramic media.',
    long: 'Designed for reliable filtration in rural and off-grid environments.',
    image: '/hero/random-5.avif'
  },
  {
    id: 'eco-premium',
    name: 'EcoFilter Premium Kit',
    price: 100000,
    description: 'Complete kit with replacement cartridges and installation guide.',
    long: 'Best value for institutions and larger households. Comes with a 1-year warranty.',
    image: '/hero/random-7.avif'
  }
]

const qty = reactive({})
products.forEach(p => { qty[p.id] = 1 })

const open = ref(null)
function toggle(id){ open.value = open.value === id ? null : id }

function formatPrice(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n) }

async function buy(p){
  const q = qty[p.id] || 1
  try{
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: p.id, qty: q })
    })
    const data = await res.json()
    if (data?.url) {
      window.location.href = data.url
    } else {
      alert('Checkout failed. Please try again.')
    }
  }catch(e){
    console.error(e)
    alert('Could not start checkout. Check console for details.')
  }
}
</script>

<style scoped>
.container{padding:2rem}
.shop-hero{max-width:700px;margin:0 auto 1.5rem;text-align:center}
.shop-hero h1{font-size:2rem;margin:0 0 .25rem}
.lead{color:#6b7280}
.products-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem}
.card{background:linear-gradient(180deg,rgba(255,255,255,0.9),#fff);border-radius:12px;box-shadow:0 6px 18px rgba(16,24,40,0.06);overflow:hidden;border:1px solid rgba(0,0,0,0.04)}
.card-image{width:100%;height:160px;object-fit:cover;display:block}
.card-body{padding:1rem}
.product-name{font-size:1.125rem;margin:.25rem 0}
.product-desc{color:#374151;font-size:.95rem;margin:.5rem 0}
.price-row{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}
.price{font-weight:700;color:#047857}
.qty input{width:64px;margin-left:.5rem;padding:.25rem .5rem;border-radius:6px;border:1px solid #e5e7eb}
.card-actions{display:flex;gap:.5rem;margin-top:.75rem}
.buy{background:#10b981;color:#fff;padding:.5rem .75rem;border-radius:8px;border:none;cursor:pointer}
.details{background:transparent;border:1px solid #e5e7eb;padding:.45rem .7rem;border-radius:8px;cursor:pointer}
.more{margin-top:.75rem;color:#4b5563}
.checkout-note{margin-top:1.25rem;text-align:center;color:#6b7280}

@media (max-width:600px){.card-image{height:140px}}
</style>
