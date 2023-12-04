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
  ]);

  //Passing blogs to the child component
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      </div>
    )
};

export default Home;
