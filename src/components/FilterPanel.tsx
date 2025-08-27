interface FilterPanelProps {
  filterLabel?: string;
  filterOptions?: string[];
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  sortLabel?: string;
  sortOptions: { value: string; label: string }[];
  selectedSort: string;
  onSortChange: (value: string) => void;
}


export default function FilterPanel({
  filterLabel = "Filter by:",
  filterOptions,
  selectedFilter,
  onFilterChange,
  sortLabel = "Sort by:",
  sortOptions,
  selectedSort,
  onSortChange,
}: FilterPanelProps) {
  return (
    <div className="filter-panel">
      <label>{filterLabel}</label>
      <select
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {filterOptions?.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <label>{sortLabel}</label>
      <select
        value={selectedSort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
