

interface PaginationProps {
  limit?: number;
  offset?: number;
  totalItems: number;
  onPageChange: (newOffset: number) => void;
}

const Pagination = ({
  limit = 10,
  offset = 0,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        onClick={() => onPageChange(offset - limit)}
        disabled={offset === 0}
      >
        Previous
      </button>
      <span className="text-lg font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        onClick={() => onPageChange(offset + limit)}
        disabled={offset + limit >= totalItems}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;