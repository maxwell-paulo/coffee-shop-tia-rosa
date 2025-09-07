'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
    id: number;
    name: string;
    price: string; // Formatted price string like "R$ 2,50"
    quantity: number;
    imageUrl?: string;
};

export type CartState = {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: number) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    clear: () => void;
};

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === item.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                            ),
                        };
                    }
                    return { items: [...state.items, { ...item, quantity: 1 }] };
                }),

            removeItem: (id) =>
                set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

            increase: (id: number) =>
                set((state) => ({
                    items: state.items.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
                })),

            decrease: (id: number) =>
                set((state) => ({
                    items: state.items
                        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
                        .filter((i) => i.quantity > 0),
                })),

            clear: () => set({ items: [] }),
        }),
        {
            name: 'tia-rosa-cart',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ items: state.items }),
        }
    )
);

export const parsePriceToNumber = (price: string): number => {
    // Convert strings like "R$ 2,50" to 2.50
    const numeric = price.replace(/[^0-9,.-]/g, '').replace('.', '').replace(',', '.');
    const value = parseFloat(numeric);
    return Number.isNaN(value) ? 0 : value;
};


