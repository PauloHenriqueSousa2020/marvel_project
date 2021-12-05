import moment from "moment"

import { ItemsPros, DateProps, UrlsProps, PricesProps, ComicsInfoProps } from "./interface";

const EmailTemplate = ({ selecteds }: any) => {

  const handleReturnPrice = (selected: ComicsInfoProps) => {
    const price = selected.prices.filter(
      (price: PricesProps) =>
        price.type === "printPrice"
    );

    if (price.length > 0) {
      return price.map((price: PricesProps) => price.price > 0 && `$ ${price.price}`);
    }

    return "Não informado."
  };

  const handleReturnWriter = (selected: ComicsInfoProps) => {
    const writers = selected.creators.items.filter(
      (writer: ItemsPros) =>
        writer.role === "writer"
    );

    if (writers.length > 0) {
      return writers.map((writer: ItemsPros, index: number) => index === (writers.length - 1) ? `${writer.name}.` : `${writer.name}, `);
    }

    return "Não informado."
  };

  const handleReturnPencillers = (selected: ComicsInfoProps) => {
    const pencillers = selected.creators.items.filter(
      (penciller: ItemsPros) => penciller.role === "penciller"
    );

    if (pencillers.length > 0) {
      return pencillers.map((penciller: ItemsPros, index: number) => index === (pencillers.length - 1) ? `${penciller.name}.` : `${penciller.name}, `);
    }

    return "Não informado."
  };

  const handleReturnPencillerCovers = (selected: ComicsInfoProps) => {
    const pencillerCovers = selected.creators.items.filter(
      (pencillerCover: ItemsPros) => pencillerCover.role === "penciller (cover)"
    );

    if (pencillerCovers.length > 0) {
      return pencillerCovers.map((pencillerCover: ItemsPros, index: number) => index === (pencillerCovers.length - 1) ? `${pencillerCover.name}.` : `${pencillerCover.name}, `);
    }

    return "Não informado."
  };

  const handleReturnDate = (selected: ComicsInfoProps) => {
    const date = selected.dates.find((date: DateProps) => date.type === "onsaleDate")

    if (!!date) {
      return `${moment(date.date).format("DD/MM/YYYY")}.`
    }
    return "Não informado."
  };

  const handleReturnUrl = (selected: ComicsInfoProps) => {
    const url = selected.urls.find((url: UrlsProps) => url.type === "detail")

    if (!!url) {
      return url.url
    }
  };

  return (
    <div>
      {selecteds.map((selected: any, index: number) => (
        <div style={{
          width: "70vw",
          height: "85%",
          background: "#004D7C",
          border: "0.6rem solid #BB0A1E",
          borderRadius: "2rem",
          padding: "2rem",
          marginTop: "1.2rem"
        }} key={index}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "2rem",
          }}>
            <div style={{
              border: "0.25rem solid #BB0A1E",
            }}>
              <img style={{
                height: "100%",
              }} src={`${selected.thumbnail.path}/standard_fantastic.${selected.thumbnail.extension}`} alt={selected.title} />
            </div>

            <div style={{
              position: "relative",
              background: "#F5F5F5",
              border: "0.25rem solid #BB0A1E",
            }}>
              <div style={{
                display: "inline-flex",
                position: "absolute",
              }}>
                <h2 style={{
                  padding: "0.5rem 0.8rem",
                  backgroundColor: "#F5F5F5",
                  border: "0.2rem solid #BB0A1E",
                  fontSize: "1rem",
                }}>{selected.title}</h2>
              </div>
              <div style={{
                width: "50rem",
                padding: "2.5rem",
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}>
                  <p>{selected.description ? selected.description : 'Nenhuma descrição detalhada sobre esse quadrinho.'}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            border: "0.25rem solid #BB0A1E",
            background: "#F5F5F5",
            padding: "2rem 0rem 2rem 5rem",
          }}>
            <div style={{
              display: "flex",
            }}>
              <div style={{
                marginRight: "20rem"
              }}>
                <div>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Quantidade de páginas</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{selected?.pageCount !== 0 ? selected?.pageCount : "Não informado."}</p>
                </div>
                <div>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Valor</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{handleReturnPrice(selected)}</p>
                </div>
                <div>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Data de publicação</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{handleReturnDate(selected)}</p>
                </div>
              </div>
              <div>
                <div style={{
                  width: "20rem",
                }}>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Escritores</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{handleReturnWriter(selected)}</p>
                </div>
                <div style={{
                  width: "20rem",
                }}>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Artistas</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{handleReturnPencillers(selected)}</p>
                </div>
                <div style={{
                  width: "20rem",
                }}>
                  <p style={{
                    fontSize: "1.2rem",
                    color: "#000000",
                    fontWeight: 700,
                  }}>Artistas  da Capa</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "#000000",
                  }}>{handleReturnPencillerCovers(selected)}</p>
                </div>
              </div>
            </div>


            {(!!handleReturnUrl(selected)) && (
              <div style={{
                paddingTop: "2rem",
                wordWrap: "break-word",
              }}>
                <p style={{
                  fontSize: "1.2rem",
                  color: "#000000",
                  fontWeight: 700,
                }}>Acesse mais informações no link abaixo:</p>
                <a style={{
                  fontSize: "1rem",
                  color: "#000000",
                }} target="_blank" href={handleReturnUrl(selected)} rel="noreferrer">
                  {handleReturnUrl(selected)}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailTemplate;