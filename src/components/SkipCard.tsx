"use client";

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
      className={`flex flex-row bg-white rounded-xl shadow-sm border hover:shadow-md transition cursor-pointer overflow-hidden ${
        selected
          ? "ring-2 ring-[#1C1C1C]"
          : "border-gray-200 hover:border-[#4E41E5] hover:border-2"
      }`}
    >
      {/* Skip Image */}
      <div className="relative w-44 h-36 flex-shrink-0 overflow-hidden">
        <img
          src={binIcon || "/placeholder.svg"}
          alt={`${skip.size} yard skip`}
          className="object-cover w-full h-full"
        />

        <div className="absolute top-2 left-2 bg-[#1C1C1C] text-white text-xs font-bold rounded-full px-2 py-1">
          {skip.size} yds
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between p-3 flex-grow">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {skip.size} Yard Skip
              </h3>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">
                {skip.price_before_vat < 200 ? "28% less than usual" : ""}
              </div>
              <div className="text-lg font-bold text-gray-900">
                £{totalPrice}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Clock className="w-3 h-3" />
              {skip.hire_period_days} days hire
            </div>

            {!skip.allowed_on_road && (
              <div className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 rounded-bl-2xl rounded-tr-2xl">
                <AlertTriangle className="w-3 h-3 text-amber-500" />
                Not Allowed on the Road
              </div>
            )}

            {skip.allows_heavy_waste && (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <span className="w-3 h-3 bg-gray-200 rounded-full flex items-center justify-center">
                  ✓
                </span>
                Heavy Waste
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end items-center mt-3">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSelect();
            }}
            disabled={!isAvailable}
            className={`py-1 px-4 rounded-md text-sm font-medium ${
              isAvailable
                ? "bg-[#4E41E5] text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isAvailable ? (
              selected ? (
                "Selected"
              ) : (
                <span className="flex items-center">
                  Select Skip <ArrowRight className="ml-1 w-4 h-4" />
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
