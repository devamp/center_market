'use client';

import { useState } from 'react';

const weeklyHours = [
  { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '6:00 AM - 10:00 PM' },
];

const locations = [
  { name: 'Location 1', address: '1200 W 6th St, The Dalles, OR 97058' },
  { name: 'Location 2', address: '1500 E 2nd St, The Dalles, OR 97058' },
];

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-12"
    >
      <div className="absolute left-6 top-12 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-6 right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:items-start">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Locations & Hours
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Stop in for quick comfort food, snacks, and everyday essentials.
              This sample store section includes example hours and a live Google
              Map embed.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 bg-accent/35 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Address
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                1234 NESW St
              </p>
              <p className="text-sm text-slate-600">The Dalles, OR 97058</p>
            </div>
            <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Contact
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                (541) 999-9999
              </p>
              <p className="text-sm text-slate-600">sample@email.com</p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-primary/10 bg-white/85 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Store Hours
                </p>
              </div>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Open Daily
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {weeklyHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <span className="font-semibold text-foreground">
                    {item.day}
                  </span>
                  <span className="text-sm font-semibold text-slate-600">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-white/85 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Select Location
              </p>
              <p className="text-sm text-slate-600">
                We have two convenient locations in The Dalles, OR. Click the
                buttons to view the address and map for each location.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedLocation(0)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedLocation === 0 ? 'bg-primary text-white' : 'bg-secondary/10 text-secondary'}`}
                >
                  West Side Location
                </button>
                <button
                  onClick={() => setSelectedLocation(1)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedLocation === 1 ? 'bg-primary text-white' : 'bg-secondary/10 text-secondary'}`}
                >
                  East Side Location
                </button>
              </div>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(locations[selectedLocation].address)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-secondary"
            >
              Get Directions
            </a>
          </div>

          <div className="relative min-h-[420px] w-full bg-accent/20">
            <iframe
              title="Google Maps sample location for Center Market"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(locations[selectedLocation].address)}&z=14&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
