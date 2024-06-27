import SingleBookmark from "./SingleBookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 bg-slate-200 rounded-xl ">
      <h1 className="text-3xl font-semibold my-5 text-center">
        Bookmarks blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((singleBook, idx) => (
        <SingleBookmark key={idx} singleBook={singleBook}></SingleBookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
