import React from "react";
import PaginationButton from "../../utils/PaginationButton";

const Pagination = ({ currentPage, setCurrentPage, perPgaeMovie }) => {
  
  const totalData = perPgaeMovie?.data?.total;

  const perPage = 20;
  const totalPages = Math.ceil(totalData / perPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  // Function to generate page numbers
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 6;
    const showDotsThreshold = maxVisiblePages + 1;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfVisiblePages = Math.floor(maxVisiblePages / 2);
      const firstPage = Math.max(1, currentPage - halfVisiblePages);
      const lastPage = Math.min(totalPages, currentPage + halfVisiblePages);

      for (let i = firstPage; i <= lastPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage > halfVisiblePages + 1) {
        // Show dots if currentPage is not close to the beginning
        if (currentPage >= showDotsThreshold) {
          pageNumbers.unshift("...");
        }
        // Always show the first page
        pageNumbers.unshift(1);
      }

      if (currentPage < totalPages - halfVisiblePages) {
        // Show dots if currentPage is not close to the end
        if (currentPage <= totalPages - showDotsThreshold) {
          pageNumbers.push("...");
        }
        // Always show the last page
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="bg-[#27272A] w-full h-[87px] px-[23px] flex items-center gap-2">
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "hidden" : ""}`}
      >
        Prev
      </PaginationButton>

      {generatePageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <PaginationButton>...</PaginationButton>
          ) : (
            <PaginationButton
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? "active bg-[#269500]" : ""}
            >
              {page}
            </PaginationButton>
          )}
        </React.Fragment>
      ))}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </div>
  );
};

export default Pagination;
