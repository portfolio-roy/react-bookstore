import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categories);
  const showStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="cat-container d-flex flex-column align-center justify-center">
      <h4>{currentStatus}</h4>
      <button type="button" className="btn-primary" onClick={showStatus}>Check Status</button>
    </div>
  );
};
export default Categories;
