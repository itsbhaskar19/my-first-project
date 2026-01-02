'use client';

interface PlantFiltersProps {
  selectedCategories: string[];
  onFilterChange: (categories: string[]) => void;
}

export default function PlantFilters({
  selectedCategories,
  onFilterChange,
}: PlantFiltersProps) {
  const categories = ['Indoor', 'Outdoor', 'Flowering'];

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      // Remove category
      onFilterChange(selectedCategories.filter((cat) => cat !== category));
    } else {
      // Add category
      onFilterChange([...selectedCategories, category]);
    }
  };

  const handleClearAll = () => {
    onFilterChange([]);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md sticky top-20">
      <h3 className="text-xl font-bold text-primary-dark mb-4">Filter Plants</h3>

      {/* All Plants Button */}
      <button
        onClick={handleClearAll}
        className={`
          w-full mb-3 px-4 py-3 rounded-lg font-medium transition-colors text-left
          ${
            selectedCategories.length === 0
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
      >
        All Plants
      </button>

      {/* Category Buttons */}
      <div className="space-y-2">
        {categories.map((category) => {
          const isActive = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                w-full px-4 py-3 rounded-lg font-medium transition-colors text-left
                ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
