import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, UploadFile } from "antd";
import { RcFile, UploadProps } from "antd/es/upload";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IData {
  url: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

function ClassImage(props: any): JSX.Element {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // 이미지 수정부분
  useEffect(() => {
    // console.log("이미지미리보기?");
    // console.log(props.data);
    // console.log("이미지미리보기?");

    const array = props.data?.map((el: IData) => el.url);
    if (array !== undefined) {
      let arr: { url: string }[] = [];
      array.map((el: string) => {
        let obj = { url: `${el}` };
        arr.push(obj);
      });

      // console.log("여기 배열에 있니?");
      // console.log(arr);
      // console.log("여기 배열에 있니?");

      props.setFileList(arr);
      // console.log("^^^^^^^^^^^^^");
      // console.log(props.fileList);
      // console.log("^^^^^^^^^^^^^");
    }
  }, [props.data]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    props.setFileList(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    file.preview = await getBase64(file.originFileObj as RcFile);

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewOpen(false);

  return (
    <>
      <Upload
        listType="picture-card"
        onChange={handleChange}
        onPreview={handlePreview}
        fileList={props.fileList}
      >
        {props.fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
export default ClassImage;
