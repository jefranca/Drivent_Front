import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import UnauthorizedMessage from "../../../components/Dashboard/shared/UnauthorizedMessage";

import PaymentForm from "../../../components/PaymentForm";

export default function Payment() {
  const { userData } = useContext(UserContext);
  /*
    Card name
    Name
    valid thru - cvc
  */
  return (
    <>
      <StyledTypography variant="h4"> Ingresso e pagamento </StyledTypography>
      {userData.fullRegistration ? (
        <>
          <PaymentForm />
        </>
      ) : (
        <UnauthorizedMessage>
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </UnauthorizedMessage>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

