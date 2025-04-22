"use client";
import { Button } from "@/components/button";
import { DataTable } from "@/components/ui/data-table";
import { NewScheduleSheetState } from "@/features/hooks/new-schedule-sheet";
import { useSchedulesStore } from "@/features/hooks/schedules-data";
import { rubikMedium, rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { columns } from "./components/columns";

const CalenderPage = () => {
  const { setOpen } = NewScheduleSheetState();
  const { schedules } = useSchedulesStore();
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div className="bg-background shadow rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className={cn(rubikNormal.className)}>Your Schedules</h2>
          <Button
            className={cn(rubikMedium.className, "py-2")}
            onClick={() => setOpen()}
          >
            Add New <Plus className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="mt-1">
          <DataTable data={schedules} columns={columns} filterKey="scheduler" />
        </div>
      </div>
    </div>
  );
};

export default CalenderPage;
