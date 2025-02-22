import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Button, Box } from "@mui/material";
import { FilterList, Restaurant, Sort } from "@mui/icons-material";

const FilterRow: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("main-dishes");

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      {/* Left: Category Buttons */}
      <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        onChange={handleCategoryChange}
        aria-label="category filter"
      >
        <ToggleButton value="all">
          <Restaurant sx={{ fontSize: 20, mr: 1 }} /> All Categories
        </ToggleButton>
        <ToggleButton value="main-dishes">Main Dishes</ToggleButton>
        <ToggleButton value="desserts">Desserts</ToggleButton>
        <ToggleButton value="beverages">Beverages</ToggleButton>
        <ToggleButton value="appetizers">Appetizers</ToggleButton>
      </ToggleButtonGroup>

      {/* Right: Sort and Filter Buttons */}
      <Box display="flex" gap={1}>
        <Button variant="contained" color="secondary" startIcon={<Sort />}>
          Sort
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FilterList />}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};

export default FilterRow;
