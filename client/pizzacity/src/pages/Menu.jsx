import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../components/DishCard';
import Error from '../components/Error';
import Filters from '../components/Filters';
import { getDishes } from '../redux/action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

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
    };
    if (
      dishes?.length == 0 ||
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
    filterText,
  ]);

  //HandelSearch for searching Particular Item text
  const handleSearch = (e) => {
    e.preventDefault();
    const params = { q: searchText };
    {
      searchText
        ? dispatch(getDishes(params))
        : toast('Please Enter Cafe Food To Search');
    }
  };

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
        {/* sorting and pagination */}
        <div className="d-flex align-items-center justify-content-around mt-4">
          {/* sorting */}
          <select
            className="form-select w-25"
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option>Sort By...</option>
            <option value="ASC">Price: Low to High</option>
            <option value="DESC">Price: High to Low</option>
          </select>
          {/* pagination */}
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
        {/* Data and handling loading and errors here*/}
        <div className="card-grid p-5">
          {error && <Error />}
          {loading ? (
            <div
              className="spinner-border text-light"
              role="status"
            ></div>
          ) : (
            dishes?.data &&
            dishes.data.map((item) => (
              <DishCard key={item.id} item={item} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
