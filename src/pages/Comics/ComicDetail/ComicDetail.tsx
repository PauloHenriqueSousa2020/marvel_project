import * as S from "./styles";

import { AiOutlineClose } from "react-icons/ai";

import { useComicDetail } from "./useComicDetail";

const ComicDetail = ({ comicDetail, setShowComicDetail }: any) => {
  const {
    handleReturnWriter,
    handleReturnPencillers,
    handleReturnPencillerCovers,
    handleReturnDate,
    url
   } = useComicDetail({ comicDetail });

  return (
    <S.Modal>
      <S.Container>
        <S.Close>
          <button
            onClick={() => setShowComicDetail(false)}
            className="closeButton"
          >
            Fechar <AiOutlineClose size={20} />
          </button>
        </S.Close>

        <S.Content>
          <div className="blockImage">
            <img src={`${comicDetail.thumbnail.path}/standard_fantastic.${comicDetail.thumbnail.extension}`} alt="3-D Man" />
          </div>

          <div className="infosContainer">
            <div className="title">
              <h2>{comicDetail.title}</h2>
            </div>
            <div className="scrollBar">
              <div className="description">
                <p>{comicDetail.description ? comicDetail.description : 'Nenhuma descrição detalhada sobre esse quadrinho.'}</p>
              </div>
            </div>
          </div>
        </S.Content>

        <S.InfosContent>
          <S.OtherInfos>
            <div className="infosContainer">
              <p className="infosContainerTitle">Quantidade de páginas</p>
              <p className="infosContainerSubTitle">{comicDetail?.pageCount !== 0 ? comicDetail?.pageCount : "Não informado."}</p>
            </div>
            <div className="infosContainer">
              <p className="infosContainerTitle">Valor</p>
              <p className="infosContainerSubTitle">{!!comicDetail.prices.price ? comicDetail.prices.price : "Não informado."}</p>
            </div>
            <div className="infosContainer">
              <p className="infosContainerTitle">Data de publicação</p>
              <p className="infosContainerSubTitle">{handleReturnDate()}</p>
            </div>
            <div className="infosContainer">
              <p className="infosContainerTitle">Escritores</p>
              <p className="infosContainerSubTitle">{handleReturnWriter()}</p>
            </div>
            <div className="infosContainer">
              <p className="infosContainerTitle">Artistas</p>
              <p className="infosContainerSubTitle">{handleReturnPencillers()}</p>
            </div>
            <div className="infosContainer">
              <p className="infosContainerTitle">Artistas  da Capa</p>
              <p className="infosContainerSubTitle">{handleReturnPencillerCovers()}</p>
            </div>


          </S.OtherInfos>

          <S.Url>
            <p className="infosContainerTitle">Acesse mais informações no link abaixo:</p>
            <a className="infosContainerUrl" target="_blank" href={url.url} rel="noreferrer">
              {url.url}
            </a>
          </S.Url>
        </S.InfosContent>
      </S.Container>
    </S.Modal>
  )
};

export default ComicDetail;