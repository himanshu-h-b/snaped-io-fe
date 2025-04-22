interface AspectRatioProps {}

const AspectRatio = ({
  selected,
  setSelected,
  data,
}: {
  selected: number;
  setSelected: any;
  data: Array<any>;
}) => {
  return (
    <div className="flex space-x-4 mt-4">
      {data.map((v, _) => (
        <button
          key={_}
          onClick={() => setSelected(v.id)}
          type="button"
          className="flex flex-col min-w-36"
        >
          <div
            className={`flex flex-col items-center rounded-md py-1 px-3 border ${selected === v.id ? "border-purple-500" : "border-[#121212] dark:border-white"} transition-all duration-300`}
          >
            <div
              className={`flex space-x-1 text-sm bg-gradient-to-r ${selected === v.id ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text" : "bg-transparent text-[#121212] dark:text-gray-200"} transition-all duration-300 text-center`}
            >
              <span>{v.title}</span>
              <span>{v.ratio}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AspectRatio;
