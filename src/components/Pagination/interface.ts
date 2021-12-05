import { Dispatch, SetStateAction } from "react";

type SetCurrentTab = Dispatch<SetStateAction<number>> | any;

export interface PaginationProps {
  limit: number;
  totalPages: number;
  offset: number;
  setOffset: SetCurrentTab;
}