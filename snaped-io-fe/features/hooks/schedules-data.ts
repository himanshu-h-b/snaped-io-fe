import { Schedule } from "@/types/types";
import { create } from "zustand";

interface SchedulesStore {
  schedules: Schedule[];
  addSchedule(schedule: Schedule): void;
  removeSchedule(schedule: Schedule): void;
}

export const useSchedulesStore = create<SchedulesStore>((set) => ({
  schedules: [],
  addSchedule: (schedule) =>
    set((state) => ({ schedules: [...state.schedules, schedule] })),
  removeSchedule: (schedule) =>
    set((state) => ({
      schedules: state.schedules.filter((s) => s.id !== schedule.id),
    })),
}));
