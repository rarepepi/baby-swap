import { LiFiWidgetNext } from "../lifi";
import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image alt="Baby" src="/BABY-Banner.png" width={300} height={150} />
      <LiFiWidgetNext />
    </div>
  );
};
