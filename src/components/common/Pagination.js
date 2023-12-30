import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationComponent = ({ totalItems, pageSize = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <Stack spacing={2} mt={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;
