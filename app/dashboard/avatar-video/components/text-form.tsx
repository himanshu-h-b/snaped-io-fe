"use client";

import z from "zod";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { interNormal } from "@/fonts/font";
import { Button } from "@/components/button";
import { FaRegSquare } from "react-icons/fa6";
import { RiGeminiLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { SelectOptions } from "@/components/select-options";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  script: z.string().min(1, "Script is required"),
  language: z.string().min(1, "Language is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  aspect_ratio: z.string().min(1, "Aspect Ratio is required"),
});

type FormType = z.infer<typeof formSchema>;

interface TextFormProps {
  defaultValues: FormType;
  onSubmit: (data: FormType) => void;
  onCancel: () => void;
}

const TextForm: React.FC<TextFormProps> = ({
  defaultValues,
  onSubmit,
  onCancel,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormType>({
    defaultValues: defaultValues || {},
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (data: FormType) => {
    setIsLoading(true);
    console.log(data);
    // onSubmit(data);
  };

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "Hindi", value: "Hindi" },
  ];

  const subtitleOptions = [
    { label: "Hello", value: "hello" },
    { label: "Hii", value: "hii" },
    { label: "Bye", value: "bye" },
  ];

  const aspectRatioOptions = [
    {
      label: "Vertical (9:16)",
      value: "9:16",
      icon: HiOutlineDeviceMobile,
    },
    {
      label: "Horizontal (16:9)",
      value: "16:9",
      icon: IoTabletLandscapeOutline,
    },
    {
      label: "Square (1:1)",
      value: "1:1",
      icon: FaRegSquare,
    },
  ];

  return (
    <div className="pr-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="script"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Script</FormLabel>
                <FormControl>
                  <textarea
                    className={cn(
                      interNormal.className,
                      "border-2 rounded-lg px-2 py-2 focus:border-2 focus:border-purple-600 w-full",
                    )}
                    rows={6}
                    placeholder="Writer your script here......"
                    disabled={isLoading}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <SelectOptions
                    placeholder="Select a language"
                    options={languageOptions}
                    onChange={(value) => field.onChange(value)}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subtitle</FormLabel>
                <FormControl>
                  <SelectOptions
                    placeholder="Select a subtitle"
                    options={subtitleOptions}
                    onChange={(value) => field.onChange(value)}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="aspect_ratio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aspect Ratio</FormLabel>
                <FormControl>
                  <SelectOptions
                    placeholder="Select an aspect ratio"
                    options={aspectRatioOptions}
                    onChange={(value) => field.onChange(value)}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Button type="submit" className="px-4 py-2 mt-4">
              <RiGeminiLine className="mr-1 size-4" />
              Generate with AI
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TextForm;
