import { IQuery } from "../../../../../commons/types/generated/types";

export interface IReservationCreateProps {
  data?: any;

  date?: string;
  personnel?: string;
  // personnel: string;
}

export interface IFormData {
  res_date: string;
  personnel: string;
}
