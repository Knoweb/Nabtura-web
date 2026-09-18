"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type EnquiryType = 
  | "grow_food" 
  | "grow_food_home" 
  | "water" 
  | "green_space" 
  | "green_land" 
  | "challenge" 
  | "plants" 
  | "smartcare" 
  | "investment" 
  | "general";

interface EnquiryState {
  type: EnquiryType | null;
  adaptiveAnswer: string;
  projectDescription: string;
}

interface EnquiryContextProps {
  enquiryState: EnquiryState;
  setEnquiryState: (state: Partial<EnquiryState>) => void;
  resetEnquiry: () => void;
}

const defaultState: EnquiryState = {
  type: null,
  adaptiveAnswer: "",
  projectDescription: "",
};

const EnquiryContext = createContext<EnquiryContextProps | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiryState, setEnquiryStateInternal] = useState<EnquiryState>(defaultState);

  const setEnquiryState = useCallback((state: Partial<EnquiryState>) => {
    setEnquiryStateInternal((prev) => ({ ...prev, ...state }));
  }, []);

  const resetEnquiry = useCallback(() => {
    setEnquiryStateInternal(defaultState);
  }, []);

  return (
    <EnquiryContext.Provider value={{ enquiryState, setEnquiryState, resetEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
