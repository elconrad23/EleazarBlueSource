<script setup lang="ts">
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const onSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords must match.')
    return
  }

  // Replace this with real signup/authentication logic.
  alert('Signup submitted. Implement backend registration to complete this flow.')
  router.push('/login')
}

useSeoMeta({
  title: 'Sign up',
  description: 'Create a new account.'
})
</script>

<template>
  <UPage>
    <UPageSection
      title="Create an account"
      description="Sign up to start using the service and manage your projects in one place."
      :ui="{
        title: 'text-left',
        description: 'text-left text-muted'
      }"
    />

    <UPageSection :ui="{ container: 'pt-0!' }">
      <div class="max-w-xl mx-auto rounded-[2rem] border border-muted/50 bg-surface p-8 shadow-lg shadow-neutral-950/5">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <div>
            <label class="text-sm font-semibold text-muted" for="name">Full name</label>
            <UInput
              id="name"
              type="text"
              v-model="name"
              placeholder="Jane Doe"
              required
              class="mt-2"
            />
          </div>

          <div>
            <label class="text-sm font-semibold text-muted" for="email">Email</label>
            <UInput
              id="email"
              type="email"
              v-model="email"
              placeholder="you@example.com"
              required
              class="mt-2"
            />
          </div>

          <div>
            <label class="text-sm font-semibold text-muted" for="password">Password</label>
            <UInput
              id="password"
              type="password"
              v-model="password"
              placeholder="Create a password"
              required
              class="mt-2"
            />
          </div>

          <div>
            <label class="text-sm font-semibold text-muted" for="confirmPassword">Confirm password</label>
            <UInput
              id="confirmPassword"
              type="password"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
              class="mt-2"
            />
          </div>

          <UButton type="submit" label="Create account" color="primary" class="w-full" />

          <div class="text-sm text-muted text-center">
            Already have an account?
            <UButton
              variant="ghost"
              color="primary"
              size="sm"
              to="/login"
              label="Sign in"
            />
          </div>
        </form>
      </div>
    </UPageSection>
  </UPage>
</template>
