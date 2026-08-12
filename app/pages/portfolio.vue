<script setup lang="ts">
const { data: page } = await useAsyncData('portfolio', () => queryCollection('portfolio').first())
const events = computed(() => page.value?.events || [])
useSeoMeta({ title: 'Portfolio', description: 'Knowledge sharing and advisory work from Eleazar BlueSource.' })
function formatDate(date: string) { return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }
</script>

<template>
  <main><section class="inner-hero"><div class="site-container"><p class="eyebrow">Knowledge in practice</p><h1>Portfolio</h1><p>Advisory, workshops and conversations that turn technical work into shared capacity.</p></div></section><section class="portfolio-intro"><div class="site-container portfolio-intro-grid"><div><p class="eyebrow">Our perspective</p><h2 class="section-title">Engineering grounded in place, insight and long-term value.</h2></div><div><p>We make complex environmental and digital systems easier to understand and act on. Our work moves between technical strategy, product design, research and capacity development.</p><p>Each engagement is an opportunity to leave behind better information, stronger teams and a more resilient operating system.</p><NuxtLink to="/contact" class="btn-arrow">Start a conversation <span>→</span></NuxtLink></div></div></section><section class="portfolio-list"><div class="site-container"><p class="eyebrow">Speaking &amp; exchange</p><h2 class="section-title" style="margin-bottom:38px">Recent talks and workshops.</h2><div class="event-grid"><article v-for="event in events" :key="event.title" class="event-card"><span>{{ event.category.toUpperCase() }}</span><h3>{{ event.title }}</h3><p>{{ event.location }}<br>{{ formatDate(event.date) }}</p></article></div></div></section></main>
</template>
