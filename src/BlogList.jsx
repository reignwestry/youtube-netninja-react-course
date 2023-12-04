const BlogList = ({blogs, title}) => {
  // receives the prop blogs from the Home component
  //note ({}) destructures props to pull the specific properties straight into the component
  
  // note stores the prop blogs into blogs
  // const blogs = props.blogs;
  // const title = props.title;

    // console.log('props, blogs ' + props, blogs)
    return (
      <div className="home">
        {/* //note Map function loops through the array */}
        <h2>{ title }</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
export default BlogList;