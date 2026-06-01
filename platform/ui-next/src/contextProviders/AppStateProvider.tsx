import React, { useState, createContext, useContext } from 'react';

const appStateContext = createContext<AppState | null>(null);
const { Provider } = appStateContext;

export const useAppState = () => useContext(appStateContext);

type CattraxPatient = {
  patientId: number;
  practiceId: number;
};

type AppState = {
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
  setCattraxPatientData: (data: CattraxPatient) => void;
  cattraxPatientData: CattraxPatient | null;
};

export function AppStateProvider({ children }) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [cattraxPatientData, setCattraxPatientData] = useState<CattraxPatient | null>(null);

  return (
    <Provider value={{ isFullScreen, setIsFullScreen, setCattraxPatientData, cattraxPatientData }}>
      {children}
    </Provider>
  );
}

export default AppStateProvider;
