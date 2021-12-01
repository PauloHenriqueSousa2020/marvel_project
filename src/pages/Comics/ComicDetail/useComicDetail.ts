import moment from "moment"

export function useComicDetail({ comicDetail }: any) {

  const handleReturnWriter = () => {
    const writers = comicDetail.creators.items.filter(
      (writer: any) =>
        writer.role === "writer"
    );

    if (writers.length > 0) {
      return writers.map((writer: any, index: number) => index === (writers.length - 1) ? `${writer.name}.` : `${writer.name}, `);
    }

    return "Não informado"
  };

  const handleReturnPencillers = () => {
    const pencillers = comicDetail.creators.items.filter(
      (penciller: any) => penciller.role === "penciller"
    );

    if (pencillers.length > 0) {
      return pencillers.map((penciller: any, index: number) => index === (pencillers.length - 1) ? `${penciller.name}.` : `${penciller.name}, `);
    }

    return "Não informado"
  };

  const handleReturnPencillerCovers = () => {
    const pencillerCovers = comicDetail.creators.items.filter(
      (pencillerCover: any) => pencillerCover.role === "penciller (cover)"
    );

    if (pencillerCovers.length > 0) {
      return pencillerCovers.map((pencillerCover: any, index: number) => index === (pencillerCovers.length - 1) ? `${pencillerCover.name}.` : `${pencillerCover.name}, `);
    }

    return "Não informado"
  };

  const handleReturnDate = () => {
    const date = comicDetail.dates.find((date: any) => date.type === "onsaleDate")

    if (!!date) {
      return moment(date.date).format("DD/MM/YYYY")
    }
    return "Não informado"
  }

  const url = comicDetail.urls.find((url: any) => url.type === "detail")

  return {
    handleReturnWriter,
    handleReturnPencillers,
    handleReturnPencillerCovers,
    handleReturnDate,
    url
  }
};

export default useComicDetail;