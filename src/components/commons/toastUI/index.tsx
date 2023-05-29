import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Modal } from "antd";
import { MutableRefObject, useEffect } from "react";
import { UseMutationUploadFile } from "../hooks/useMutations/uploadFile/UseMutationUploadFile";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../hooks/useMutations/user/useMutationUpdateUser";

interface IEditorPageProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  initialValue: string | undefined;
}

function ToastEditor(props: IEditorPageProps) {
  const [uploadFile] = UseMutationUploadFile();

  return (
    <Editor
      placeholder="상품을 설명해주세요."
      previewStyle="vertical"
      height="400px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      onChange={props.onChangeContents}
      ref={props.contentsRef}
      autofocus={false}
      language="ko-KR"
      initialValue={props.initialValue}
      hideModeSwitch={true}
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          const result = await uploadFile({ variables: { files: blob } });
          console.log(result?.data?.uploadFile);
          callback(`${result?.data?.uploadFile}`);
        },
      }}
    />
  );
}

export default ToastEditor;
