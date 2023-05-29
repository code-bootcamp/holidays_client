import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const UseMutationUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE);

  return mutation;
};
