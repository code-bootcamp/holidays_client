import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  Picture,
  Wrapper,
} from "./Uploads01.styles";
import type { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps): JSX.Element {
  return (
    <Wrapper>
      {props.fileUrl !== "" ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <Picture>대표 이미지를 추가해주세요</Picture>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </Wrapper>
  );
}
