import { create } from "zustand";
interface UseStoreDataType {
  yearDropdown: boolean;
  profile: boolean;
  openYearDropdown: () => void;
  closeYearDropdown: () => void;
  openProfile: () => void;
  closeProfile: () => void;
}

const useStore = create<UseStoreDataType>((set) => ({
  yearDropdown: false,
  profile: false,
  openYearDropdown: () => set(() => ({ yearDropdown: true, profile: false })),
  closeYearDropdown: () => set(() => ({ yearDropdown: false })),
  openProfile: () => set(() => ({ profile: true, yearDropdown: false })),
  closeProfile: () => set(() => ({ profile: false })),
}));

export default useStore;
