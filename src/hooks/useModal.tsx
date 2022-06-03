import { useContext, createContext, useState } from "react";

type ChildrenType<T = {}> = T & { children?: React.ReactNode }

type ModalContextType = {
  modal: boolean
  setModal: (array: boolean) => void;
};

const ModalContext = createContext<ModalContextType>({
  modal: false,
  setModal: () => {},
});

export const ModalProvider = ({ children }: ChildrenType) => {
  const [modal, setModal] = useState(false);
    
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);

  if (ctx === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return ctx;
};