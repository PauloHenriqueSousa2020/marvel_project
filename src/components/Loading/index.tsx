
import { ReactNode } from "react";

import * as S from "./styles";

export const Loading = () => {
  return (
    <S.Container>
      <img src="assets/america_captain_logo.png" alt="American Captain" />
      <span>Carregando...</span>
    </S.Container>
  );
};

type Props = {
  loading: boolean;
  children: ReactNode;
};

const ContentLoad = ({ loading, children }: Props) => {
  return <>{loading ? <Loading /> : children} </>;
};

export default ContentLoad;
