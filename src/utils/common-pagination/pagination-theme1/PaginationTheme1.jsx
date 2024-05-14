/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import PagiBtnTheme1 from "../../theme1-contents/PagiBtnTheme1";

const PaginationTheme1 = ({ currentPage, perPgaeMovie, type, filteredTerm, btnColor }) => {
  
  const navigate = useNavigate();

  const totalData = perPgaeMovie?.data?.total;
  const perPage = perPgaeMovie?.data?.data?.length;
  const totalPages = Math.ceil(totalData / perPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    if (type === "movies" || type === "tv-show" || type === "hindi" || type === "english" || type === "bangla") {
      navigate(`/${type}/page/${page}`);
    } 
    else if(type === "search-list"){
      navigate(`/search-list/${filteredTerm}/page/${page}`);

    }
    else {
      navigate(`/terms/${filteredTerm}/page/${page}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to generate page numbers
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 2;
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
    <div className="mt-8 w-full flex flex-wrap items-center gap-4">
      <PagiBtnTheme1
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "hidden" : ""}`}
      >
        Prev
      </PagiBtnTheme1>

      {generatePageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <PagiBtnTheme1>...</PagiBtnTheme1>
          ) : (
            <PagiBtnTheme1
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? `active bg-[#FFA113] ${btnColor}` : ""}
            >
              {page}
            </PagiBtnTheme1>
          )}
        </React.Fragment>
      ))}

      <PagiBtnTheme1
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PagiBtnTheme1>
    </div>
  );
};

export default PaginationTheme1;
