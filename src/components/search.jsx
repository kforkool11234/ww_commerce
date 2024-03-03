// Search.js
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
function Search({ onclicked }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Pass the search query back to the parent component
    onclicked(searchQuery);
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" endIcon={<SearchIcon/>} onClick={handleSearch}>
  Search
</Button>
    </div>
  );
}

export default Search;
