import { useRouter } from "next/router";
import * as S from "./communityWritePage.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CREATE_BOARD } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { useMutation, useQuery } from "@apollo/client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_FILE } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WriteProductSchema } from "./validation";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";
import dynamic from "next/dynamic";
import { UploadFile } from "antd";
import { FECTCH_BOARDS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoards";

const ToastEditor = dynamic(
  async () => await import("../../../commons/toastUI"),
  {
    ssr: false,
  }
);

interface ProductInput {}

type EditorInstance = {
  getInstance: () => { getHTML: () => string };
};

export default function CommunityWritePage(props: any) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState("");
  const contentsRef = useRef<EditorInstance | null>(null);
  const [createBoard] = UseMutationCreateBoard();
  const [uploadFile] = UseMutationUploadFile();
  const { data } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { register, handleSubmit, setValue, formState } = useForm<ProductInput>(
    {
      resolver: yupResolver(WriteProductSchema),
      mode: "onChange",
    }
  );

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (text: any) => {
    const editorInstance: string =
      contentsRef.current?.getInstance()?.getHTML() ?? "";
    setContent(text === "<p><br><p>" ? "" : editorInstance);
  };

  const onClickSubmit = async (data: ProductInput) => {
    console.log(content);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title: title,
          content: content,
          imageInput: [
            {
              url: fileUrls,
              type: 1,
              is_main: 1,
            },
          ],
        },
      },
      refetchQueries: [{ query: FECTCH_BOARDS }],
    });
    void router.push(`/communityPage/${result.data?.createBoard}`);
    console.log(result?.data?.createBoard);
  };

  const onClickCancel = () => {
    router.push(`/communityPage`);
  };

  ///////////////////////////////////////////////////////////////
  //  이미지 등록
  //////////////////////////////////////////////////////////////

  const onChangeFileUrls = (fileUrl: string): void => {
    const newFileUrls = fileUrl;
    // newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return (
    <div>
      <S.Wrapper>
        <S.TitleMain>사랑방 글쓰기</S.TitleMain>
        <S.Box>
          <S.TitleTextWrapper>
            <S.Title>작성 가이드</S.Title>
            <S.Text>
              클래스 혹은 제품 홍보 목적의 콘텐츠는 오픈이 불가합니다.
            </S.Text>
            <S.Text>
              사진 첨부 시 용량은 장당 최대 20MB까지 업로드 가능합니다.
            </S.Text>
            <S.Text>타인의 지식재산권을 침해하지 않도록 유의해주세요.</S.Text>
          </S.TitleTextWrapper>
        </S.Box>
        <S.ImageWrapper>
          <S.UploadButton>
            <Uploads01
              key={uuidv4()}
              fileUrl={fileUrls}
              onChangeFileUrls={onChangeFileUrls}
            />
          </S.UploadButton>
        </S.ImageWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject type="text" onChange={onChangeTitle} />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          {/* <S.Contents onChange={onChangeTitle} /> */}
          <S.ToastEditorWrapper>
            <ToastEditor
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              initialValue={data?.fetchBoard.contents}
            />
          </S.ToastEditorWrapper>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={onClickSubmit}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          <S.CancelButton onClick={onClickCancel}>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
