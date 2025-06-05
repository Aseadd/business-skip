import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SkipList from "./components/SkipList";
import Stepper from "./components/Stepper";
import {
  AddLocation as AddLocationIcon,
  Delete as DeleteIcon,
  LocalShipping as LocalShippingIcon,
  SafetyCheck as SafetyCheckIcon,
  CalendarToday as CalendarTodayIcon,
  CreditCard as CreditCardIcon,
} from "@mui/icons-material";

const steps = [
  { name: "Postcode", icon: <AddLocationIcon className="w-4 h-4" /> },
  { name: "Waste Type", icon: <DeleteIcon className="w-4 h-4" /> },
  { name: "Select Skip", icon: <LocalShippingIcon className="w-4 h-4" /> },
  { name: "Permit Check", icon: <SafetyCheckIcon className="w-4 h-4" /> },
  { name: "Choose Date", icon: <CalendarTodayIcon className="w-4 h-4" /> },
  { name: "Payment", icon: <CreditCardIcon className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Stepper steps={steps} currentStep="Select Skip" />
        <main className="flex-grow">
          <SkipList />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
