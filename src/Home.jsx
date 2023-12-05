import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum ...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web ev top tips",
      body: "lorem ipsum ...",
      author: "luigi",
      id: 3,
    },
    {
      title: "My new Store",
      body: "lorem ipsum ...",
      author: "mario",
      id: 4,
    },
  ]);

  const handleDelete = (id) => {
    //Filters out all blogs not equal to the specified blog
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs); // saves the new blog list only to the current state
  };

  //Passing blogs to the child component
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* //note Filter filters all elements that match the blog author mario */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
