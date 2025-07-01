import { create } from "zustand";

export const useStore = create((set) => ({
  email: '',
  pass:'',
  otp:'',
  updateData: ( product1, product2, product3 ) => set(() => ({ email:product1, pass:product2, otp:product3 })),
}))