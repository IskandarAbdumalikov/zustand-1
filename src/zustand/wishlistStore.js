import { create } from "zustand";

const wishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  toggle: (payload) =>
    set((state) => {
      let index = state.wishlist.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        return { wishlist: [...state.wishlist, payload] };
      } else {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        return {
          wishlist: state.wishlist.filter((el) => el.id !== payload.id),
        };
      }
    }),
}));

export default wishlistStore;
