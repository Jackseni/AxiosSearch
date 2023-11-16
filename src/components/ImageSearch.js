import { useState } from "react";

function ImageSearch({ searchImagesAxios }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchImagesAxios(searchTerm);
    setSearchTerm("");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="searchTerm"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ImageSearch;
