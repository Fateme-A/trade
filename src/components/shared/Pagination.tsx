import { usePagination } from "@/hooks/usePagination";

type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  onPageChange,
}: TPaginationProps) => {
  const paginationRange = usePagination({ currentPage, totalPages, siblingCount });

  // Disable Previous button if on the first page
  const onPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Disable Next button if on the last page
  const onNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Do not render pagination if no pages exist
  if (currentPage === 0 || paginationRange === undefined) {
    return null; 
  }

  return (
    <div className="flex items-center space-x-2 my-4 justify-center ml-2">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className=" ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        قبلی
      </button>

      {paginationRange.map((pageNumber, index) =>
        typeof pageNumber === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={`px-3 py-1 mx-1 rounded ${
              pageNumber === currentPage
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-primary-400 hover:text-white`}
          >
            {pageNumber}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 mx-1 text-gray-700">
            {pageNumber}
          </span>
        )
      )}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        بعدی
      </button>
    </div>
  );
};

