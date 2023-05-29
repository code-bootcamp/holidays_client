import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import CommunityPage from "../../../src/components/units/communityPage/write/communityWritePage.index";

export default function GraphqlMutationPage(): JSX.Element {
  useAuth01();
  return <CommunityPage isEdit={false} />;
}
