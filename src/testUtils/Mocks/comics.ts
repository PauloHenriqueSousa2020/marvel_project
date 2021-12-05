export const RESPONSE_COMICS_MOCK = {
  data: {
    offset: 0,
    limit: 20,
    total: 4,
    count: 0,
    results: [
      {
        id: 82965,
        title: "Marvel Previews (2017)",
        description: "",
        pageCount: 152,
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/82965/marvel_previews_2017?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
          }
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2099-08-28T00:00:00-0500"
          },
          {
            type: "focDate",
            date: "2019-08-05T00:00:00-0400"
          }
        ],
        prices: [
          {
            type: "printPrice",
            price: 0
          }
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg"
        },
        creators: {
          available: 0,
          collectionURI: "http://gateway.marvel.com/v1/public/comics/82965/creators",
          items: [],
          returned: 0
        },
      },
      {
        id: 183,
        title: "Startling Stories",
        description: "For Doctor Bruce Banner life is anything but normal. But what happens when two women get between him and his alter ego, the Incorrigible Hulk? Hulk confused! \r\nIndy superstar Peter Bagge (THE MEGALOMANIACAL SPIDER-MAN) takes a satirical jab at the Hulk mythos with a tale of dames, debauchery and destruction.\r\n32 PGS./MARVEL PSR...$2.99",
        pageCount: 0,
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/183/startling_stories_the_incorrigible_hulk_2004_1?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
          }
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500"
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500"
          }
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99
          }
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg"
        },
        creators: {
          available: 1,
          collectionURI: "http://gateway.marvel.com/v1/public/comics/183/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/6291",
              name: "Peter Bagge",
              role: "penciller (cover)"
            }
          ],
          returned: 1
        },
      },
      {
        id: 428,
        title: "Ant Man",
        description: "",
        pageCount: 0,
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/428/ant-man_2003_4?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
          }
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500"
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500"
          }
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99
          }
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890",
          extension: "jpg"
        },
        creators: {
          available: 2,
          collectionURI: "http://gateway.marvel.com/v1/public/comics/428/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/600",
              name: "Clayton Crain",
              role: "penciller (cover)"
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer"
            }
          ],
          returned: 2
        },

      },
      {
        id: 384,
        title: "Gun Theory",
        description: "",
        pageCount: 0,
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/384/gun_theory_2003_3?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
          }
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500"
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500"
          }
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.5
          }
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
          extension: "jpg"
        },
        creators: {
          available: 2,
          collectionURI: "http://gateway.marvel.com/v1/public/comics/384/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
              name: "Jon Proctor",
              role: "penciller (cover)"
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer"
            }
          ],
          returned: 2
        },
      }
    ]
  },
};

export const SEARCH_COMICS_MOCK = {
  data: {
    offset: 0,
    limit: 20,
    total: 4,
    count: 0,
    results: [
      {
        id: 82965,
        title: "Marvel Previews",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg"
        },
      },
    ]
  },
};

export const RESPONSE_COMIC_WITHOUT_DETAIL_MOCK = {
  id: 384,
  title: "Gun Theory",
  description: "",
  pageCount: 0,
  urls: [],
  dates: [],
  prices: [],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
    extension: "jpg"
  },
  creators: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/384/creators",
    items: [],
    returned: 0
  },
};

export const RESPONSE_COMIC_WITH_DETAIL_MOCK = {
  id: 384,
  title: "Gun Theory",
  description: "Gun Description",
  pageCount: 47,
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/issue/384/gun_theory_2003_3?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
    }
  ],
  dates: [
    {
      type: "onsaleDate",
      date: "2029-12-31T00:00:00-0500"
    },
    {
      type: "focDate",
      date: "-0001-11-30T00:00:00-0500"
    }
  ],
  prices: [
    {
      type: "printPrice",
      price: "200"
    }
  ],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
    extension: "jpg"
  },
  creators: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/384/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
        name: "Jon Proctor",
        role: "penciller (cover)"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
        name: "Jon 2",
        role: "penciller (cover)"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Daniel Way",
        role: "writer"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Daniel 2",
        role: "writer"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Paul Alison",
        role: "penciller"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Paul 2",
        role: "penciller"
      }
    ],
    returned: 2
  },
};


export const RESPONSE_SELECTEDS_COMIC_MOCK = [{
  id: 384,
  title: "Gun Theory",
  description: "Gun Description",
  pageCount: 47,
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/issue/384/gun_theory_2003_3?utm_campaign=apiRef&utm_source=aa5a981963fa6f57eeb88dc2be8fc61b"
    }
  ],
  dates: [
    {
      type: "onsaleDate",
      date: "2029-12-31T00:00:00-0500"
    },
    {
      type: "focDate",
      date: "-0001-11-30T00:00:00-0500"
    }
  ],
  prices: [
    {
      type: "printPrice",
      price: "200"
    }
  ],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
    extension: "jpg"
  },
  creators: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/384/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
        name: "Jon Proctor",
        role: "penciller (cover)"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
        name: "Jon Proctor 2",
        role: "penciller (cover)"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Daniel Way",
        role: "writer"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Daniel Way 2",
        role: "writer"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Paul Alison",
        role: "penciller"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
        name: "Paul Alison 2",
        role: "penciller"
      }
    ],
    returned: 2
  },
}];