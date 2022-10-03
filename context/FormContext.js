import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const RegistContext = createContext();

export const useMyForm = () => useContext(RegistContext);

export default function FormProvider({ children }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [state, setState] = useState("dark")
  return (
    <RegistContext.Provider value={{ register, handleSubmit, watch, errors }}>
      {children}
    </RegistContext.Provider>
  );
}
