import type { NavigationMenuItem } from '@nuxt/ui'

export function useNavLinks() {
  const isMobile = useMediaQuery('(max-width: 639px)')

  return computed<NavigationMenuItem[]>(() => [{
    label: 'EBC',
    icon: 'i-lucide-home',
    to: '/'
  }, {
    label: 'Projects',
    icon: 'i-lucide-folder',
    to: '/projects'
  }, {
    label: 'Portfolio',
    icon: 'i-lucide-file-text',
    to: '/portfolio'
  }, {
    label: 'Contact',
    icon: 'i-lucide-mail',
    to: '/contact'
  }, {
    label: isMobile.value ? 'Login' : 'Account',
    icon: 'i-lucide-user',
    to: '/login'
  }])
}
