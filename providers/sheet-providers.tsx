"use client";
import { useEffect, useState } from "react";
import EditScheduleForm from "@/features/components/edit-schedule-form";
import NewScheduleForm from "@/features/components/new-schedule-form";

const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewScheduleForm />
      <EditScheduleForm />
    </>
  );
};

export default SheetProvider;
