import { Button } from "@/components/button";
import { SelectOptions } from "@/components/select-options";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { interNormal, rubikMedium, rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { RiGeminiLine } from "react-icons/ri";
import { z } from "zod";

const formSchema = z
  .object({
    script: z.string().optional(),
    prompt: z.string().optional(),
    caption: z.string().min(1, "Required"),
    voice_link: z.string().min(1, "Required"),
    video_length: z.string().min(1, "Required"),
    aspect_ratio: z.string().min(1, "Required"),
    folder: z.string().min(1, "Required"),
  })
  .refine((data) => data.script || data.prompt, {
    message: "Script is required",
    path: ["script"],
  })
  .refine((data) => data.script || data.prompt, {
    message: "Prompt is required",
    path: ["prompt"],
  });

type FormType = z.infer<typeof formSchema>;

interface VideoOptionsProps {
  defaultValues: FormType;
  onSubmit: (data: FormType, isAIMode: boolean) => void;
}

const VideoOptionsForm: React.FC<VideoOptionsProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAIMode, setIsAIMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (data: FormType) => {
    console.log(data);
    setIsGenerating(true);
    setIsOpen(true);
    onSubmit(data, isAIMode);
    // setIsGenerating(false);
  };

  const captionOptions = [
    { label: "Hello", value: "hello" },
    { label: "Hii", value: "hii" },
    { label: "Bye", value: "bye" },
  ];

  const voiceOptions = [
    { label: "Voice 1", value: "voice1" },
    { label: "Voice 2", value: "voice2" },
  ];

  const video_lengthOptions = [
    { label: "15 Seconds", value: "5" },
    { label: "30 Seconds", value: "30" },
    { label: "45 Seconds", value: "45" },
    { label: "1 Minute", value: "60" },
    { label: "2 Minutes", value: "120" },
    { label: "5 Minutes", value: "300" },
  ];

  const aspect_ratioOptions = [
    { label: "Square HD", value: "Square HD" },
    { label: "Portrait 3:4 HD", value: "Portrait 3:4 HD" },
    { label: "Portrait 9:16 HD", value: "Portrait 9:16 HD" },
    { label: "Landscape 4:3 HD", value: "Landscape 4:3 HD" },
    { label: "Landscape 16:9 HD", value: "Landscape 16:9 HD" },
  ];

  const folderOptions = [
    { label: "Home", value: "home" },
    { label: "Work", value: "work" },
  ];

  return (
    <>
      {isGenerating && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent>
            <h2
              className={
                (rubikMedium.className,
                "text-center text-lg lg:text-2xl xl:text-3xl text-foreground/80 tracking-wider italic")
              }
            >
              We're generating the Faceless V1 video. Once completed, we'll send
              you an email with the video link.
            </h2>
            <Button onClick={() => setIsOpen(false)} className="py-2">
              Okay
            </Button>
          </DialogContent>
        </Dialog>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {isAIMode ? (
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className={cn(rubikNormal.className)}>
                      Prompt
                    </FormLabel>
                    <Button
                      type="button"
                      disabled={form.formState.isSubmitting || isGenerating}
                      onClick={() => {
                        form.setValue("prompt", "");
                        setIsAIMode(false);
                      }}
                    >
                      <MdOutlineSwapHoriz className="mr-2 h-4 w-4" />
                      Switch to script
                    </Button>
                  </div>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder="Enter prompt......."
                      className={cn(
                        interNormal.className,
                        "disabled:opacity-50",
                      )}
                      disabled={isGenerating}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="script"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className={cn(rubikNormal.className)}>
                      Script
                    </FormLabel>
                    <Button
                      type="button"
                      disabled={form.formState.isSubmitting || isGenerating}
                      onClick={() => {
                        form.setValue("script", "");
                        setIsAIMode(true);
                      }}
                    >
                      <MdOutlineSwapHoriz className="mr-2 h-4 w-4" />
                      Generate Script with AI
                    </Button>
                  </div>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder="Enter script........"
                      className={cn(
                        interNormal.className,
                        "disabled:opacity-50",
                      )}
                      disabled={form.formState.isSubmitting || isGenerating}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(rubikNormal.className)}>
                    Captions
                  </FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select caption"
                      options={captionOptions}
                      onChange={(value) => field.onChange(value)}
                      disabled={form.formState.isSubmitting || isGenerating}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voice_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(rubikNormal.className)}>
                    Voice
                  </FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select voice"
                      options={voiceOptions}
                      onChange={(value) => field.onChange(value)}
                      disabled={form.formState.isSubmitting || isGenerating}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video_length"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(rubikNormal.className)}>
                    Video Length
                  </FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select video length"
                      options={video_lengthOptions}
                      onChange={(value) => field.onChange(value)}
                      disabled={form.formState.isSubmitting || isGenerating}
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
                  <FormLabel className={cn(rubikNormal.className)}>
                    Aspect Ratio
                  </FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select aspect ratio"
                      options={aspect_ratioOptions}
                      onChange={(value) => field.onChange(value)}
                      disabled={form.formState.isSubmitting || isGenerating}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className={cn(rubikNormal.className)}>Advanced Options</p>
            <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="folder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(rubikNormal.className)}>
                      Folder
                    </FormLabel>
                    <FormControl>
                      <SelectOptions
                        placeholder="Select folder"
                        options={folderOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={form.formState.isSubmitting || isGenerating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className={cn(
                rubikNormal.className,
                "flex items-center gap-2 py-2",
              )}
              disabled={form.formState.isSubmitting || isGenerating}
            >
              <RiGeminiLine className="size-4" />
              Generate Video
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default VideoOptionsForm;
