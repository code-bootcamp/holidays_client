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
import { UseMutationUpdateBoard } from "../../../commons/hooks/useMutations/board/useMutationUpdateBoard";
import { UseMutationDeleteBoard } from "../../../commons/hooks/useMutations/board/useMutationDeleteBoard";

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
  const [updateBoard] = UseMutationUpdateBoard();
  const [uploadFile] = UseMutationUploadFile();
  const { data } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [shouldReload, setShouldReload] = useState(false);

  const { register, handleSubmit, setValue, formState } = useForm<ProductInput>(
    {
      resolver: yupResolver(WriteProductSchema),
      mode: "onChange",
    }
  );

  const onChangeContents = (text: any) => {
    const editorInstance: string =
      contentsRef.current?.getInstance()?.getHTML() ?? "";
    setContent(text === "<p><br><p>" ? "" : editorInstance);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeBirthDate = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 등록
  //////////////////////////////////////////////////////////////

  const onClickSubmit = async (data: ProductInput) => {
    if (!title || !content) {
      alert("내용 입력을 확인해주세요");
    }
    if (title && content) {
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
        refetchQueries: [
          { query: FECTCH_BOARDS },
          { query: FETCH_BOARD_DETAIL },
        ],
      });

      alert("등록이 완료되었습니다.");
      void router.push(`/communityPage/${result.data?.createBoard}`);
    }
  };
  const onClickCancel = () => {
    router.push(`/communityPage`);
  };

  /////////////////////////////////////////////////////////////////////////////////
  // 게시물 업데이트
  ////////////////////////////////////////////////////////////////////////////////
  const onClickUpdate = async (data: ProductInput) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!title || !content) {
      alert("내용 입력을 확인해주세요");
    }
    if (title && content) {
      try {
        if (typeof router.query.board_id !== "string") {
          alert("시스템에 문제가 있습니다.");
          return;
        }
        const result = await updateBoard({
          variables: {
            updateBoardInput: {
              board_id: String(router.query.board_id),
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
          refetchQueries: [
            { query: FECTCH_BOARDS },
            {
              query: FETCH_BOARD_DETAIL,
              variables: { board_id: router.query.board_id },
            },
          ],
        });

        if (result.data?.updateBoard === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        alert("수정이 완료되었습니다.");
        setShouldReload(true);
        void router.push(`/communityPage/${result.data?.updateBoard}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  ///////////////////////////////////////////////////////////////
  //  이미지 등록
  //////////////////////////////////////////////////////////////

  const onChangeFileUrls = (fileUrl: string): void => {
    const newFileUrls = fileUrl;
    // newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = data?.fetchBoardDetail?.image_[0].url;
    console.log(data?.fetchBoardDetail?.image_[0].url);
    if (images !== undefined && images !== null) setFileUrls(images);
  }, [data]);

  ///////////////////////////////////////////////////////////////
  //  수정시 새로고침
  //////////////////////////////////////////////////////////////

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(false);
      window.location.reload();
    }
  }, [shouldReload]);

  return (
    <div>
      <S.Wrapper>
        <S.TitleMain>커뮤니티 글쓰기</S.TitleMain>
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
          <S.Subject
            type="text"
            onChange={onChangeTitle}
            defaultValue={data?.fetchBoardDetail?.title}
          />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          {/* <S.Contents onChange={onChangeTitle} /> */}
          <S.ToastEditorWrapper>
            <ToastEditor
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              initialValue={data?.fetchBoardDetail?.content}
            />
          </S.ToastEditorWrapper>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? onClickUpdate : onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          <S.CancelButton onClick={onClickCancel}>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
