import * as S from "./styles";

import { AiOutlineClose } from "react-icons/ai";

const ComicDetail = ({ comicDetail, setShowComicDetail }: any) => {
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
            <div className="description">
              <p>{comicDetail.description ? comicDetail.description : '...'}</p>
            </div>
          </div>

  
        </S.Content>

        
        <S.OtherInfos>
          <div className="infosContainer">
            aaaaaaaaaa
          </div>
          </S.OtherInfos>
      </S.Container>

    </S.Modal>
  )
};

export default ComicDetail;