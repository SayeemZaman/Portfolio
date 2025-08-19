import { useState, createContext } from "react";

export const ShowForm = createContext();

export const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <ShowForm.Provider value={{ showForm, setShowForm, toggleForm }}>
      {children}
    </ShowForm.Provider>
  );
};
