import React, { createContext, useEffect, useMemo, useState } from 'react';
import { InfoService } from '../models/InfoTypes';

interface InfoProviderProps {
  children: React.ReactNode;
  infoService: InfoService;
}

export const InfoContext = createContext<InfoService | null>(null);
export const InfoProvider = ({ children, infoService }: InfoProviderProps) => {
  return (
    <InfoContext.Provider value={infoService}>{children}</InfoContext.Provider>
  );
};
