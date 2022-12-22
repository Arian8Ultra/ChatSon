import create from 'zustand'

const useModalStore = create(
    (set, get) => ({
      openQRmodal: false,
      QRid:'',
      changeQRmodal: (QRid) => set({ openQRmodal: !get().openQRmodal, QRid:QRid}),
    })
)

export default useModalStore;