import React from "react";

const SingleBookmark = ({ singleBook }) => {
  return (
    <div className="bg-slate-100 text-xl font-semibold mx-5 p-5 rounded-lg mb-3">
      <h2>{singleBook}</h2>
    </div>
  );
};

export default SingleBookmark;
