import { Container } from './styles';

const MAX_ITEMS = 9;
const CURRENT_ITEM = 1;
const MAX_LEFT = (MAX_ITEMS - CURRENT_ITEM) / 2;

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: any;
}

export default function Pagination({ limit, total, offset, setOffset }: PaginationProps) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  console.log(Math.min(MAX_ITEMS, total))
  console.log(Math.ceil(total/limit))
  return (
    <Container>
      <ul>
        {Array.from({ length: Math.min(MAX_ITEMS, total) })
          .map((_, index) => index + firstPage)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => setOffset((page - 1) * limit)}
                className={
                  page === currentPage ? 'current-page' : ''
                }
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    </Container>
  );
}