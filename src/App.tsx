import React from "react";
import Filters from "./components/Filters";
import ElixirList from "./components/ElixirList";
import { useFetchElixirs } from "./hooks/useFetchElixirs";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const {
    data: elixirs,
    loading,
    error,
    filters,
    onFilterApply,
    handleChange,
    handleReset,
  } = useFetchElixirs();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold text-dark">Harry Potter Wizard Elixirs</h2>
          <p className="text-muted">
            Explore the magical world of elixirs and their fascinating details.
          </p>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-3 mb-2">
          <Filters
            onFilterApply={onFilterApply}
            handleChange={handleChange}
            onReset={handleReset}
            filters={filters}
            loading={loading}
          />
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-9 mb-2">
          <ElixirList elixirs={elixirs} error={error} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default App;
