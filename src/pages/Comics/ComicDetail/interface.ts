/* import { FormikProps } from "formik"; */
import { Dispatch, SetStateAction } from "react";
type SetCurrentTab = Dispatch<SetStateAction<number>> | any;

export interface ComicDetailsProps {
  comicDetail: {
    title: string,
    thumbnail: {
      url: string,
      extension: string,
    },
    pageCount: string,
    

  },
  setShowComicDetail: SetCurrentTab,
}

export interface CreatorsProps {
  
}