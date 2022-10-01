import { createContext, useState, useEffect } from "react";

import { ProviderProps } from "../util/types";

interface ResizeContextInterface {
  isMobile: boolean;
}

const ResizeContext = createContext<ResizeContextInterface | null>(null);

const ResizeProvider = ({ children }: ProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (e: Event) => {
      setIsMobile(window.innerWidth < 568);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizeContext.Provider value={{ isMobile }}>
      {children}
    </ResizeContext.Provider>
  );
};

export default ResizeContext;
export { ResizeProvider };
