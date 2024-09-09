import { create } from "zustand";
interface UseStoreDataType {
  yearDropdown: boolean;
  profile: boolean;
  addDropdown: boolean;
  openYearDropdown: () => void;
  closeYearDropdown: () => void;
  openProfile: () => void;
  closeProfile: () => void;
  openAddDropdown: () => void;
  closeAddDropdown: () => void;
}

const useStore = create<UseStoreDataType>((set) => ({
  yearDropdown: false,
  profile: false,
  addDropdown: false,
  openYearDropdown: () => set(() => ({ yearDropdown: true, profile: false })),
  closeYearDropdown: () => set(() => ({ yearDropdown: false })),
  openProfile: () => set(() => ({ profile: true, yearDropdown: false })),
  closeProfile: () => set(() => ({ profile: false })),
  openAddDropdown: () => set(() => ({ addDropdown:true, profile: false, yearDropdown: false })),
  closeAddDropdown: () => set(() => ({ addDropdown: false })),
}));

export default useStore;
