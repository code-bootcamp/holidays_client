import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  EnvironmentOutlined,
  PaperClipOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  margin-top: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const MainWrapper = styled.div`
  width: 100%;
`;
export const WriterWrapper = styled.div``;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 16px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

export const Edit = styled.p`
  font-size: 13px;
  cursor: pointer;
  margin-left: 10px;
`;

export const Delete = styled.p`
  font-size: 13px;
  cursor: pointer;
  margin-left: 10px;
`;

export const DateString = styled.div`
  font-size: 15px;
  color: #999;
  margin-top: 2px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Username = styled.div`
  font-size: 16px;
`;

// export const BoardCommentCancel = styled.button`
//   margin-bottom: 50px;
// `;

export const Tie1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Tie2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
