<script setup lang="ts">
const email = ref('')
const password = ref('')
const remember = ref(false)
const router = useRouter()

const onSubmit = () => {
  // Replace this with real authentication logic.
  alert('Login submitted. Implement authentication backend to complete this flow.')
  router.push('/')
}

useSeoMeta({
  title: 'Login',
  description: 'Sign in to your account.'
})
</script>

<template>
  <UPage>
    <UPageSection
      title="Welcome back"
      description="Sign in with your email & password"
      :ui="{
        title: 'text-left',
        description: 'text-left text-muted'
      }"
    />

    <UPageSection :ui="{ container: 'pt-0!' }">
      <div class="max-w-xl mx-auto rounded-[2rem] border border-muted/50 bg-surface p-8 shadow-lg shadow-neutral-950/5">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <div>
            <UInput
              id="email"
              type="email"
              v-model="email"
              placeholder="myemail@example.com"
              required
              class="mt-2"
            />
          </div>

          <div>
            <UInput
              id="password"
              type="password"
              v-model="password"
              placeholder="Enter your password"
              required
              class="mt-2"
            />
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-2">
              <UCheckbox id="remember" v-model="remember" />
              <label for="remember" class="text-sm text-muted">Remember me</label>
            </div>
            <UButton type="submit" label="Sign in" color="primary" class="w-full sm:w-auto" />
          </div>

          <div class="text-sm text-muted text-center">
            Don’t have an account?
            <UButton
              variant="ghost"
              color="primary"
              size="sm"
              to="/signup"
              label="Create one"
            />
          </div>
        </form>
      </div>
    </UPageSection>
  </UPage>
</template>
