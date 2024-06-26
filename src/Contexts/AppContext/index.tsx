"use client";
import { User } from "../../Types/user.types";
import React, { ReactNode } from "react";

type Props = {
  user?: User;
};
const initialValue: Props = {
  user: undefined,
};

const AppContext = React.createContext(initialValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { Provider } = AppContext;

  //   if (isLoading) {
  //     return <PageLoadingSpinner extraClass="w-screen h-screen" />;
  //   }

  return (
    <Provider value={{ user: { name: "Emmanuel Boss" } }}>{children}</Provider>
  );
};

export function useAppContext() {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("must be used inside AppContextProvider");
  }

  return context;
}
