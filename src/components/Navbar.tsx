import React from "react";
import Image from "next/image";

type Props = {
  selectedFlavor: string;
  setSelectedFlavor: (value: string) => void;
};

const Navbar = ({ selectedFlavor, setSelectedFlavor }: Props) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const flavor = e.target.value;
    setSelectedFlavor(flavor);
    e.target.value = "";
  };

  return (
    <div className="flex flex-row justify-between items-center w-full px-10 py-4 bg-transparent">
      <div className="pl-6">
        <Image src="/logo.png" alt="Logo" width={70} height={70} />
      </div>
      <div>
        <ul className="flex flex-row gap-8 text-lg font-semibold">
          <li>Home</li>
          <li>Shop</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="border-2 border-white rounded-2xl mr-6 p-2">
        <select defaultValue="" onChange={handleSelectChange} className="bg-transparent outline-none">
          <option value="" disabled>
            Order Your Ice-cream
          </option>
          <option value="strawberry">Strawberry</option>
          <option value="blueberry">Blueberry</option>
          <option value="chocolate">Chocolate</option>
          <option value="evergreen">Evergreen</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
