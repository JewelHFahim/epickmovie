import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginatedItems.css";
import TableContent from "./TableContent";

const PaginatedItems = ({ datas }) => {
  console.log(datas);

  const itemsPerPage = 8;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = datas?.items?.data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(datas?.items?.data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % datas?.items?.data?.length;
    setItemOffset(newOffset);
  };

  const currentRangeStart = itemOffset + 1;
  const currentRangeEnd = Math.min(endOffset, datas?.items?.data?.length);

  return (
    <div>
      <TableContent
        currentItems={currentItems}
        isLoading={datas?.isLoading}
        deletetm={datas?.deleteAction}
        thead={datas?.thead}
      />

      <div className="flex justify-center items-center py-2">
        <p className="font-medium">
          {currentRangeStart} - {currentRangeEnd} of
          {datas?.items?.data?.length}
        </p>
      </div>

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
