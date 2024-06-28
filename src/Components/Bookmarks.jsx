import SingleBookmark from "./SingleBookmark";

const Bookmarks = ({ bookmarks, markAsRead }) => {
  return (
    <div className="w-1/3 bg-slate-200 rounded-xl ">
      <h1 className="text-3xl font-semibold py-5 m-5 text-center bg-blue-200  rounded-lg">
        {" "}
        Mark As Reading Time: {markAsRead}
      </h1>
      <h1 className="text-3xl font-semibold my-5 py-5 m-5 text-center bg-blue-200  rounded-lg">
        Bookmarks blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((singleBook, idx) => (
        <SingleBookmark key={idx} singleBook={singleBook}></SingleBookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
