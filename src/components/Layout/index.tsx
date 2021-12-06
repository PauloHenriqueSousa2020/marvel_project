import { ReactNode, useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch"

import { CgSun, CgMoon } from "react-icons/cg";

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
          className="react-switch"
          data-testid="switch"
          onChange={handleSwitchTheme}
          checked={title === "dark"}
          uncheckedIcon={<div
            style={{
              display: "flex",
              marginLeft: "15px",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CgMoon size={22} />
          </div>}
          checkedIcon={
            <div
              style={{
                display: "flex",
                marginLeft: "10px",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CgSun size={22} />
            </div>
          }
          height={40}
          width={88}
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