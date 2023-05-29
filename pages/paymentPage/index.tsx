import { useEffect } from "react";
import { useAuth01 } from "../../src/components/commons/hooks/useAuths/useAuth01";
import { useAuth02 } from "../../src/components/commons/hooks/useAuths/useAuth02";
import PaymentPage from "../../src/components/units/paymentPage/paymentPage.index";

export default function Payment(): JSX.Element {
  useAuth01();

  return (
    <>
      <PaymentPage />
    </>
  );
}
