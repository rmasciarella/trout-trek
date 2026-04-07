import { describe, expect, test } from 'vitest'
import { getRodById } from '../data/rods'
import {
  DEMO_CHECKOUT_CURRENCY,
  DEMO_STRIPE_API_VERSION,
  createDemoCheckoutSession,
  submitDemoCheckout,
} from './demoCheckout'

describe('demoCheckout', () => {
  test('creates a Stripe-shaped demo checkout session for a rod', () => {
    const rod = getRodById('heritage-7')

    expect(rod).toBeDefined()

    const session = createDemoCheckoutSession(rod!)

    expect(session).toMatchObject({
      id: 'cs_demo_heritage-7',
      mode: 'payment',
      status: 'open',
      rodId: 'heritage-7',
      currency: DEMO_CHECKOUT_CURRENCY,
      amountSubtotal: 185000,
      amountTotal: 185000,
      lineItem: {
        name: 'Heritage 7\'6"',
        quantity: 1,
        unitAmount: 185000,
      },
      stripe: {
        apiVersion: DEMO_STRIPE_API_VERSION,
        integration: 'demo-no-op',
        futureMode: 'checkout.sessions.create',
      },
    })
  })

  test('returns a demo success result without charging a card', () => {
    const rod = getRodById('freestone')

    expect(rod).toBeDefined()

    const session = createDemoCheckoutSession(rod!)
    const result = submitDemoCheckout(session, {
      email: 'angler@example.com',
      name: 'River Walker',
      notes: 'Interested in a spring build slot.',
    })

    expect(result).toMatchObject({
      id: 'pi_demo_freestone',
      sessionId: 'cs_demo_freestone',
      status: 'demo_succeeded',
      amountTotal: 195000,
      currency: DEMO_CHECKOUT_CURRENCY,
      customer: {
        email: 'angler@example.com',
        name: 'River Walker',
      },
    })
    expect(result.message).toContain('No Stripe request was sent')
  })
})
