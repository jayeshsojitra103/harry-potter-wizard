import React from "react";

interface FiltersProps {
  filters: Record<string, string>;
  handleChange: (key: string, value: string) => void;
  onFilterApply: () => void;
  onReset: () => void;
  loading: boolean;
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  onFilterApply,
  handleChange,
  onReset,
  loading,
}) => {
  return (
    <div className="filter-container card shadow-md border-0 mt-5">
      <div className="card-header bg-secondary text-white">Filters</div>
      <div className="card-body">
        <div className="row">
          
          {Object.keys(filters).map((key) => (
            <div key={key} className="col-12 mb-3">
              <input
                type="text"
                placeholder={`Filter by ${key}`}
                className="form-control"
                value={filters[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
          <div className="col-12  mb-3">
            <button
              className="btn btn-primary w-100"
              onClick={onFilterApply}
              disabled={loading}
            >
              Apply Filters
            </button>
          </div>
          <div className="col-12  mb-3">
            <button
              className="btn btn-secondary w-100"
              onClick={onReset}
              disabled={loading}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
