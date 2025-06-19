"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  selectedFlavor: string;
  setSelectedFlavor: (value: string) => void;
};

function capitalizeFirstLetter(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Hero = ({ selectedFlavor, setSelectedFlavor }: Props) => {
const [prevFlavor, setPrevFlavor] = useState(selectedFlavor);
const [isAnimating, setIsAnimating] = useState(false);

useEffect(() => {
  if (selectedFlavor !== prevFlavor) {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setPrevFlavor(selectedFlavor);
      setIsAnimating(false);
    }, 200);
    return () => clearTimeout(timeout);
  }
}, [selectedFlavor, prevFlavor]);

  return (
    <div className="flex justify-around items-start w-full text-center py-10 bg-transparent">
      <div className="flex flex-col text-start pl-20 relative top-[-60]">
        <h1 className="text-[160px] leading-tightest tracking-normal font-pacifico">icecream</h1>
        <h2 className="text-[66px] font-bold leading-normal100 tracking-tight0">
          {capitalizeFirstLetter(selectedFlavor)} cone
        </h2>
        <p className="font-poppins font-semibold text-[22px] leading-[140%] tracking-[0] mb-4">
          Embark on a culinary journey of delight as you ymmerse yourself in our
          <br />
          artisan-crafted ice cream collectioneEach flavor a story, each scoop
          <br />
          an unforgettable chapter in your sweet odyssey!
        </p>
        <p className="font-poppins font-semibold text-[22px] leading-[140%] tracking-[0] mb-4">
          Indulge in a world of imagination, where every scoop
          <br />
          unveils a new taste adventure! choose your favorite
        </p>
        <div className="flex flex-row justify-around items-center">
          <div className="h-50 relative overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-white z-0 rounded-2xl"
              style={{ width: "120px", height: "100px" }}
            />
            <div className="relative z-10 inline-block transition-transform duration-300 hover:[transform:scale(1.1)_rotate(15deg)]">
              <Image
                src="/strawberryComp.png"
                alt="Strawberry icon"
                onClick={() => setSelectedFlavor("strawberry")}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="h-50 relative overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-white z-0 rounded-2xl"
              style={{ width: "120px", height: "100px" }}
            />
            <div className="relative z-10 inline-block transition-transform duration-300 hover:[transform:scale(1.1)_rotate(15deg)]">
              <Image
                src="/blueberryComp.png"
                alt="Blueberry icon"
                onClick={() => setSelectedFlavor("blueberry")}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="h-50 relative overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-white z-0 rounded-2xl"
              style={{ width: "120px", height: "100px" }}
            />
            <div className="relative z-10 inline-block transition-transform duration-300 hover:[transform:scale(1.1)_rotate(15deg)]">
              <Image
                src="/chocolateComp.png"
                alt="Chocolate icon"
                onClick={() => setSelectedFlavor("chocolate")}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="h-50 relative overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-white z-0 rounded-2xl"
              style={{ width: "120px", height: "100px" }}
            />
            <div className="relative z-10 inline-block transition-transform duration-300 hover:[transform:scale(1.1)_rotate(15deg)]">
              <Image
                src="/evergreenComp.png"
                alt="Evergreen icon"
                onClick={() => setSelectedFlavor("evergreen")}
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>

        <div className="mx-auto mt-6 w-fit h-fit overflow-hidden relative">
        <div
            className={`transition-all duration-500 ease-out inline-block transform ${
            isAnimating
                ? "translate-x-32 translate-y-32 opacity-0"
                : "translate-x-0 translate-y-0 opacity-100"
            }`}
        >
            <Image
            src={`/${prevFlavor}.png`}
            alt={`${prevFlavor} ice cream`}
            width={500}
            height={500}
            />
        </div>
        </div>
    </div>
  );
};

export default Hero;
