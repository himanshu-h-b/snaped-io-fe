import { create } from "zustand";

interface EditScheduleSheetStateType {
  id?: string;
  open: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
}

export const EditScheduleSheetState = create<EditScheduleSheetStateType>(
  (set) => ({
    id: undefined,
    open: false,
    onOpen: (id) => set({ open: true, id }),
    onClose: () => set({ open: false, id: undefined }),
  }),
);
