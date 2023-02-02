import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTrash, FaComment } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Progress } from 'antd';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 21);
  return (
    <div className="container-book">
      <div className="book-left d-flex justify-between align-center">
        <div className="book-detail">
          <h4 className="category">
            {' '}
            {category}
          </h4>
          <h3 className="book-title">{title}</h3>
          <h4 className="book-author">{author}</h4>
          <div className="buttons d-flex align-center">
            <button type="button">
              <FaComment />
              {' '}
&nbsp;
              Comments
            </button>
            <div className="vertical-divider" />
            <button type="button" onClick={() => dispatch(removeBook(id))}>
              <FaTrash />
&nbsp;
              Remove
            </button>
            <div className="vertical-divider" />
            <button type="button">
              <FiEdit />
&nbsp;
              Edit
            </button>
          </div>
        </div>

      </div>
      <div className="book-right d-flex justify-between align-center">
        <div className="book-progress d-flex align-center justify-start">
          <Progress
            type="circle"
            width={80}
            format={() => ''}
            strokeWidth={10}
            strokeColor={{
              '0%': '#307bbe',
              '100%': '#379cf6',
            }}
            trailColor="#e8e8e8"
            percent={progress}
          />
          <div className="progress-right">
            <p className="percentage">
              {progress}
              %
            </p>
            <p className="completed">Completed</p>
          </div>

        </div>
        <div className="progress-divider" />
        <div className="chapter">
          <h4 className="chapter-heading">CURRENT CHAPTER</h4>
          <p className="chapter-txt">
            Chapter
            {' '}
            {chapter}
          </p>
          <button type="button" className="chapter-btn">UPDATE PROGRESS</button>
        </div>
      </div>

    </div>

  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
