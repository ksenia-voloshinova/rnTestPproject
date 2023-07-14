import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import { SearchBarProps } from "../types";
export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View >
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search"
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};
