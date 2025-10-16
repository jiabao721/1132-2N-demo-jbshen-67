import { useState } from 'react';


import blogData_67 from '../assets/data/blogData.json';
import Blog_67 from '../compoonents/Blog_67';

const BlogLocalJsonPage_67 = () => {
  const [name, setName] = useState('jbshen');
  const [id, setId] = useState(213410367);
  const [blogs_67,setBlogs_67] = useState();
    return (
    <>
        <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- {name}, {id} </h2>
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

export default BlogLocalJsonPage_67;
