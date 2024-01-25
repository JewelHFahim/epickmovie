import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginatedItems.css";
import TableContent from "./TableContent";

const PaginatedItems = ({ itemsPerPage, printQualityList, isLoading }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = printQualityList?.data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(printQualityList?.data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % printQualityList?.data?.length;
    setItemOffset(newOffset);
  };



  return (
    <div>
      <TableContent currentItems={currentItems} isLoading={isLoading} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="page-item"
        nextClassName="next-class"
        previousLinkClassName="prev-class"
        activeClassName="active-page"
      />
    </div>
  );
};

export default PaginatedItems;
