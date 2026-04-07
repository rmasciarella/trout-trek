import { Outlet, createRootRoute, ScrollRestoration } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
