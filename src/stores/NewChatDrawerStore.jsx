import create from 'zustand'

const useNewChatDrawerStore = create(
    (set, get) => ({
      open: false,
      changeSideBar: () => set({ open: !get().open }),
    })
)

export default useNewChatDrawerStore;