import moment from "moment"

import { useComicDetailProps, ItemsPros, DateProps, UrlsProps } from "./interface";

export function useComicDetail({ comicDetail }: useComicDetailProps) {

  const handleReturnWriter = () => {
    const writers = comicDetail.creators.items.filter(
      (writer: ItemsPros) =>
        writer.role === "writer"
    );

    if (writers.length > 0) {
      return writers.map((writer: ItemsPros, index: number) => index === (writers.length - 1) ? `${writer.name}.` : `${writer.name}, `);
    }

    return "Não informado."
  };

  const handleReturnPencillers = () => {
    const pencillers = comicDetail.creators.items.filter(
      (penciller: ItemsPros) => penciller.role === "penciller"
    );

    if (pencillers.length > 0) {
      return pencillers.map((penciller: ItemsPros, index: number) => index === (pencillers.length - 1) ? `${penciller.name}.` : `${penciller.name}, `);
    }

    return "Não informado."
  };

  const handleReturnPencillerCovers = () => {
    const pencillerCovers = comicDetail.creators.items.filter(
      (pencillerCover: ItemsPros) => pencillerCover.role === "penciller (cover)"
    );

    if (pencillerCovers.length > 0) {
      return pencillerCovers.map((pencillerCover: ItemsPros, index: number) => index === (pencillerCovers.length - 1) ? `${pencillerCover.name}.` : `${pencillerCover.name}, `);
    }

    return "Não informado."
  };

  const handleReturnDate = () => {
    const date = comicDetail.dates.find((date: DateProps) => date.type === "onsaleDate")

    if (!!date) {
      return `${moment(date.date).format("DD/MM/YYYY")}.`
    }
    return "Não informado."
  }

  const handleReturnUrl = () => {
    const url = comicDetail.urls.find((url: UrlsProps) => url.type === "detail")

    if(!!url) {
      return url.url
    }
  }

  return {
    handleReturnWriter,
    handleReturnPencillers,
    handleReturnPencillerCovers,
    handleReturnDate,
    handleReturnUrl
  }
};

export default useComicDetail;