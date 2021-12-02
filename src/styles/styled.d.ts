import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      sectionBackground: string;
      headerColor: string;
      
      text: string;
      selected: string;
      error: string;
    }

    weight: {
      normal: number,
      bold: number,
    },
  }
}