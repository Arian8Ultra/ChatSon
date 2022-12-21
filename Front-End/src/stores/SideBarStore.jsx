import create from 'zustand'
import { persist } from 'zustand/middleware'

const useSideBarStore = create(
  persist(
    (set, get) => ({
      open: false,
      drawerWidth: 20 ,
      changeSideBar: () => set({ open: !get().open }),
      changeDrawerWidth: (newSize) => set({ drawerWidth: newSize }),
    }),
    {
      name: 'siderBard-store', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export default useSideBarStore;