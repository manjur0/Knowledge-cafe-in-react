import { useState } from "react";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleAddToBookmarks = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
    // const remainingBookmark = bookmarks.filter(
    //   (bookmark) => bookmark.id !== id
    // );
    // setBookmarks(remainingBookmark);
  };

  // set mark as read function
  const hanldMarkAsRead = (id, time) => {
    setMarkAsRead((prev) => prev + time);
    console.log("remove", id);
    const remainingMark = bookmarks.filter((mark) => mark.id !== id);
    setBookmarks(remainingMark);
  };
  return (
    <>
      <Header />
      <div className="md:flex justify-between p-5  max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          hanldMarkAsRead={hanldMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead} />
      </div>
    </>
  );
}

export default App;
