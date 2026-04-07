import { FormEvent, startTransition, useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getRodById } from '../data/rods'
import {
  createDemoCheckoutSession,
  DEMO_STRIPE_API_VERSION,
  submitDemoCheckout,
  type DemoCheckoutResult,
} from '../lib/demoCheckout'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const Route = createFileRoute('/checkout/$rodId')({
  component: CheckoutPage,
  loader: ({ params }) => {
    const rod = getRodById(params.rodId)
    if (!rod) throw notFound()

    return {
      rod,
      session: createDemoCheckoutSession(rod),
    }
  },
})

function CheckoutPage() {
  const { rod, session } = Route.useLoaderData()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded'>('idle')
  const [result, setResult] = useState<DemoCheckoutResult | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const customer = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      notes: String(formData.get('notes') ?? ''),
    }

    await new Promise((resolve) => window.setTimeout(resolve, 900))

    const nextResult = submitDemoCheckout(session, customer)
    startTransition(() => {
      setResult(nextResult)
      setStatus('succeeded')
    })
  }

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center gap-2 text-xs text-forest/40">
            <Link to="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-forest transition-colors">
              Collection
            </Link>
            <span>/</span>
            <Link
              to="/rod/$rodId"
              params={{ rodId: rod.id }}
              className="hover:text-forest transition-colors"
            >
              {rod.name}
            </Link>
            <span>/</span>
            <span className="text-forest/60">Checkout</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <section className="animate-fade-up delay-100">
            <div className="bg-parchment border border-sand/40 rounded-sm overflow-hidden">
              <div className="px-8 py-7 border-b border-sand/40">
                <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-2">
                  Demo Checkout
                </span>
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-forest-deep">
                  Purchase Inquiry
                </h1>
                <p className="mt-3 text-forest/55 max-w-2xl leading-relaxed">
                  This page is shaped around a future Stripe Checkout Sessions handoff,
                  but today it stays completely local. Submitting the form captures a
                  demo-only inquiry and never processes a real payment.
                </p>
              </div>

              <div className="px-8 py-7 border-b border-sand/40 bg-warm-white/55">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-forest/35 mb-2">
                      Stripe Sandbox
                    </p>
                    <p className="text-sm text-forest/60 leading-relaxed">
                      Recommended future path: create a Checkout Session server-side,
                      then redirect to hosted Stripe Checkout.
                    </p>
                  </div>
                  <div className="rounded-sm border border-sage/20 bg-parchment px-4 py-3 text-right">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-forest/35">
                      API Version
                    </p>
                    <p className="text-sm text-forest-deep">{DEMO_STRIPE_API_VERSION}</p>
                  </div>
                </div>
              </div>

              {result ? (
                <div className="px-8 py-8">
                  <div className="rounded-sm border border-sage/25 bg-sage/10 p-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-sage mb-3">
                      Demo Complete
                    </p>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl text-forest-deep mb-3">
                      Inquiry Received
                    </h2>
                    <p className="text-forest/60 leading-relaxed mb-6">{result.message}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <InfoBlock label="Inquiry ID" value={result.id} />
                      <InfoBlock label="Session ID" value={result.sessionId} />
                      <InfoBlock label="Customer" value={result.customer.name} />
                      <InfoBlock label="Email" value={result.customer.email} />
                      <InfoBlock label="Demo Total" value={currency.format(result.amountTotal / 100)} />
                      <InfoBlock label="Status" value="No-op succeeded" />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/collection"
                        className="px-6 py-3 bg-forest text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-forest-deep transition-all duration-300 text-center"
                      >
                        Back to Collection
                      </Link>
                      <a
                        href="mailto:hello@trouttrek.com?subject=Trout%20Trek%20Demo%20Checkout%20Inquiry"
                        className="px-6 py-3 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300 text-center"
                      >
                        Email the Shop
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="px-8 py-8 space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="River Walker"
                      autoComplete="name"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="angler@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-[0.2em] uppercase text-forest/35 mb-2"
                      htmlFor="notes"
                    >
                      Build Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Tell us about your home water, preferred line, or any custom requests."
                      className="w-full px-4 py-3 bg-warm-white border border-sand/40 rounded-sm text-sm text-forest-deep placeholder:text-forest/30 focus:outline-none focus:border-sage/45 transition-colors resize-none"
                    />
                  </div>

                  <div className="rounded-sm border border-sand/40 bg-warm-white/60 p-5">
                    <p className="text-xs tracking-[0.25em] uppercase text-forest/35 mb-4">
                      Payment Surface
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Card (demo)', 'Link (demo)', 'Wallets (demo)'].map((method) => (
                        <div
                          key={method}
                          className="rounded-sm border border-sage/20 bg-parchment px-4 py-3 text-sm text-forest/65"
                        >
                          {method}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-forest/50 leading-relaxed">
                      These options are visual only right now. In a live Stripe setup, the
                      button below would create a Checkout Session and hand off to Stripe.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="flex-1 px-6 py-4 bg-forest text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-forest-deep transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 disabled:opacity-70 disabled:cursor-wait"
                    >
                      {status === 'submitting' ? 'Submitting Demo Inquiry...' : 'Complete Demo Checkout'}
                    </button>
                    <Link
                      to="/rod/$rodId"
                      params={{ rodId: rod.id }}
                      className="px-6 py-4 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300 text-center"
                    >
                      Return to Rod
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </section>

          <aside className="animate-fade-up delay-200 space-y-6">
            <div className="bg-parchment border border-sand/40 rounded-sm overflow-hidden">
              <div
                className="p-8 border-b border-sand/30"
                style={{
                  background: `linear-gradient(145deg, ${rod.accent}12, ${rod.accent}05, #FAF8F3)`,
                }}
              >
                <span className="text-xs tracking-[0.25em] uppercase text-sage block mb-2">
                  Order Summary
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-forest-deep">
                  {rod.name}
                </h2>
                <p className="mt-2 text-forest/55 leading-relaxed">{rod.tagline}</p>
              </div>

              <div className="p-8 space-y-5">
                <SummaryRow label="Series" value={rod.series} />
                <SummaryRow label="Length" value={rod.length} />
                <SummaryRow label="Line Weight" value={rod.lineWeight} />
                <SummaryRow label="Material" value={rod.material} />
                <SummaryRow label="Lead Time" value="8-12 weeks" />
                <div className="pt-5 border-t border-sand/30 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-forest/35">
                      Demo Total
                    </p>
                    <p className="text-sm text-forest/45">
                      Display only. No authorization, capture, or charge.
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-3xl text-copper">
                    {currency.format(session.amountTotal / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-copper/20 bg-copper/5 p-6">
              <p className="text-xs tracking-[0.25em] uppercase text-copper mb-3">
                Safe Demo Behavior
              </p>
              <ul className="space-y-3 text-sm text-forest/60">
                <li>No Stripe keys are used on this page.</li>
                <li>No customer card details are collected or stored.</li>
                <li>No real transaction, authorization, or webhook is triggered.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  autoComplete?: string
}) {
  return (
    <div>
      <label
        className="block text-xs tracking-[0.2em] uppercase text-forest/35 mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-warm-white border border-sand/40 rounded-sm text-sm text-forest-deep placeholder:text-forest/30 focus:outline-none focus:border-sage/45 transition-colors"
      />
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xs tracking-[0.2em] uppercase text-forest/35">{label}</p>
      <p className="text-sm text-forest-deep">{value}</p>
    </div>
  )
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-sage/15 bg-parchment px-4 py-3">
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-forest/35 mb-1">
        {label}
      </p>
      <p className="text-sm text-forest-deep break-words">{value}</p>
    </div>
  )
}
