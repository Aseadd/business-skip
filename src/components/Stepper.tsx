import React from "react";

interface Step {
  name: string;
  icon: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  currentStep: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const currentIndex = steps.findIndex((step) => step.name === currentStep);

  return (
    <nav
      className=" flex md:flex-row flex-col justify-center gap-4 px-4 py-2 overflow-x-auto
      scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900"
      aria-label="Progress steps"
    >
      <div className="flex md:flex-row items-center justify-center flex-nowrap md:w-auto w-max min-w-full">
        {steps.map((step, idx) => (
          <React.Fragment key={step.name}>
            <div
              className={`flex items-center gap-1 text-xs ${
                idx <= currentIndex ? "text-[#4E41E5]" : "text-neutral-500"
              }`}
            >
              {step.icon}
              <span>{step.name}</span>
            </div>
            {idx < steps.length - 1 && (
              <span
                className={`mx-1 ${
                  idx < currentIndex ? "text-[#002366]" : "text-[#808080]"
                }`}
              >
                —
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Stepper;
