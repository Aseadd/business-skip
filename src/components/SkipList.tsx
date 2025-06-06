"use client";

import type React from "react";
import { useState, useCallback } from "react";
import type { Skip } from "../types/skip";
import { useSkips } from "../hooks/useSkip";
import SkipCard from "./SkipCard";
import SkipModal from "./SkipModal";

const SkipList: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { data: skips, isLoading, isError } = useSkips();

  const handleSelectSkip = useCallback((skip: Skip) => {
    setSelectedSkip((prev) => (prev?.id === skip.id ? null : skip));
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSkip(null);
  }, []);

  const handleContinue = useCallback(() => {
    alert(`Continue to booking for skip: ${selectedSkip?.size}`);
    setSelectedSkip(null);
  }, [selectedSkip]);

  if (isLoading) {
    return (
      <p className="text-center text-gray-600 animate-pulse">
        Loading skips...
      </p>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load skips</p>;
  }

  if (!skips || skips.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No skips available at the moment.
      </p>
    );
  }

  return (
    <div className="flex flex-col justify-center min-h-screen p-4 md:px-10 bg-gray-50">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
        Select Your Skip Size
      </h2>
      <p className="text-sm text-center mb-6 text-gray-500">
        Select the skip size that best suits your needs
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mx-auto">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onSelect={handleSelectSkip}
            selected={selectedSkip?.id === skip.id}
          />
        ))}
      </div>

      {selectedSkip && (
        <SkipModal
          skip={selectedSkip}
          onClose={handleCloseModal}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default SkipList;
