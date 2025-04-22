"use client";

import { rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import AvatarForm from "./components/avatar-form";
import AvatarSelection, { Avatar } from "./components/avatar-selection";
import Preview from "./components/preview";
import { PersonStanding, StarIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAvatarStore } from "@/store/useAvatarStore";
import BackgroundSelection, { Background } from "./components/background-selector";
import { useEffect, useState } from "react";

const AvatarVideo = () => {
  const {
    selectedMenu,
    isSmartMotion,
    allowReverse,
    selectedAvatar,
    captionEnabled,
    selectedBackground,
    setSelectedBackground,
    setAllowReverse,
    setSelectedMenu,
    setIsSmartMotion,
    setSelectedAvatar,
    setCaptionEnabled,
    setAvatarData
  } = useAvatarStore();

  const changeMenu = (id: number) => {
    setSelectedMenu(id);
  };

  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [publicAvatars, setPublicAvatar] = useState<Avatar[]>([]);
  const [backgrounds, setBackgrounds] = useState<Background[]>([]);
  const [favAvatars, setFavAvatars] = useState<Avatar[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setIsLoading(true);
        const avtrs = await fetch(`/api/avatars?public=false`);
        const data_avtrs = await avtrs.json();
        setAvatars(data_avtrs.avatars);
        
        const pavtrs = await fetch(`/api/avatars?public=true`);
        const data_pavtrs = await pavtrs.json();
        setPublicAvatar(data_pavtrs.avatars);
        
        const response = await fetch("/api/backgrounds");
        const data = await response.json();
        setBackgrounds(data.backgrounds);
        if(data_avtrs.avatars.length!==0){
          setSelectedAvatar(data_avtrs.avatars[0]._id);

          if(data.backgrounds.length!==0){
            setSelectedBackground(data.backgrounds[0]._id);
            setAvatarData({ backgroundImage: data.backgrounds[0].url });
          }
          setAvatarData({
            avatarImage: data_avtrs.avatars[0].people_img || data_avtrs.avatars[0].video_cover,
          });
        }
      } catch (error) {
        console.error("Error fetching avatars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div className="bg-background shadow rounded-lg border p-4">
        <div className="grid grid-cols-5 w-full h-full">
          <div className="col-span-2 border-r w-full border-gray-300 pr-4">
            <div className={cn(rubikNormal.className, "mb-6")}>
              <p>Avatar Video</p>
              <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
            </div>
            <AvatarForm />
          </div>
          <div className="col-span-3 flex flex-col p-4 space-y-8">
            <Preview />

            <div className="flex flex-col space-y-3">
              <div className="flex space-x-2 overflow-x-auto text-nowrap">
                <button
                  onClick={() => changeMenu(0)}
                  className={`flex items-center space-x-1 ${selectedMenu === 0 ? "border" : "border-0"} rounded-md px-2 py-1`}
                >
                  <StarIcon className="size-5" />
                  <span>Favorites</span>
                </button>

                <button
                  onClick={() => changeMenu(1)}
                  className={`flex items-center space-x-1 ${selectedMenu === 1 ? "border" : "border-0"} rounded-md px-2 py-1`}
                >
                  <PersonStanding className="size-5" />
                  <span>Avatars</span>
                </button>

                <button
                  onClick={() => changeMenu(2)}
                  className={`flex items-center space-x-1 ${selectedMenu === 2 ? "border" : "border-0"} rounded-md px-2 py-1`}
                >
                  <PersonStanding className="size-5" />
                  <span className="text-nowrap">Public Avatars</span>
                </button>

                <button
                  onClick={() => changeMenu(3)}
                  className={`flex items-center space-x-1 ${selectedMenu === 3 ? "border" : "border-0"} rounded-md px-2 py-1`}
                >
                  <PersonStanding className="size-5" />
                  <span>Backgrounds</span>
                </button>

                <div className="flex items-center space-x-1 text-white">
                  <Switch
                    checked={isSmartMotion}
                    onCheckedChange={(e) => setIsSmartMotion(!isSmartMotion)}
                    id="smart-motion"
                    className="bg-white"
                  />
                  <Label
                    className="dark:text-gray-200 text-black"
                    htmlFor="smart-motion"
                  >
                    Smart Motion
                  </Label>
                </div>

                <div className="flex items-center space-x-1 text-white">
                  <Switch
                    checked={allowReverse}
                    onCheckedChange={(e) => setAllowReverse(!allowReverse)}
                    id="allow-reverse"
                    className="bg-white"
                  />
                  <Label
                    className="dark:text-gray-200 text-black"
                    htmlFor="allow-reverse"
                  >
                    Allow Reverse
                  </Label>
                </div>

                <div className="flex items-center space-x-1 text-white">
                  <Switch
                    checked={captionEnabled}
                    onCheckedChange={(e) => setCaptionEnabled(!captionEnabled)}
                    id="captions"
                    className="bg-white"
                  />
                  <Label
                    className="dark:text-gray-200 text-black"
                    htmlFor="captions"
                  >
                    Captions
                  </Label>
                </div>
              </div>
              {selectedMenu === 1 && (
                <AvatarSelection
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  avatars={avatars}
                  selectedAvatar={selectedAvatar}
                  setSelectedAvatar={setSelectedAvatar}
                />
              )}
              {selectedMenu === 2 && (
                <AvatarSelection
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  avatars={publicAvatars}
                  selectedAvatar={selectedAvatar}
                  setSelectedAvatar={setSelectedAvatar}
                />
              )}
              {selectedMenu === 3 && (
                <BackgroundSelection
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                  allBackgrounds={backgrounds}
                  selectedBackground={selectedBackground}
                  setSelectedBackground={setSelectedBackground}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarVideo;
