import { ReactNode, useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch"

import * as S from "./styles";

interface Props {
  handleSwitchTheme(): void;
  children: ReactNode;
}

const Layout = ({ children, handleSwitchTheme }: Props) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <>
      <S.Header>
        <p className="titleHeader">MARVEL</p>

        <Switch 
          data-testid="switch"
          onChange={handleSwitchTheme}
          checked={title === "dark"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={48}
          onColor={colors.sectionBackground}
          offColor={colors.sectionBackground}
        />
      </S.Header>
      <S.Container>
        {children}
      </S.Container>
    </>
  )
};

export default Layout;