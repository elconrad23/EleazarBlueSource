<script setup lang="ts">
// Try to fetch blog page content, but it's optional
const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})

// Fetch blog posts
const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Use page data if it exists, otherwise use defaults
const title = page.value?.seo?.title || page.value?.title || 'Blog'
const description = page.value?.seo?.description || page.value?.description || 'Read our latest articles and insights'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Blog', { title, description })
</script>

<template>
  <UPage>
    <UPageHero
      :title="page?.title || 'Blog'"
      :description="page?.description || 'Read our latest articles and insights'"
      :links="page?.links"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <UBlogPosts v-if="posts?.length" orientation="vertical">
        <Motion
          v-for="(post, index) in posts"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="post.path"
            v-bind="post"
            :ui="{
              root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
              image:
                'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1 overflow-visible'
                  : 'sm:rotate-1 overflow-visible'
            }"
          />
        </Motion>
      </UBlogPosts>
      <div v-else class="text-center py-12">
        <p class="text-muted">No blog posts available yet.</p>
      </div>
    </UPageSection>
  </UPage>
</template>
