import React from 'react';
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);

    return (
        <div className="pagination-container">
            <button className="page-button" disabled={currentPage === 1} onClick={() => onPageChange(1)}>
                «
            </button>
            <button className="page-button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                &lt;
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx).map(pageNumber => (
                <span
                    key={pageNumber}
                    className={`page-number ${pageNumber === currentPage ? "current-page" : ""}`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </span>
            ))}
            <button className="page-button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                &gt;
            </button>
            <button className="page-button" disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>
                »
            </button>
        </div>
    );
}

export default Pagination;
