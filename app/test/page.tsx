"use client";

import { useState, ChangeEvent } from "react";
import * as Ariakit from "@ariakit/react";
import { getSuggestions } from "../g/schools/_components/getSuggestions";
import { Spinner } from "@radix-ui/themes";

interface Suggestions {
  id: string;
  title: string;
}

const Suggestions = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch suggestions based on query
  const fetchSuggestions = async (query: string) => {
    try {
      setLoading(true); // Set loading state to true when fetching starts
      const data = await getSuggestions(query);
      setSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false); // Set loading state to false once fetching completes
    }
  };

  // Handle input change, directly trigger fetchSuggestions without debounce
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value); // Update query state
    fetchSuggestions(value); // Directly trigger API call on input change
  };

  // Handle selecting a suggestion from the dropdown
  const handleSuggestionSelect = (title: string) => {
    setQuery(title); // Set the input field value to the selected suggestion
    setSuggestions([]); // Clear suggestions once an item is selected
  };

  return (
    <div className="w-72 m-6">
      <Ariakit.ComboboxProvider>
        <Ariakit.ComboboxLabel className="text-sm font-medium text-gray-700 mb-2">
          Search for a book
        </Ariakit.ComboboxLabel>
        <Ariakit.Combobox
          value={query}
          onChange={handleQueryChange}
          placeholder="e.g., Book Title"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {loading && (
          <div className="mt-2">
            <Spinner />
          </div>
        )}
        <Ariakit.ComboboxPopover gutter={4} sameWidth className="bg-white shadow-lg rounded-md max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <Ariakit.ComboboxItem
              key={suggestion.id}
              value={suggestion.title}
              className="px-3 py-2 hover:bg-primary hover:text-white cursor-pointer"
              onClick={() => handleSuggestionSelect(suggestion.title)}
            >
              {suggestion.title}
            </Ariakit.ComboboxItem>
          ))}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>
    </div>
  );
};

export default Suggestions;
