import { create } from "zustand";

interface AvatarData {
  backgroundImage: string; // URL of the background image
  avatarImage: string; // URL of the avatar image
  web_people_x: number; // X position of avatar on canvas
  web_people_y: number; // Y position of avatar on canvas
  web_people_width: number; // Width of the avatar
  web_people_height: number; // Height of the avata
  web_bg_width: number; // Width of the background if aplicable
  web_bg_height: number; // Height of the background if aplicable
}

interface AvatarStore {
  text: string;
  language: string;
  audioUrl: string;
  videoUrl: string;
  isPublicAvatar: boolean;
  allowReverse: boolean;
  captionEnabled: boolean;
  selectedAnchor: string;
  selectedAvatar: string;
  selectedBackground: string;
  aspectRatio: string;
  selectedVoice: string;
  selectedMenu: number;
  isSmartMotion: boolean;
  generationProgress: number;
  avatarData: AvatarData;
  setText: (text: string) => void;
  setAllowReverse: (allowReverse: boolean) => void;
  setLanguage: (language: string) => void;
  setAudioUrl: (url: string) => void;
  setVideoUrl: (url: string) => void;
  setCaptionEnabled: (enabled: boolean) => void;
  setSelectedAnchor: (anchor: string) => void;
  setSelectedAvatar: (avatar: string) => void;
  setAspectRatio: (ratio: string) => void;
  setSelectedVoice: (voice: string) => void;
  setSelectedMenu: (menu: number) => void;
  setIsSmartMotion: (enabled: boolean) => void;
  setIsPublicAvatar: (value : boolean) => void;
  setGenerationProgress: (progress: number) => void;
  setSelectedBackground: (selectedBackground: string) => void;
  setAvatarData: (data: Partial<AvatarData>) => void;
}

export const useAvatarStore = create<AvatarStore>((set) => ({
  text: "",
  language: "",
  allowReverse: false,
  audioUrl: "",
  videoUrl: "",
  captionEnabled: false,
  selectedBackground : "",
  selectedAnchor: "",
  selectedAvatar: "",
  aspectRatio: "",
  selectedVoice: "",
  selectedMenu: 1,
  isSmartMotion: false,
  generationProgress: 0,
  isPublicAvatar:false,
  avatarData: {
    backgroundImage: "",
    avatarImage: "", 
    web_people_x: 576,
    web_people_y: 289, 
    web_people_width: 800,
    web_people_height: 800, 
    web_bg_width: 1920,
    web_bg_height: 1080
  },

  setText: (text) => set({ text }),
  setAllowReverse: (allowReverse) => set({ allowReverse }),
  setLanguage: (language) => set({ language }),
  setAudioUrl: (audioUrl) => set({ audioUrl }),
  setVideoUrl: (videoUrl) => set({ videoUrl }),
  setCaptionEnabled: (captionEnabled) => set({ captionEnabled }),
  setSelectedAnchor: (selectedAnchor) => set({ selectedAnchor }),
  setSelectedAvatar: (selectedAvatar) => set({ selectedAvatar }),
  setAspectRatio: (aspectRatio) => set({ aspectRatio }),
  setSelectedVoice: (selectedVoice) => set({ selectedVoice }),
  setSelectedMenu: (selectedMenu) => set({ selectedMenu }),
  setIsSmartMotion: (isSmartMotion) => set({ isSmartMotion }),
  setIsPublicAvatar: (isPublicAvatar) => set({isPublicAvatar}),
  setGenerationProgress: (generationProgress) => set({ generationProgress }),
  setSelectedBackground: (selectedBackground) => set({ selectedBackground }),
  setAvatarData: (data) => set((state) => ({
    avatarData: { ...state.avatarData, ...data },
  })),
}));
