import {
  FilterContainer,
  FilterInput,
} from "@/styled-components/marketSection.style";
import { IconButton, useTheme } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterButtonOpt from "./FilterButtonOpt";

export default function FilterSearchComponent() {
  const theme = useTheme();
  return (
    <FilterContainer>
      <FilterButtonOpt />
      <FilterInput
        placeholder="Busqueda"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton>
                <SearchIcon sx={{ color: theme.palette.success.light }} />
              </IconButton>
            ),
          },
        }}
      />
    </FilterContainer>
  );
}
