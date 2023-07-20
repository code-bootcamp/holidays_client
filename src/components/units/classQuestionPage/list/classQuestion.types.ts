import { IFetchClassInquiries } from "../../../../commons/types/generated/types";

export interface IClassInquiriesWriteProps {
  isEdit2: boolean;
  setIsEdit2: any;
  el?: IFetchClassInquiries;
}

export interface IFormData {
  content: string;
  ci_id: string;
}
