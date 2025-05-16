import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface techTileProps {
  iconName: string;
  icon: string;
}

const TechTile = ({ iconName, icon }: techTileProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-black/30 w-[18%] rounded-lg flex justify-center items-center cursor-pointer p-1 break-all">
            <img src={icon} alt="iconName" className="h-[80%]" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default TechTile;
