import { useProducts } from '../../context/ProductContext';

const Pagination = () => {
  const { currentPage, totalPages, paginate } = useProducts();
  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage, endPage;

  if (totalPages <= 1) {
    return null;
  }

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrent) {
      // Near the start
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      // Near the end
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center bg-[#f5f5f5] items-center my-5">
      <button
        onClick={() => paginate(1)}
        disabled={currentPage === 1}
        className={`w-[70px] h-[70px] border-0 flex items-center justify-center text-2xl font-medium ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
        }`}
        aria-label="First page"
      >
        &laquo;
      </button>

      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-[70px] h-[70px] border-0 flex items-center justify-center text-2xl font-medium ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
        }`}
        aria-label="Previous page"
      >
        &lsaquo;
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => paginate(1)}
            className={`w-[70px] h-[70px] border-0 cursor-pointer text-2xl font-medium ${
              1 === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            1
          </button>
          {startPage > 2 && (
            <span className="px-2 text-gray-500 text-2xl">
              ...
            </span>
          )}
        </>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-[70px] h-[70px] cursor-pointer text-2xl font-medium ${
            number === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          aria-current={number === currentPage ? 'page' : undefined}
        >
          {number}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-gray-500 text-2xl">
              ...
            </span>
          )}
          <button
            onClick={() => paginate(totalPages)}
            className={`w-[70px] h-[70px] border-0 cursor-pointer text-2xl font-medium ${
              totalPages === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-[70px] h-[70px] border-0 flex items-center justify-center text-2xl font-medium ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
        }`}
        aria-label="Next page"
      >
        &rsaquo;
      </button>

      <button
        onClick={() => paginate(totalPages)}
        disabled={currentPage === totalPages}
        className={`w-[70px] h-[70px] border-0 flex items-center justify-center text-2xl font-medium ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
        }`}
        aria-label="Last page"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
