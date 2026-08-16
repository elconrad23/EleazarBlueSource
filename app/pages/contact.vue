<script setup lang="ts">
useSeoMeta({ title: 'Contact', description: 'Start a technical briefing with Eleazar BlueSource.' })
</script>

<template>
  <main>
    <section class="inner-hero">
      <div class="site-container">
        <p class="eyebrow">
          Let’s work together
        </p><h1>Bring clarity to your next environmental challenge.</h1><p>Tell us where your systems need to work harder. We’ll come prepared for a practical technical conversation.</p></div></section><section class="contact-section"><div class="site-container contact-grid"><div class="contact-details"><p class="eyebrow">Contact</p><h2>Schedule a technical briefing.</h2><p>Whether you are modernising a data platform, managing water risk or shaping a new digital service, we would like to hear about it.</p><p><a href="mailto:info@eleazarbluesource.com">info@eleazarbluesource.inc</a><br>East Africa · Working across the region</p></div><form class="contact-form" @submit.prevent><label>Your name<input type="text" placeholder="Name"></label><label>Work email<input type="email" placeholder="you@organisation.com"></label><label class="full">Organisation<input type="text" placeholder="Organisation name"></label><label class="full">What would you like to explore?<textarea placeholder="A little context on your challenge, project or timeline."></textarea></label><button class="btn btn-primary full" type="submit">Request a Technical Briefing</button></form></div></section></main>
</template>
