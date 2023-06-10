import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
type PaginationProps = {
  pageCount:number;
  onChangePage:(page:number) => void;
}
const Pagination:React.FC<PaginationProps> = ({pageCount, onChangePage}) => {
  return (
    <ReactPaginate
      className={styles.Pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageCount - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
