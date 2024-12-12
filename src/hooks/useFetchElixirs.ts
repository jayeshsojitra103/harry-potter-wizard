import { useState, useEffect } from "react";
import { Elixir } from "../types/elixir";

const intialFiltersState: Record<string, string> = {
  name: "",
  difficulty: "",
  ingredient: "",
  inventorFullName: "",
  manufacturer: "",
};

export const useFetchElixirs = () => {
  const [data, setData] = useState<Elixir[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] =
    useState<Record<string, string>>(intialFiltersState);

  const onFilterApply = () => {
    fetchElixirs(filters);
  };

  const handleChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleReset = () => {
    setFilters(intialFiltersState);
    fetchElixirs(intialFiltersState);
  };

  const fetchElixirs = async (filtersState:Record<string, string>) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams(filtersState).toString();
      const response = await fetch(
        `https://wizard-world-api.herokuapp.com/elixirs?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch elixirs");
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log("err",err)
      setError("Failed to fetch elixirs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElixirs(intialFiltersState);
  }, []);

  return {
    data,
    loading,
    error,
    filters,
    onFilterApply,
    handleChange,
    handleReset,
  };
};
