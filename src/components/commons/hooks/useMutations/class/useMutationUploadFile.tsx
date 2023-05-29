import { gql, useMutation } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const useMutationUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE);

  return mutation;
};
