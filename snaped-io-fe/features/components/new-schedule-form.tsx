import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NewScheduleSheetState } from "../hooks/new-schedule-sheet";
import ScheduleForm from "./schedule-form";
import { Schedule } from "@/types/types";
import { useSchedulesStore } from "../hooks/schedules-data";

const NewScheduleSheet = () => {
  const { open, onClose } = NewScheduleSheetState();
  const { addSchedule } = useSchedulesStore();

  const onSubmit = (data: Schedule) => {
    addSchedule(data);
    onClose();
  };

  const onCancel = () => {};

  return (
    <Sheet onOpenChange={onClose} open={open}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Schedule</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScheduleForm onSubmit={onSubmit} onCancel={onCancel} />
      </SheetContent>
    </Sheet>
  );
};

export default NewScheduleSheet;
