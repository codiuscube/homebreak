import { Check, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-muted-foreground mt-2">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Tier */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Free</h3>
              <div className="text-3xl font-bold mt-2 text-white">
                $0
                <span className="text-sm font-normal text-zinc-400"> /month</span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Perfect for trying it out
              </p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500" />
                1 spot
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500" />
                1 trigger
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500" />
                5 SMS alerts per month
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500" />
                Email fallback after limit
              </li>
            </ul>
            <Link to="/dashboard">
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Unlimited Tier */}
          <div className="bg-zinc-900 border-2 border-green-500 rounded-xl p-8 flex flex-col relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide">
              Recommended
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Unlimited</h3>
              <div className="text-3xl font-bold mt-2 text-white">
                $5
                <span className="text-sm font-normal text-zinc-400"> /month</span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Never miss a session
              </p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <Infinity className="w-4 h-4 text-green-400" />
                <span className="font-bold">Unlimited spots</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Infinity className="w-4 h-4 text-green-400" />
                <span className="font-bold">Unlimited triggers</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Infinity className="w-4 h-4 text-green-400" />
                <span className="font-bold">Unlimited SMS alerts</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-green-400" />
                All alert types
              </li>
            </ul>
            <Link to="/dashboard">
              <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
