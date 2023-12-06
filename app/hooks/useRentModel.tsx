import { create } from 'zustand';

interface RegisterListing {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterListing>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;