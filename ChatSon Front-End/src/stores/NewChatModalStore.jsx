import create from 'zustand'

const useNewChatModalStore = create(
    (set, get) => ({
      open: false,
      changeModal: () => set({ open: !get().open }),
    })
)

export default useNewChatModalStore;