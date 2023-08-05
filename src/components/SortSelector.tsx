import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useDispatch, connect } from "react-redux";
import { BsChevronDown } from 'react-icons/bs'
import { fetchMoviesRequest, updateMoviesFilters } from '../store/movies/actions';
import { useState } from 'react';

const SortSelector = ({ filters }: any) => {

  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState<string>()

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.desc", label: "popularity" },
    { value: "primary_release_date.desc", label: "Release date" },
    { value: "revenue.desc", label: "revenue" },
    { value: "vote_average.desc", label: "Average rating" }
  ]


  const onSelectOrder = (filterValue: string) => {
    setSortOrder(filterValue)
    dispatch(updateMoviesFilters("sortOrder", filterValue))
    dispatch(fetchMoviesRequest(filters))
  }

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{currentSortOrder?.label || 'Sort by'}</MenuButton>
      <MenuList>
        {
          sortOrders.map((order) =>
            <MenuItem onClick={() => onSelectOrder(order.value)} key={order.label} value={order.value}>
              {order.label}
            </MenuItem>
          )}
      </MenuList>
    </Menu >
  )
}

const mapStateToProps = ({ moviesState }: any) => {
  return {
    filters: moviesState.filters
  };
};

export default connect(mapStateToProps)(SortSelector);

