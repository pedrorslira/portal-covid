import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../utils/api";

export const SchedulingContext = createContext();

export default function SchedulingContextProvider({ children }) {
  const [schedulings, setSchedulings] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/scheduling");
      setSchedulings(response.data.data);
    } catch (error) {
      toast.error("Ocorreu um erro desconhecido.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SchedulingContext.Provider
      value={[schedulings, setSchedulings, fetchData]}
    >
      {children}
    </SchedulingContext.Provider>
  );
}
