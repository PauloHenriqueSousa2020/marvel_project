import ContentLoad from "../../components/Loading";
import Pagination from "../../components/Pagination";

import ComicDetail from "./ComicDetail/ComicDetail";
import SendEmail from "./SendEmail/SendEmail";

import { ComicProps } from "./interface"

import useComics from "./useComics";

import { AiOutlineSearch } from "react-icons/ai";

import * as S from "./styles";

const Comics = () => {
  const {
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
    handleCleanText,
    selectedComics
  } = useComics();

  return (
    <>
      <S.Content>
        <h1>Busque os quadrinhos da Marvel</h1>
        <S.Input>
          <AiOutlineSearch size={30} fill={"#000"} />
          <input
            type="text"
            placeholder="Busque um quadrinho pelo nome"
            name="inputValue"
            value={inputValue}
            onChange={(e) => {
              onChange(e.target.value)
            }}
          />
          <button className="btn clean" onClick={() => { handleCleanText() }} type="button">
            Limpar
          </button>
        </S.Input>
      </S.Content>

      <ContentLoad loading={loading}>
        {comics.length > 0 ? (
          <>
            {totalPages && (
              <Pagination
                limit={limit}
                offset={offSet}
                setOffset={setOffSet}
                totalPages={totalPages}
              />
            )}
            <S.Section>
              {comics.map((comic: ComicProps) => (
                <S.Card
                  key={comic.id}
                  className={handleClassNameActives(comic.id)}
                >
                  <img onClick={() => handleSelectedComics(comic)} className="cardImage" src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`} alt={comic.title} />
                  <div className="cardInfo">
                    <p className="cardName">{comic.title}</p>
                    <p className="cardDetail" onClick={() => { handleComicDetail(comic) }}>
                      Ver detalhes
                      <AiOutlineSearch />
                    </p>
                  </div>
                </S.Card>
              ))}
            </S.Section>

            <SendEmail selectedComics={selectedComics} />
          </>
        ) : (
          <S.NotFound>
            <h1>Nenhum quadrinho foi encontrado na busca.</h1>
          </S.NotFound>
        )}


      </ContentLoad>

      {showComicDetail && (
        <ComicDetail
          comicDetail={comicDetail}
          setShowComicDetail={setShowComicDetail}
        />
      )}
    </>
  )
};

export default Comics;