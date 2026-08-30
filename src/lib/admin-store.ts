"use client";

import { saasProducts, SaaSProduct } from "@/data/saas-products";
import { coreSolutions, CoreSolution, customSoftwareTypes } from "@/data/services";

export const CEO_DEFAULT_KEY = "VISION_CEO_2026";

export interface ManagedService extends CoreSolution {
  id: string;
  isVisible: boolean;
}

export interface ManagedSaaSProduct extends SaaSProduct {
  isVisible: boolean;
  isFeatured: boolean;
}

const STORAGE_KEY_AUTH = "vision_ceo_authenticated";
const STORAGE_KEY_SERVICES = "vision_ceo_managed_services";
const STORAGE_KEY_PRODUCTS = "vision_ceo_managed_products";

// Initial default state for Services
const defaultServices: ManagedService[] = coreSolutions.map((s, idx) => ({
  ...s,
  id: `service_${idx}`,
  isVisible: true
}));

// Initial default state for Products
const defaultProducts: ManagedSaaSProduct[] = saasProducts.map((p) => ({
  ...p,
  isVisible: true,
  isFeatured: p.id === "torqueos" || p.id === "syndent"
}));

export const AdminStore = {
  // Auth Check
  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY_AUTH) === "true";
  },

  login(key: string): boolean {
    if (key.trim() === CEO_DEFAULT_KEY) {
      localStorage.setItem(STORAGE_KEY_AUTH, "true");
      return true;
    }
    return false;
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY_AUTH);
    }
  },

  // Services Management
  getServices(): ManagedService[] {
    if (typeof window === "undefined") return defaultServices;
    const stored = localStorage.getItem(STORAGE_KEY_SERVICES);
    if (!stored) return defaultServices;
    try {
      return JSON.parse(stored);
    } catch {
      return defaultServices;
    }
  },

  saveServices(services: ManagedService[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
      window.dispatchEvent(new Event("vision_services_updated"));
    }
  },

  toggleServiceVisibility(id: string): ManagedService[] {
    const current = this.getServices();
    const updated = current.map((s) => (s.id === id ? { ...s, isVisible: !s.isVisible } : s));
    this.saveServices(updated);
    return updated;
  },

  // SaaS Products Management
  getProducts(): ManagedSaaSProduct[] {
    if (typeof window === "undefined") return defaultProducts;
    const stored = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (!stored) return defaultProducts;
    try {
      return JSON.parse(stored);
    } catch {
      return defaultProducts;
    }
  },

  saveProducts(products: ManagedSaaSProduct[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
      window.dispatchEvent(new Event("vision_products_updated"));
    }
  },

  toggleProductVisibility(id: string): ManagedSaaSProduct[] {
    const current = this.getProducts();
    const updated = current.map((p) => (p.id === id ? { ...p, isVisible: !p.isVisible } : p));
    this.saveProducts(updated);
    return updated;
  },

  toggleProductFeatured(id: string): ManagedSaaSProduct[] {
    const current = this.getProducts();
    const updated = current.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
    this.saveProducts(updated);
    return updated;
  },

  updateProductStatus(id: string, status: "Produção" | "Piloto" | "Disponível"): ManagedSaaSProduct[] {
    const current = this.getProducts();
    const updated = current.map((p) => (p.id === id ? { ...p, status } : p));
    this.saveProducts(updated);
    return updated;
  },

  resetDefaults(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY_SERVICES);
      localStorage.removeItem(STORAGE_KEY_PRODUCTS);
      window.dispatchEvent(new Event("vision_services_updated"));
      window.dispatchEvent(new Event("vision_products_updated"));
    }
  }
};
