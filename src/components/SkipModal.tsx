import React from "react";
import type { Skip } from "../types/skip";

interface SkipModalProps {
  skip: Skip;
  onClose: () => void;
  onContinue: () => void;
}

const SkipModal: React.FC<SkipModalProps> = ({ skip, onClose, onContinue }) => {
  const totalPrice = (
    skip.price_before_vat +
    (skip.price_before_vat * skip.vat) / 100
  ).toFixed(2);

  return (
    <div className="fixed inset-0 flex flex-col justify-end z-50 bg-black/50">
      <div className="bg-gray-100 text-white w-full px-4 py-2 shadow-2xl">
        <div className="flex flex-col justify-between items-center mb-2">
          <p className="text-xs text-neutral-500 mt-2">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 mt-4 lg:px-52 px-2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-neutral-400">{skip.size} Yard Skip</p>
            <p className="text-2xl font-bold text-blue-500">£{totalPrice}</p>
            <p className="text-sm text-neutral-400">
              {skip.hire_period_days} day hire
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="bg-neutral-500 text-white px-4 py-2 rounded shadow hover:bg-neutral-600"
            >
              Back
            </button>
            <button
              onClick={onContinue}
              className="bg-[#0037C1] text-white px-4 py-2 rounded shadow flex items-center gap-1"
            >
              Continue
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipModal;
