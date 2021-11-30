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
          <div className="container-image">
            <img src={`${comicDetail.thumbnail.path}/standard_fantastic.${comicDetail.thumbnail.extension}`} alt="3-D Man" />
          </div>

          <div className="context">
            <div className="name">
              <h2>{comicDetail.title}</h2>
            </div>
            <div className="description">
              <p>{comicDetail.description ? comicDetail.description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'}</p>
            </div>
          </div>
        </S.Content>
      </S.Container>

    </S.Modal>
  )
};

export default ComicDetail;