import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { EditScheduleSheetState } from "../hooks/edit-schedule-sheet";
import ScheduleForm from "./schedule-form";
import { Schedule } from "@/types/types";

const EditScheduleForm = () => {
  const { open, onClose, id } = EditScheduleSheetState();

  const onSubmit = (data: Schedule) => {
    console.log(data);
  };

  const defaultValues: Schedule = {
    id: id || "",
    date: new Date(),
    scheduler: "",
    post_type: "",
    account: [],
  };

  const onCancel = () => {};

  return (
    <Sheet onOpenChange={onClose} open={open}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Schedule</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScheduleForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </SheetContent>
    </Sheet>
  );
};

export default EditScheduleForm;
