import React from "react";
import { Elixir } from "../types/elixir";
import Error from "./Error";

interface ElixirListProps {
  elixirs: Elixir[];
  error: string | null;
}

const ElixirList: React.FC<ElixirListProps> = ({ elixirs, error }) => {
  const getDifficultyClass = (difficulty: string) => {
    const difficultyClasses: Record<string, string> = {
      advanced: "badge-hard",
      beginner: "badge-easy",
      moderate: "badge-medium",
    };
    return difficultyClasses[difficulty?.toLowerCase()] || "badge-secondary";
  };

  if (error) return <Error message={error} />;

  return (
    <div className="container my-5">
      <div className="row">
        {elixirs.map((elixir) => {
          const ingredientNames = elixir.ingredients
            .map((ing) => ing.name)
            .join(", ");

          return (
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4" key={elixir.id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-header bg-secondary text-white">
                  <h5 className="card-title mb-0">{elixir.name}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Difficulty:</strong>{" "}
                      <span
                        className={`badge ${getDifficultyClass(
                          elixir.difficulty
                        )}`}
                      >
                        {elixir.difficulty}
                      </span>
                    </li>
                    <li className="mb-2">
                      <strong>Ingredients:</strong>{" "}
                      <span
                        className="text-ellipsis"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={ingredientNames}
                      >
                        {ingredientNames}
                      </span>
                    </li>
                    <li className="mb-2">
                      <strong>Inventor:</strong>{" "}
                      {elixir.inventorFullName || "Unknown"}
                    </li>
                    <li className="mb-2">
                      <strong>Manufacturer:</strong>{" "}
                      {elixir.manufacturer || "Unknown"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElixirList;
