"use client";
import { cn } from "@/lib/utils";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Button as CustomButton } from "@/components/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

const formSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => crypto.randomUUID()),
  date: z.date({
    required_error: "A date is required.",
  }),
  scheduler: z.string().min(1, "Scheduler is required"),
  post_type: z.string().min(1, "Post type is required"),
  account: z.string().array().min(1, "Atleast One Account is required"),
});

type FormType = z.infer<typeof formSchema>;

interface ScheduleFormProps {
  defaultValues?: FormType;
  onSubmit: (values: FormType) => void;
  onCancel: () => void;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({
  defaultValues,
  onSubmit,
  onCancel,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormType>({
    defaultValues: defaultValues || {
      date: new Date(),
      scheduler: "",
      post_type: "",
      account: [],
    },
    resolver: zodResolver(formSchema),
  });

  const schedulerOptions = [
    { value: "scheduler1", label: "Scheduler 1" },
    { value: "scheduler2", label: "Scheduler 2" },
    { value: "scheduler3", label: "Scheduler 3" },
  ];

  const postTypeOptions = [
    { label: "All Posts", value: "all_posts" },
    { label: "Image", value: "image" },
    { label: "Video", value: "video" },
  ];

  const accountOptions = [
    { label: "Instagram", value: "instagram" },
    { label: "YouTube", value: "youtube" },
    { label: "Twitter", value: "twitter" },
    { label: "Facebook", value: "facebook" },
    { label: "LinkedIn", value: "linkedin" },
  ];

  const onSubmitHandler = (values: FormType) => {
    console.log(values);
    setIsLoading(true);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="mt-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={isLoading}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <div className="flex items-center">
                            <span>Pick a date</span>
                            <CalendarIcon className="size-4 ml-2" />
                          </div>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={isLoading}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scheduler"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Scheduler</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a scheduler" />
                    </SelectTrigger>
                    <SelectContent>
                      {schedulerOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="post_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Type</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    disabled={isLoading}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a post type" />
                    </SelectTrigger>
                    <SelectContent>
                      {postTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account</FormLabel>
                <FormControl>
                  <MultiSelect
                    onValueChange={(values) => field.onChange(values)}
                    defaultValue={field.value}
                    options={accountOptions}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CustomButton type="submit" className="w-full py-2 mt-4">
            Submit
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default ScheduleForm;
