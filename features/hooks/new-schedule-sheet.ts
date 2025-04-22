import { create } from "zustand";

interface NewScheduleSheetStateType {
  open: boolean;
  setOpen: () => void;
  onClose: () => void;
}

export const NewScheduleSheetState = create<NewScheduleSheetStateType>(
  (set) => ({
    open: false,
    setOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
  }),
);
