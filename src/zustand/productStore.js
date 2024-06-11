import { create } from "zustand";

const productStore = create((set) => ({
  products: [],
  product: null,

  fetchProducts: async () => {
    const res = await fetch(
      `https://66458542b8925626f892194e.mockapi.io/api/v1/products`
    );
    const data = await res.json();
    set({ products: data });
  },

  fetchSingleProduct: async (id) => {
    const res = await fetch(
      `https://66458542b8925626f892194e.mockapi.io/api/v1/products/${id}`
    );
    const data = await res.json();
    set({ product: data });
  },

  addProduct: async (payload) => {
    const res = await fetch(
      `https://66458542b8925626f892194e.mockapi.io/api/v1/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const newProduct = await res.json();
    set((state) => ({ products: [...state.products, newProduct] }));
  },

  updateProduct: async (id, payload) => {
    const res = await fetch(
      `https://66458542b8925626f892194e.mockapi.io/api/v1/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const updatedProduct = await res.json();
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? updatedProduct : product
      ),
    }));
  },

  deleteProduct: async (id) => {
    if (confirm("Are you sure?")) {
      await fetch(
        `https://66458542b8925626f892194e.mockapi.io/api/v1/products/${id}`,
        {
          method: "DELETE",
        }
      );
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      }));
    }
  },
}));

export default productStore;
