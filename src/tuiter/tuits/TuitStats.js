import React from 'react';
import { FaComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
const TuitStats = ({ replies, retuits, likes, isLiked }) => (
  <div className="row">
    <div className="col ">
      <FaComment className="me-2" />
      {replies}
    </div>
    <div className="col">
      <FaRetweet className="me-2" />
      {retuits}
    </div>
    <div className="col">
      <FaHeart className="me-2" color={isLiked ? 'red' : 'inherit'} />
      {likes}
    </div>
    <div className="col">
      <FiUpload className="me-2" />
    </div>
  </div>
);

export default TuitStats;