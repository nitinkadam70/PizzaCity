import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../components/DishCard';
import Error from '../components/Error';
import Filters from '../components/Filters';
import { useSearchParams } from 'react-router-dom';
import { getDishes } from '../redux/action';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { GiConsoleController } from 'react-icons/gi';

const Menu = () => {
  const [pageNo, setPageNo] = useState(1);
  const [sortValue, setSortValue] = useState('ASC');
  const [filterText, setFilterText] = useState('');
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { loading, dishes, error } = useSelector(
    (store) => store.dishes
  );

  useEffect(() => {
    const params = {
      _page: pageNo,
      _limit: 8,
      _sort: 'price',
      _order: sortValue,
      type: filterText || null,
      q: searchText,
    };
    if (
      dishes?.length == 0 ||
      searchText.length > 0 ||
      pageNo ||
      sortValue ||
      filterText.length > 0
    ) {
      dispatch(getDishes(params));
    }
  }, [
    dishes?.length,
    pageNo,
    sortValue,
    filterText.length > 0,
    searchText.length > 0,
    filterText,
  ]);

  const handleSearch = () => {};

  return (
    <>
      <section className="bg-dark border-bottom">
        {/* FIlters Nav */}
        <div>
          <Filters
            setFilterText={setFilterText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
            setPageNo={setPageNo}
          />
        </div>
        {/* sorting */}
        <div className="d-flex align-items-center justify-content-around mt-4">
          <select
            className="form-select w-25"
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option>Sort By Price</option>
            <option value="ASC">Low to High</option>
            <option value="DESC">High to Low</option>
          </select>
          <div className="d-flex align-items-center justify-content-around gap-4">
            <button
              disabled={pageNo === 1}
              className="btn btn-outline-primary"
              onClick={() => setPageNo(pageNo - 1)}
            >
              <span>
                <MdOutlineKeyboardArrowLeft />
              </span>
              Prev
            </button>
            <strong className="h4 text-light">{pageNo}</strong>
            <button
              disabled={
                pageNo ==
                (dishes?.headers &&
                  Math.ceil(dishes.headers['x-total-count'] / 8))
              }
              className="btn btn-outline-primary"
              onClick={() => setPageNo(pageNo + 1)}
            >
              Next
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        {/* Data */}
        <div className="card-grid p-5">
          {error && <Error />}
          {loading ? (
            <div
              className="spinner-border text-light"
              role="status"
            ></div>
          ) : (
            dishes?.data &&
            dishes.data.map((item) => <DishCard item={item} />)
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
