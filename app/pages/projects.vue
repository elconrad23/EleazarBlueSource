<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
useSeoMeta({ title: 'Projects', description: 'Environmental intelligence and digital resilience projects.' })
</script>

<template>
  <main><section class="inner-hero"><div class="site-container"><p class="eyebrow">Selected engagements</p><h1>Solutions designed for the systems people depend on.</h1><p>We work at the intersection of water, environmental sustainability and dependable software.</p></div></section><section class="project-list"><div class="site-container"><article v-for="(project, index) in projects" :key="project.title" class="project-item"><img class="project-image" :src="project.image" :alt="project.title"><div class="project-copy"><span class="project-meta">{{ project.date }} · CASE STUDY</span><h2>{{ project.title }}</h2><p>{{ project.description }}</p><div><span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span></div><NuxtLink to="/contact" class="btn-arrow" style="margin-top:25px">Discuss a similar project <span>→</span></NuxtLink></div></article></div></section></main>
</template>
