import create from 'zustand'
import { persist } from 'zustand/middleware'

const useProfileBarStore = create(
  persist(
    (set, get) => ({
      open: false,
      changeSideBar: () => set({ open: !get().open }),
    }),
    {
      name: 'siderBard-store', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export default useProfileBarStore;