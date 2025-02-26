import {
  PaginationButton,
  PaginationButtons,
  PaginationInput,
} from "@/styled-components/table.style";

export default function Pagination() {
  return (
    <PaginationButtons fullWidth variant="outlined">
      <PaginationButton> {"<<"} </PaginationButton>
      <PaginationButton> {"<"} </PaginationButton>
      <PaginationInput defaultValue={1} variant="outlined" />
      <PaginationButton> {">"} </PaginationButton>
      <PaginationButton> {">>"} </PaginationButton>
    </PaginationButtons>
  );
}
