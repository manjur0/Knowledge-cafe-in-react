import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex justify-between p-5 mx-10">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
