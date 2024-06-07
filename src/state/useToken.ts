import {create} from "zustand";

interface Token {
    token: string;
    setToken: (token: string) => void;
}

export const useToken = create<Token>()((set) => ({
  token: '',
  setToken: (token) => set({token: token}),
}))