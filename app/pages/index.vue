<script setup lang="ts">
useSeoMeta({ title: 'Water Intelligence & Digital Resilience', description: 'Enterprise software intelligence for natural water systems.' })
const solutions = [
  ['◈', 'Water systems intelligence', 'Decision-ready water data, catchment insight and operational monitoring for resilient resource management.'],
  ['⌁', 'Environmental data platforms', 'Connected tools that turn field evidence into clear, usable intelligence for teams and communities.'],
  ['△', 'Digital resilience advisory', 'Practical software strategy and institutional systems designed to hold up in complex conditions.']
]
const partners = Array.from({ length: 11 }, (_, index) => ({
  image: `/hero/random-${index + 1}.avif`,
  label: ['WATER POLICY', 'WATER RESOURCE ASSESSMENT', 'RESOURCE AGENCIES', 'WATER CLEANSING', 'CLIMATE ADAPTATION', 'WATER UTILITIES', 'INFORMATION SERVICES', 'DATA ANALYTICS', 'WATER-RELATED DRM', 'WATER MANAGEMENT', 'ENVIRONMENTAL MANAGEMENT'][index % 11]
}))
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-backgrounds" aria-hidden="true">
        <div class="hero-bg hero-bg-1"></div>
        <div class="hero-bg hero-bg-2"></div>
        <div class="hero-bg hero-bg-3"></div>
        <div class="hero-bg hero-bg-4"></div>
        <div class="hero-bg hero-bg-5"></div>
        <div class="hero-bg hero-bg-6"></div>
      </div>
      <div class="site-container hero-content">
        <div class="hero-kicker"></div>
        <h2>SUSTAINABILITY INTELLIGENCE, DIGITAL RESILIENCE</h2>
        <h1>Smart Digital Water Systems with Data-Led Intelligence</h1>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="btn btn-primary">Project Mission</NuxtLink>
          <NuxtLink to="/contact" class="btn-arrow">Available for new projects </NuxtLink>
        </div>
      </div>
      <a class="scroll-cue" href="#solutions" aria-label="Scroll to solutions and capabilities"><span class="mouse"></span><b>SCROLL TO EXPLORE</b></a>
    </section>
    <section class="proof">
      <div class="site-container proof-inner">
        <span class="proof-label">FOCUS AREAS</span>
        <div class="partner-marquee" aria-label="Partner showcase">
          <div class="partner-track">
            <div v-for="set in 2" :key="set" class="partner-set">
              <figure v-for="partner in partners" :key="`${set}-${partner.image}`" class="partner-card">
                <img :src="partner.image" alt="">
                <figcaption>{{ partner.label }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="solutions" class="solutions">
      <div class="site-container">
        <p class="eyebrow">
          Solutions &amp; capabilities
        </p>
        <h2 class="section-title">
          From environmental complexity to operational clarity
        </h2>
        <div class="solution-grid">
          <article v-for="solution in solutions" :key="solution[1]" class="solution-card">
            <span class="solution-icon">{{ solution[0] }}</span>
            <h3>{{ solution[1] }}</h3>
            <p>{{ solution[2] }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="platform">
      <div class="site-container platform-grid">
        <div>
          <p class="eyebrow">
            BlueSource platform
          </p>
          <h2 class="section-title">
            Build a shared operating picture across data sources
          </h2>
          <p class="section-copy">
            Without losing the local context that matters
          </p>
          <div class="accordion">
            <details open>
              <summary>Connected operational intelligence</summary><p>Bring field observations, monitoring feeds and institutional data together in one accountable view</p>
            </details>
            <details><summary>Decision tools for changing conditions</summary><p>Translate live evidence into priorities, scenarios and actions that you can use.</p></details>
            <details><summary>Built for enduring ownership</summary><p>Choose systems which are designed around your workflows, capacity and long-term stewardship.</p></details>
          </div>
        </div><div class="data-screen" aria-label="Platform dashboard preview">
          <div class="screen-top">
            <i></i><i></i><i></i>
          </div>
          <div class="screen-chart"></div>
          <div class="screen-stats">
            <span>FLOW INDEX<br><strong>84.2</strong></span>
            <span>DATA SOURCES<br><strong>24 LIVE</strong></span>
            <span>RISK STATUS<br><strong>STABLE</strong></span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
