"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { torqueOsPanel, type OrderStatus } from "@/data/torqueos-demo";

const STATUS_STYLES: Record<OrderStatus, string> = {
  "Em Execução": "text-primary-soft bg-primary/10 border-primary/25",
  "Aguardando Peça": "text-sky bg-sky/10 border-sky/25",
  "Finalizado": "text-emerald bg-emerald/10 border-emerald/25",
};

export function TorqueOsPanel() {
  const [activeTab, setActiveTab] = useState<(typeof torqueOsPanel.tabs)[number]>(
    torqueOsPanel.tabs[0]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full overflow-hidden rounded-md border border-line-strong bg-elevated shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald" aria-hidden />
          <div>
            <p className="text-[13px] font-medium text-ink">{torqueOsPanel.appName}</p>
            <p className="font-technical text-micro text-ink-faint">
              TorqueOS · ERP Automotivo · {torqueOsPanel.environment}
            </p>
          </div>
        </div>
        <span className="rounded border border-emerald/25 bg-emerald/10 px-2 py-1 font-technical text-micro text-emerald">
          {torqueOsPanel.status}
        </span>
      </div>

      {/* Sub-header */}
      <div className="flex items-center justify-between px-4 py-2.5 text-[12.5px] text-ink-dim">
        <span>{torqueOsPanel.unit}</span>
        <span className="font-technical text-ink-faint">{torqueOsPanel.todayLabel}</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-line px-3">
        {torqueOsPanel.tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-[12.5px] transition-colors duration-200 ${
              activeTab === tab
                ? "border-b-2 border-primary-soft text-ink"
                : "border-b-2 border-transparent text-ink-faint hover:text-ink-dim"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table (only "Ordens de Serviço" has real content; other tabs are the same product, less relevant to show here) */}
      {activeTab === "Ordens de Serviço" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left">
            <thead>
              <tr className="text-micro uppercase tracking-wide text-ink-faint">
                <th className="px-4 py-2 font-normal">OS</th>
                <th className="px-4 py-2 font-normal">Veículo</th>
                <th className="px-4 py-2 font-normal">Cliente</th>
                <th className="px-4 py-2 font-normal">Serviço</th>
                <th className="px-4 py-2 font-normal">Status</th>
                <th className="px-4 py-2 text-right font-normal">Valor</th>
              </tr>
            </thead>
            <tbody>
              {torqueOsPanel.orders.map((order) => (
                <tr key={order.id} className="border-t border-line text-[12.5px]">
                  <td className="px-4 py-3 font-technical text-ink-faint">{order.id}</td>
                  <td className="px-4 py-3 text-ink">{order.vehicle}</td>
                  <td className="px-4 py-3 text-ink-dim">{order.customer}</td>
                  <td className="px-4 py-3 text-ink-dim">{order.service}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded border px-2 py-0.5 font-technical text-micro ${STATUS_STYLES[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-technical text-ink">{order.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex h-[168px] items-center justify-center px-4 text-[12.5px] text-ink-faint">
          Módulo de {activeTab.toLowerCase()} — mesma arquitetura, dados por oficina.
        </div>
      )}

      {/* Footer strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {torqueOsPanel.stackBadges.map((badge) => (
            <span
              key={badge}
              className="rounded border border-line-strong px-2 py-0.5 font-technical text-micro text-ink-faint"
            >
              {badge}
            </span>
          ))}
        </div>
        <span className="font-technical text-micro text-ink-faint">
          {torqueOsPanel.architectureNote}
        </span>
      </div>
    </motion.div>
  );
}
