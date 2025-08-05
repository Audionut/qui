import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { getBaseUrl } from './lib/base-url'

// Get the base path from the injected global variable
// Remove trailing slash for TanStack Router
const basepath = getBaseUrl().slice(0, -1) || undefined

export const router = createRouter({ 
  routeTree,
  basepath,
  defaultPreload: 'intent',
  context: {
    auth: undefined!,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}