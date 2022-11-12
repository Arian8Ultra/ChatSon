import create from 'zustand'
import { persist } from 'zustand/middleware'

const usePageStore = create(
  persist(
    (set, get) => ({
      pageName: 'Home',
      changePageName: (newName) => set({ pageName: newName }),
    }),
    {
      name: 'siderBard-store', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export default usePageStore;