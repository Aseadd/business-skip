import { ArrowRight, Clock, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import type { Skip } from "../types/skip";
import binIcon from "../assets/bin-1.png";

interface SkipCardProps {
  skip: Skip;
  onSelect?: (skip: Skip) => void;
  selected?: boolean;
}

const SkipCard = ({ skip, onSelect, selected = false }: SkipCardProps) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);
  const isAvailable = !skip.forbidden;

  const handleSelect = () => {
    if (isAvailable && onSelect) {
      onSelect(skip);
    }
  };

  return (
    <div
      role="button"
      aria-pressed={selected}
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleSelect();
      }}
      className={`flex flex-col md:flex-row bg-[#1C1C1C] backdrop-opacity-10 rounded-2xl shadow-md border hover:shadow-xl transition cursor-pointer ${
        selected ? "ring-2 ring-blue-500" : "border-gray-200"
      }`}
    >
      {/* Skip Image */}
      <div className="relative flex-shrink-0 md:w-48 h-48 md:h-auto md:rounded-l-2xl overflow-hidden bg-gradient-to-r from-[#d6d7da] to-[#eff1f4]">
        <img
          src={binIcon}
          alt={`${skip.size} yard skip`}
          className="object-cover w-full h-full"
        />
        {skip.allowed_on_road === false && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-amber-100/80 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">
            <AlertTriangle className="w-3 h-3" />
            No Road Placement
          </div>
        )}
        <div className="absolute top-2 left-2 bg-[#002366] text-white text-xs font-bold rounded-md px-2 py-1">
          {skip.size} yds
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between p-2 flex-grow">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-white">
              {skip.size} Yards Skip
            </h3>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#00369C]">
                £{totalPrice}
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <Clock className="w-4 h-4 text-gray-400" />
              {skip.hire_period_days} days hire
            </div>

            {!skip.allowed_on_road && (
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <AlertTriangle className="w-3 h-3" />
                Driveway only
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center mt-2 ">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSelect();
            }}
            disabled={!isAvailable}
            className={`py-2 px-4 rounded-lg text-sm font-semibold ${
              isAvailable
                ? selected
                  ? "bg-[#0037C1] text-white cursor-pointer "
                  : "bg-[#2A2A2A] text-white cursor-pointer transition "
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            {isAvailable ? (
              selected ? (
                "Selected"
              ) : (
                <span className="flex items-center">
                  Book Now <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              )
            ) : (
              "Not Available"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
