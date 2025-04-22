import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Schedule } from "@/types/types";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { interMedium, interNormal } from "@/fonts/font";

export const columns: ColumnDef<Schedule>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={cn(interMedium.className)}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      return (
        <p className={cn(interNormal.className)}>
          {format(date, "dd MMMM, yyyy")}
        </p>
      );
    },
  },
  {
    accessorKey: "scheduler",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Scheduler
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const scheduler = row.getValue("scheduler") as string;
      return (
        <p className={cn(interNormal.className, "capitalize")}>{scheduler}</p>
      );
    },
  },
  {
    accessorKey: "post_type",
    header: ({ column }) => {
      return <p>Post Type</p>;
    },
    cell: ({ row }) => {
      const postType = row.getValue("post_type") as string;
      return (
        <p className={cn(interNormal.className, "capitalize")}>{postType}</p>
      );
    },
  },
  {
    accessorKey: "account",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Account
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const accounts = row.getValue("account") as string[];
      return (
        <p className={cn(interNormal.className, "capitalize")}>
          {accounts.map((account) => account).join(", ")}
        </p>
      );
    },
  },
];
