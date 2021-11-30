import { useCallback, useEffect, useState } from "react";
import ComicsService from "../../service/ComicsService/ComicsService";

import { ComicProps } from "./interface"

import useDebounce from "./useDebounce";

export function useComics() {
  const limit = 20;

  const [loading, setLoading] = useState<boolean>(true);
  const [offSet, setOffSet] = useState<number>(0);
  const [comics, setComics] = useState([]);
  const [totalPages, setTotalPages] = useState<number>();

  const [comicDetail, setComicDetail] = useState({});
  const [showComicDetail, setShowComicDetail] = useState(false);
  const [selectedComics, setSelectedComics] = useState<any>([]);
  const [titleStartsWith, setTitleStartsWith] = useState<string>();
  const [inputValue, setInputValue] = useState<string>("");

  const getComics = useCallback(async () => {
    setLoading(true);

    let query: any = {
      limit,
      offset: offSet
    }

    if (!!titleStartsWith) {
      query = {
        limit,
        offset: offSet,
        titleStartsWith
      }
    }

    ComicsService.findAll({ ...query }).then((res) => {
      setComics(res.data.data.results);
      setTotalPages(Math.ceil(res.data.data.total / limit))
    }).finally(() => setLoading(false))
      .catch((error) =>
        console.log(error)
      );
  }, [offSet, titleStartsWith]);

  useEffect(() => {
    getComics();
  }, [getComics]);

  const handleComicDetail = (comic: ComicProps) => {
    setComicDetail(comic);
    setShowComicDetail(true);
  };

  const handleSelectedComics = (comics: any) => {
    if (!selectedComics.find((selected: any) => selected.id === comics.id)) {
      setSelectedComics((selected: any) => [...selected, comics]);
    } else {
      setSelectedComics(selectedComics.filter((selected: any) => selected.id !== comics.id));
    }
  };

  const handleClassNameActives = (id: number) => {
    return selectedComics.find((selecteds: any) => selecteds.id === id) && "selected";
  };

  const onChange = (value: string) => {
    setInputValue(value);
    asyncFunctionDebounced(value);
  };

  const handleSearchByName = (value: string) => {
    setTitleStartsWith(value);
    setOffSet(0);
  }

  const asyncFunctionDebounced = useDebounce(handleSearchByName, 1000);

  const handleCleanText = () => {
    setInputValue("");
    setTitleStartsWith("");
  }

  return {
    loading,
    limit,
    totalPages,
    setOffSet,
    offSet,
    comics,
    comicDetail,
    handleClassNameActives,
    handleSelectedComics,
    handleComicDetail,
    showComicDetail,
    setShowComicDetail,
    inputValue,
    onChange,
    handleCleanText
  }
};

export default useComics;