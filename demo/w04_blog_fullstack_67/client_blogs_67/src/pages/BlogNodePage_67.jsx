import { useState, useEffect } from 'react';

// import blogData_67 from '../assets/data/blogData.json';
import Blog_67 from '../compoonents/Blog_67';

const api_url ='http://localhost:5000/api/blog_67'

const BlogNodePage_67 = () => {
  const [name, setName] = useState('jbshen');
  const [id, setId] = useState(213410367);
  const [blogs_67,setBlogs_67] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try{
const response = await fetch(api_url);
const data = await response.json();
console.log('blogs', data);
setBlogs_67(data);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
fetchBlogFromNodeServer();
  },[]);
    return (
    <>
        <section className="blogs">
      <div className="section-title">
        <h2>blogs from Node -- {name}, {id} </h2>
      </div>
      <div className="blogs-center">
        {blogs_67.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog_67 
            key={id} 
            id={id} 
            title={title} 
            descrip={descrip} 
            category={category} 
            img={img} />
          );
        })}
      </div>
    </section>
    </>
    );
};

export default BlogNodePage_67;
