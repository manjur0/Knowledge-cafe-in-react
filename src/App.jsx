import { useState } from "react";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header />
      <div className="md:flex justify-between p-5  max-w-7xl mx-auto">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
