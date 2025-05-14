import { useState } from "react";

interface techTileProps {
  iconName: string;
  icon: string;
}

const TechTile = ({ iconName, icon }: techTileProps) => {
  const [Open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!Open);
  };

  return (
    <div
      className="bg-black/30 w-1/5 rounded-lg flex justify-center items-center cursor-pointer p-1"
      onClick={() => handleClickOpen()}
    >
      {Open ? iconName : <img src={icon} alt="iconName" className="h-[80%]" />}
    </div>
  );
};
export default TechTile;
