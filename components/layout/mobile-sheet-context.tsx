"use client";

import { createContext, useContext, type ReactNode } from "react";

const MobileSheetContext = createContext(false);

export function MobileSheetProvider({
  children,
  active = true,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <MobileSheetContext.Provider value={active}>
      {children}
    </MobileSheetContext.Provider>
  );
}

export function useMobileSheetContext() {
  return useContext(MobileSheetContext);
}
