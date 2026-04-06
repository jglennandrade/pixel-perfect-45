"use client";

import { useRef } from "react";

const settlements = [
  { case: "Construction Worker", city: "Atlanta, GA", amount: "$4,200,000" },
  { case: "Factory Worker", city: "Dalton, GA", amount: "$2,400,000" },
  { case: "Warehouse Injury", city: "Lawrenceville, GA", amount: "$1,200,000" },
  { case: "Truck Driver — Back Injury", city: "Marietta, GA", amount: "$850,000" },
  { case: "Head Injury — Factory", city: "Duluth, GA", amount: "$750,000" },
  { case: "Shoulder Injury — Warehouse", city: "Roswell, GA", amount: "$620,000" },
  { case: "Car Accident", city: "Sandy Springs, GA", amount: "$480,000" },
  { case: "Knee Injury — Healthcare", city: "Macon, GA", amount: "$350,000" },
  { case: "Hit by 18-Wheeler", city: "Johns Creek, GA", amount: "$275,000" },
  { case: "Insurance Denial Overturned", city: "Athens, GA", amount: "$180,000" },
  { case: "Neck Injury — Retail", city: "Warner Robins, GA", amount: "$150,000" },
  { case: "Motorcycle Crash", city: "Atlanta, GA", amount: "$95,000" },
];

function TickerRow({ item }: { item: typeof settlements[0] }) {
  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-6 border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-cta text-sm flex-shrink-0">✓</span>
        <div className="min-w-0">
          <p className="font-dm text-sm font-bold text-white truncate">{item.case}</p>
          <p className="font-dm text-xs text-white/50">{item.city}</p>
        </div>
      </div>
      <span className="font-bebas text-2xl md:text-3xl text-cta tracking-wider flex-shrink-0 ml-4">
        {item.amount}
      </span>
    </div>
  );
}

export function SettlementTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate list for seamless loop
  const doubled = [...settlements, ...settlements];

  return (
    <div className="relative max-w-3xl mx-auto rounded-xl border border-white/10 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
    >
      {/* Fixed header bar */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cta" />
          </span>
          <span className="font-dm text-[10px] tracking-[3px] uppercase font-bold text-cta">
            Live Settlements
          </span>
        </div>
        <span className="font-dm text-[10px] text-white/30">Georgia, 2004–Present</span>
      </div>

      {/* Scrolling ticker area */}
      <div
        ref={containerRef}
        className="relative h-[350px] overflow-hidden group"
      >
        {/* Fade masks */}
        <div className="absolute top-0 left-0 right-0 h-[60px] z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(10,15,30,0.95), transparent)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60px] z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,15,30,0.95), transparent)" }}
        />

        {/* Scrolling content */}
        <div
          className="animate-ticker-scroll group-hover:[animation-play-state:paused]"
        >
          {doubled.map((item, i) => (
            <TickerRow key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
