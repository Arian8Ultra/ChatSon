import create from 'zustand'

const useModalStore = create(
    (set, get) => ({
      open: false,
      changeModal: () => set({ open: !get().open }),
    })
)

export default useModalStore;