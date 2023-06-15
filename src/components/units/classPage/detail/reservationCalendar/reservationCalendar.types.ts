import { IQuery } from "../../../../../commons/types/generated/types";

export interface IReservationCreateProps {
  data?: Pick<IQuery, "fetchClassDetail">;

  date?: string;
  personnel?: string;
  // personnel: string;
}

export interface IFormData {
  res_date: string;
  personnel: string;
}
