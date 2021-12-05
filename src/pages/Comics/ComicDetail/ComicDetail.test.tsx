import ComicDetail from "./ComicDetail";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../testUtils/renderWithTheme";

import { RESPONSE_COMIC_WITH_DETAIL_MOCK, RESPONSE_COMIC_WITHOUT_DETAIL_MOCK } from "../../../testUtils/Mocks/comics";

describe("ComicsDetail Page", () => {
  test("Should render ComicsDetail with details correctly", async() => {
    const setShowComicDetail = jest.fn();
    renderWithTheme(<ComicDetail comicDetail={RESPONSE_COMIC_WITH_DETAIL_MOCK} setShowComicDetail={setShowComicDetail} />);

    await screen.findByRole('img', { name: /gun theory/i })
    await screen.findByRole('heading', { name: /gun theory/i });
    await screen.findByText(/gun description/i);
    await screen.findByText(/47/i);
    await screen.findByText(/\$ 200/i);
    await screen.findByText(/31\/12\/2029\./i);
    await screen.findByText(/daniel way\./i);
    await screen.findByText(/paul alison\./i);
    await screen.findByText(/jon proctor\./i);
    await screen.findByRole('link', {
      name: /http:\/\/marvel\.com\/comics\/issue\/384\/gun_theory_2003_3\?utm_campaign=apiref&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b/i
    });
  });

  test("Should render ComicsDetail without details correctly", async() => {
    const setShowComicDetail = jest.fn();
    renderWithTheme(<ComicDetail comicDetail={RESPONSE_COMIC_WITHOUT_DETAIL_MOCK} setShowComicDetail={setShowComicDetail} />);

    await screen.findByRole('img', { name: /gun theory/i })
    await screen.findByRole('heading', { name: /gun theory/i });
    await screen.findByText(/nenhuma descrição detalhada sobre esse quadrinho\./i);
    expect(await screen.findAllByText(/não informado\./i)).toHaveLength(6);
  });
})