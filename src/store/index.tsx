import { create } from "zustand";
interface UseStoreDataType {
  yearDropdown: boolean;
  openYearDropdown: () => void;
  closeYearDropdown: () => void;
}

const useStore = create<UseStoreDataType>((set) => ({
  yearDropdown: false,
  openYearDropdown: () => set(() => ({ yearDropdown: true })),
  closeYearDropdown: () => set(() => ({ yearDropdown: false })),
}));

export default useStore;
