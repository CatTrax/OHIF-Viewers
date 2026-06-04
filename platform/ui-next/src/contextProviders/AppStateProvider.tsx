import React, { useState, createContext, useContext, useRef } from 'react';

const appStateContext = createContext<AppState | null>(null);
const { Provider } = appStateContext;

export const useAppState = () => useContext(appStateContext);

type CattraxPatient = {
  patientId: number;
  practiceId: number;
};

type AppState = {
  isFullScreenRef: React.MutableRefObject<boolean>;
  setCattraxPatientData: (data: CattraxPatient) => void;
  cattraxPatientData: CattraxPatient | null;
};

export function AppStateProvider({ children }) {
  const isFullScreenRef = useRef<boolean>(false);
  const [cattraxPatientData, setCattraxPatientData] = useState<CattraxPatient | null>(null);

  return (
    <Provider value={{ isFullScreenRef, setCattraxPatientData, cattraxPatientData }}>
      {children}
    </Provider>
  );
}

export default AppStateProvider;
