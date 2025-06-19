"use client";

import Image from "next/image";

type Props = {
  flavour: string;
};
function capitalizeFirstLetter(str : string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const Hero = ({ flavour }: Props) => {
  return (
    <div className="flex justify-around w-full text-center py-10 bg-transparent">
        <div className=" flex flex-col text-start">
            <h1 className="text-[160px] leading-tightest tracking-normal font-pacifico">icecream</h1>
            <h2 className="text-[66px] font-bold leading-normal100 tracking-tight0">{capitalizeFirstLetter(flavour)} cone</h2>
            <p className="font-poppins font-semibold text-[22px] leading-[140%] tracking-[0] mb-4">Embark on a culinary journey of delight as you ymmerse yourself in our<br></br>artisan-crafted ice cream collectioneEach flavor a story, each scoop<br></br>an unforgettable chapter in your sweet odyssey! </p>
            <p className="font-poppins font-semibold text-[22px] leading-[140%] tracking-[0] mb-4">Indulge in a world of imagination, where every scoop<br></br>unveils a new taste adventure! choose your favorite</p>
            <div className="flex flex-row justify-around items-center">
                <Image
                    src="/strawberryComp.png"
                    alt={`${flavour} icon`}
                    width={150}
                    height={150}
                />
                <Image
                    src="/blueberryComp.png"
                    alt={`${flavour} icon`}
                    width={150}
                    height={150}
                />
                <Image
                    src="/chocolateComp.png"
                    alt={`${flavour} icon`}
                    width={150}
                    height={150}
                />
                <Image
                    src="/evergreenComp.png"
                    alt={`${flavour} icon`}
                    width={150}
                    height={150}
                />
            </div>
        </div>
        <div>
            <Image
                src={`/${flavour}.png`}
                alt={`${flavour} ice cream`}
                width={500}
                height={500}
                className="mx-auto mt-6"
                />
        </div>
    </div>
  );
};

export default Hero;
