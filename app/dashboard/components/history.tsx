import { interNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";

const History = () => {
  const history = [
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
  ];
  return (
    <div>
      <h2
        className={cn(
          "font-extralight mb-2 text-lg text-foreground/80",
          interNormal.className,
        )}
      >
        History
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-200 dark:bg-[#404040] shadow px-4 pt-4 pb-2 rounded-lg flex flex-col",
              interNormal.className,
            )}
          >
            <p className="text-base font-extralight text-foreground/80">
              {item.title}
            </p>
            <p className="font-extralight text-foreground/50 text-sm">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
