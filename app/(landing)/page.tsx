import FirstSection from "./components/sections/first";
import SecondSection from "./components/sections/second";
import ThirdSection from "./components/sections/third";
import ForthSection from "./components/sections/forth";
import FifthSection from "./components/sections/fifth";
import SixthSection from "./components/sections/sixth";
import SeventhSection from "./components/sections/seventh";
import EigthSection from "./components/sections/eigth";
import NinthSection from "./components/sections/ninth";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinthSection />
    </div>
  );
}
