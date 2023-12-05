import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState ([
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

  //Removes the blog only in this state without permanently removing the blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  };

  //Passing blogs to the child component
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      {/* //note Filter filters all elements that match the blog author mario */}
      <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario' )} title="Mario's blogs" />
      </div>
    )
};

export default Home;
