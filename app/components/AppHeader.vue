<template>
  <header class="site-header">
    <div class="site-container header-inner">
      <NuxtLink to="/" class="brand" aria-label="Eleazar BlueSource home">
        <span class="brand-logo-wrap">
          <img class="brand-logo" src="/hero/ebclogoa.jpeg" alt="Eleazar BlueSource Consultancy">
        </span>
      </NuxtLink>
      <nav class="site-nav" aria-label="Primary navigation">
        <NuxtLink to="/projects">Projects</NuxtLink><NuxtLink to="/portfolio">Portfolio</NuxtLink><NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
      <NuxtLink to="/contact" class="btn btn-outline header-cta">Request an Audit</NuxtLink>
    </div>
  </header>
</template>
