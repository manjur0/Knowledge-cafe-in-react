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
  };

  // set mark as read function
  const hanldMarkAsRead = (time) => {
    setMarkAsRead((prev) => prev + time);
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
