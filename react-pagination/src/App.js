
import { useState,useEffect } from 'react';
import { Pagination } from './components/Pagination';

import Post from './components/Post';

function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostPerPage] = useState(10);

  const fetchData = async () =>{
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setPosts(json)
    });
    setLoading(false)
  } 
  
  useEffect(() => {
    fetchData()
  }, [])
  
// get cuurent page

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost)

//change page
const paginate = (pageNumberArug)=>{
  setCurrentPage(pageNumberArug)
}

  return (
    <div className="App">
      <div className="container">
      <header className="App-">
        <h2 className="mb-5 pt-5 mt-4 text-center"> React Pagination </h2>
      </header>
       <Post posts={currentPost} Loading={loading} /> 
       <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}  paginate={paginate} />
        
      </div>
    </div>
  );
}

export default App;
