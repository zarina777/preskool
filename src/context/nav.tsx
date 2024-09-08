import { createContext, useState, ReactNode } from "react";

interface NavProvideType {
  onNav: string;
  setOnNav: React.Dispatch<React.SetStateAction<string>>;
}

export const NavContext = createContext<NavProvideType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [onNav, setOnNav] = useState<string>("students");
  return (
    <NavContext.Provider value={{ onNav, setOnNav }}>
      {children}
    </NavContext.Provider>
  );
};
