import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddMotionDialog from "./dialogs/add-motion";
import ImageRegenerateDialog from "./dialogs/image-regenerate";
import StockVideoDialog from "./dialogs/stock-video";
import UploadMediaDialog from "./dialogs/upload-meida";

interface DialogManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogManager = ({ isOpen, onClose }: DialogManagerProps) => {
  const dialogs = [
    { id: "upload-media", component: UploadMediaDialog, name: "Upload Media" },
    {
      id: "image-regenerate",
      component: ImageRegenerateDialog,
      name: "Image Regenerate",
    },
    { id: "add-motion", component: AddMotionDialog, name: "Add Motion" },
    { id: "stock-video", component: StockVideoDialog, name: "Stock Video" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px]">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="flex justify-stretch w-full border bg-[#121212]">
            {dialogs.map((v, _) => (
              <TabsTrigger
                key={_}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 data-[state=active]:text-transparent bg-clip-text"
                value={v.id}
              >
                {v.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {dialogs.map((v, _) => (
            <TabsContent key={_} value={v.id}>
              <v.component />
            </TabsContent>
          ))}

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default DialogManager;
