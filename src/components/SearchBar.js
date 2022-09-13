import React from "react";
import TextField from "@mui/material/TextField";


export const SearchBar = ({setQuery}) => (
    <form>
      <TextField
        onInput={(e) => {
          setQuery(e.target.value);
        }}
        label="Search"
        variant="outlined"
        placeholder="Enter a name or url..."
        size="small"
        margin="none"
        fullWidth
      />
    </form>
  );