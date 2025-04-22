// "use client";
import { interNormal, rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/button";
import { Button as ShadcnBtn } from "@/components/ui/button";

const formSchema = z.object({
  // script: z.string().min(1, "Script is required"),
  prompt: z.string().min(10, "Minimum 10 characters are required"),
});

type FormType = z.infer<typeof formSchema>;

type Props = {
  defaultValues: FormType;
  onScriptSubmit: (data: FormType) => void;
};

const ScriptForm = ({ onScriptSubmit, defaultValues }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [msg, setMsg] = useState("");
  const form = useForm<FormType>({
    defaultValues: defaultValues || {},
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormType) => {
    setIsOpen(false);
    setIsGenerating(true);
    setMsg(
      "We're currently generating your video! Once it's ready, we'll send it straight to your email. Stay tuned!",
    );
    onScriptSubmit(data);
  };

  const onCancel = () => {
    setIsOpen(false);
    form.reset();
  };

  return (
    <div className="bg-background rounded-lg p-4 border shadow flex flex-col">
      <div className={cn(rubikNormal.className, "mb-6")}>
        <p>Image to Video</p>
        <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>What topics should we focus on?</DialogTitle>
              </DialogHeader>
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <textarea
                        {...field}
                        rows={5}
                        className={cn(
                          interNormal.className,
                          "border-2 rounded-lg px-2 py-2 focus:border-2 focus:border-purple-600 bg-primary disabled:opacity-50",
                        )}
                        disabled={form.formState.isSubmitting || isGenerating}
                        placeholder="Write your prompt here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-end">
                <ShadcnBtn
                  variant="outline"
                  className="mr-2 rounded-lg"
                  disabled={form.formState.isSubmitting || isGenerating}
                  onClick={onCancel}
                >
                  Cancel
                </ShadcnBtn>
                <Button
                  type="submit"
                  className="px-4 py-2"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.formState.isSubmitting || isGenerating}
                >
                  Generate
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="mt-2 w-fit border border-gradient text-gradient bg-custom-gradient bg-clip-text px-4 py-1 rounded-lg font-semibold hover:opacity-80 transition disabled:opacity-50"
              onClick={() => setIsOpen(true)}
              disabled={form.formState.isSubmitting || isGenerating}
            >
              Generate with AI
            </button>
          </div>
        </form>
      </Form>
      {msg && <p className="text-red-500 text-base italic">{msg}</p>}
    </div>
  );
};

export default ScriptForm;
