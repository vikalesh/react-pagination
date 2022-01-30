import React from 'react'

export const Pagination = ({postsPerPage, totalPosts,paginate}) => {

    const pageNumber = [];
    const totalPostsDivide = Math.ceil(totalPosts / postsPerPage)
    for(let i = 1; i <= totalPostsDivide; i++){
        pageNumber.push(i)
    }


    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumber.map((num,index)=>{
                        return(
                        <li key={index} className="page-item">
                            <a href="#" onClick={()=>paginate(num)} className="page-link">{num}</a>
                        </li>
                        )
                    })
                }
            </ul>    
        </nav>
    )
}
