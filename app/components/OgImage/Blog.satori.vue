<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="w-full h-full flex bg-neutral-950 relative overflow-hidden"
    data-theme="dark"
  >
    <div class="absolute top-0 left-0 w-1.5 h-full bg-primary-400" />

    <div class="flex flex-col justify-center flex-1 px-20 py-16">
      <div class="flex flex-col gap-8">
        <div class="text-6xl font-bold text-highlighted">
          {{ title || 'Blog' }}
        </div>

        <p
          class="text-3xl/11 text-muted"
          :style="{ lineClamp: 2, textOverflow: 'ellipsis' }"
        >
          {{ description || 'Read our latest articles and insights' }}
        </p>
      </div>
    </div>
  </div>
</template>
