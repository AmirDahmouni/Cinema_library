import { IconButton, Box, Button } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { useCallback, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { updateMoviesFilters, fetchMoviesRequest } from '../store/movies/actions';

function Pagination({ filters, nbPages }: any) {

  const [pages, setPages] = useState<number[]>([1, 2, 3])
  const [currentPage, setCurrentPage] = useState<number>(1)

  const dispatch = useDispatch()

  const handlePageChange = useCallback((page: number) => {
    dispatch(updateMoviesFilters("pageParam", page))
    dispatch(fetchMoviesRequest(filters))
    setCurrentPage(page)
    let pages = [1, 2, 3]
    if (page == nbPages)
      pages = [nbPages - 2, nbPages - 1, nbPages]
    else if (page !== 1)
      pages = [page - 1, page, page + 1]
    setPages(pages)
  }, [])

  return (
    <Box justifyContent="center" mt={4}>
      <IconButton aria-label='Search database' icon={<ArrowLeftIcon />} onClick={() => handlePageChange(1)} />
      {
        pages.map((index) =>
          <Button
            bg={currentPage == index ? 'blue.700' : 'whiteAlpha.100'}
            marginLeft={2}
            key={index}
            onClick={() => handlePageChange(index)}
          >
            {index}
          </Button>
        )
      }
      <IconButton marginLeft={2} aria-label='Search database' icon={<ArrowRightIcon />} onClick={() => handlePageChange(nbPages)} />
    </Box>
  )

}


const mapStateToProps = ({ moviesState }: any) => {
  return {
    filters: moviesState.filters,
    nbPages: 500
  };
};

export default connect(mapStateToProps)(Pagination);
