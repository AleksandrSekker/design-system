import React, {type FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
};

const Pagination: FunctionComponent<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   onPageChange,
                                               }) => {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasPreviousPage = previousPage >= 1;
    const hasNextPage = totalPages && nextPage <= totalPages;


    return (
        <nav className="flex justify-center">
            <ul className="flex items-center space-x-2">
                {hasPreviousPage && (
                    <li>
                        <button onClick={() => onPageChange(previousPage)}>
                            <a className="flex items-center px-3 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                                Previous
                            </a>
                        </button>
                    </li>
                )}
                {totalPages &&
                    Array.from({ length: totalPages }, (_, page) => (
                        <li key={page}>
                            <button onClick={() => onPageChange(page + 1)}>
                                <a
                                    className={`flex items-center px-3 py-2 rounded-md ${
                                        page + 1 === currentPage
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {page + 1}
                                </a>
                            </button>
                        </li>
                    ))}
                {hasNextPage && (
                    <li>
                        <button onClick={() => onPageChange(nextPage)}>
                            <a className="flex items-center px-3 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">
                                Next
                                <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                            </a>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
