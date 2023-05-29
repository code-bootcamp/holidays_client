import type { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
