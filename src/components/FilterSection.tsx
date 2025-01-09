import React from "react";

interface FilterSectionProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({ setFilter }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter tasks by title or category..."
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default FilterSection;
