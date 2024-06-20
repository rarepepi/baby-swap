"use client";
import { UniSwapPage } from "../uniswap";
import "@uniswap/widgets/fonts.css";

export const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center my-8">
        Welcome to the $BABY Swap!
      </h1>
      <UniSwapPage />
    </div>
  );
};
