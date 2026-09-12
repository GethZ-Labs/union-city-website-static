import React, { useState } from 'react';

interface SearchBarProps {
  initialLocation?: string;
  initialType?: string;
  initialBudget?: string;
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialLocation = '',
  initialType = 'residential',
  initialBudget = '',
  onSearch,
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [type, setType] = useState(initialType);
  const [budget, setBudget] = useState(initialBudget);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, type, budget });
  };

  return (
    <form className="search-bar" id="propertySearchBar" onSubmit={handleSubmit}>
      <div className="search-field">
        <label htmlFor="locationInput">LOCATION</label>
        <select
          id="locationInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Any location</option>
          <option value="Pasyala">Pasyala</option>
          <option value="Kiriwattuduwa">Kiriwattuduwa</option>
          <option value="Bandaragama">Bandaragama</option>
          <option value="Athurugiriya">Athurugiriya</option>
          <option value="Diyagama">Diyagama</option>
          <option value="Godagama">Godagama</option>
          <option value="Gonapala">Gonapala</option>
          <option value="Homagama">Homagama</option>
          <option value="Kahatuduwa">Kahatuduwa</option>
          <option value="Kalutara">Kalutara</option>
          <option value="Kottawa">Kottawa</option>
          <option value="Makumbura">Makumbura</option>
          <option value="Meegoda">Meegoda</option>
          <option value="Panadura">Panadura</option>
          <option value="Pitipana">Pitipana</option>
          <option value="Polgasowita">Polgasowita</option>
          <option value="Siddamulla">Siddamulla</option>
          <option value="Watareka">Watareka</option>
        </select>
      </div>

      <div className="search-field">
        <label htmlFor="typeInput">TYPE</label>
        <select
          id="typeInput"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Any type</option>
          <option value="residential">Residential Land</option>
          <option value="commercial">Commercial Land</option>
          <option value="agricultural">Agricultural Land</option>
        </select>
      </div>

      <div className="search-field">
        <label htmlFor="budgetInput">BUDGET</label>
        <select
          id="budgetInput"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Per Perch Price</option>
          <option value="2laks">Under Rs.2laks</option>
          <option value="2-4laks">Rs.2-4laks</option>
          <option value="4laks+">Rs.4laks+</option>
        </select>
      </div>

      <button type="submit" className="search-btn" id="searchSubmitBtn">
        Search
      </button>
    </form>
  );
};
