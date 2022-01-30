import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import Post from './components/Post';
function ReactPagination() {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(0);
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


    const pageVisited = currentPage * postsPerPage
    const displayCurrentPost = posts.slice(pageVisited,pageVisited + postsPerPage)


    const pageCount = Math.ceil(posts.length / postsPerPage)

    const changePage = ({selected})=>{
        console.log('se',selected)
        setCurrentPage(selected)
    }

    return (
        <div className="container">
            <h2 className="pt-5 mb-4">React Pagination using react-paginate</h2>    
            
            {/* {displayCurrentPost} */}
            
            <Post posts={displayCurrentPost} Loading={loading} /> 
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                
                containerClassName="pagination"
                activeClassName="active"
                pageLinkClassName="page-link"
                breakLinkClassName="page-link"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                pageClassName="page-item"
                breakClassName="page-item"
                nextClassName="page-item"
                previousClassName="page-item"
            />

        </div>
    )
}

export default ReactPagination
