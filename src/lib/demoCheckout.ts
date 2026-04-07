import type { Rod } from '../data/rods'

export const DEMO_STRIPE_API_VERSION = '2026-02-25.clover'
export const DEMO_CHECKOUT_CURRENCY = 'usd'

export interface DemoCheckoutCustomer {
  email: string
  name: string
  notes?: string
}

export interface DemoCheckoutSession {
  id: string
  mode: 'payment'
  status: 'open'
  rodId: string
  currency: typeof DEMO_CHECKOUT_CURRENCY
  amountSubtotal: number
  amountTotal: number
  lineItem: {
    name: string
    description: string
    quantity: number
    unitAmount: number
  }
  stripe: {
    apiVersion: typeof DEMO_STRIPE_API_VERSION
    integration: 'demo-no-op'
    futureMode: 'checkout.sessions.create'
  }
}

export interface DemoCheckoutResult {
  id: string
  sessionId: string
  status: 'demo_succeeded'
  amountTotal: number
  currency: typeof DEMO_CHECKOUT_CURRENCY
  customer: DemoCheckoutCustomer
  message: string
}

export function createDemoCheckoutSession(rod: Rod): DemoCheckoutSession {
  return {
    id: `cs_demo_${rod.id}`,
    mode: 'payment',
    status: 'open',
    rodId: rod.id,
    currency: DEMO_CHECKOUT_CURRENCY,
    amountSubtotal: rod.price * 100,
    amountTotal: rod.price * 100,
    lineItem: {
      name: rod.name,
      description: `${rod.series} · handcrafted to order`,
      quantity: 1,
      unitAmount: rod.price * 100,
    },
    stripe: {
      apiVersion: DEMO_STRIPE_API_VERSION,
      integration: 'demo-no-op',
      futureMode: 'checkout.sessions.create',
    },
  }
}

export function submitDemoCheckout(
  session: DemoCheckoutSession,
  customer: DemoCheckoutCustomer,
): DemoCheckoutResult {
  return {
    id: `pi_demo_${session.rodId}`,
    sessionId: session.id,
    status: 'demo_succeeded',
    amountTotal: session.amountTotal,
    currency: session.currency,
    customer,
    message:
      'Demo purchase inquiry captured. No Stripe request was sent and no payment was processed.',
  }
}
