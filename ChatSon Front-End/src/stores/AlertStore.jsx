import create from "zustand";

const useAlertStore = create((set, get) => ({
    open: false,
    text:'',
    changeAlert: (text) => set({ open: !get().open , text:text  }),
}));

export default useAlertStore;
