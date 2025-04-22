import { useAvatarStore } from "@/store/useAvatarStore";
import { px } from "motion/react";
import { useEffect, useState } from "react";

interface AspectRatioProps {
  aspectRatio: number[];
  setAspectRatio: any; //(ratio : number[]) => void;
}

const AspectRatio = ({ aspectRatio, setAspectRatio }: AspectRatioProps) => {
  const [selected, setSelected] = useState(1);
  const {setAvatarData , avatarData} = useAvatarStore();

  useEffect(()=>{
    

  } , [selected])

  const data = [
    {
      title: "Square",
      ratio: "1:1",
      id: 0,
      width: "30px",
      height: "30px",
      real_height : 1080,
      real_width : 1080
    },
    {
      title: "Horizontal",
      ratio: "16:9",
      id: 1,
      width: "40px",
      height: "30px",
      real_height : 1080,
      real_width : 1920
    },
    {
      title: "Vertical",
      ratio: "9:16",
      id: 2,
      width: "25px",
      height: "30px",
      real_height : 1920,
      real_width : 1080
    },
  ];

  return (
    <div className="flex space-x-4 mt-4">
      {data.map((v, _) => (
        <button
          key={_}
          onClick={() =>{setSelected(v.id); setAvatarData({ ...avatarData , web_bg_height: data[v.id].real_height , web_bg_width : data[v.id].real_width })}}
          type="button"
          className="flex flex-col"
        >
          <div
            className={`flex flex-col items-center rounded-md p-3 border ${selected === v.id ? "bg-gradient-to-r from-indigo-600 to-purple-500" : "bg-transparent"} transition-all duration-300`}
          >
            <div
              style={{
                width: v.width,
                height: v.height,
              }}
              className="rounded-md border-2 border-gray-300  bg-transparent bg-gradient-to-r "
            ></div>
          </div>
          <div
            className={`flex flex-col bg-gradient-to-r ${selected === v.id ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text" : "bg-transparent text-gray-200"} transition-all duration-300 text-center`}
          >
            <span>{v.title}</span>
            <span>{v.ratio}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AspectRatio;
