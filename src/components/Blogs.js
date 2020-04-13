import React from 'react'
import {searchIt} from '../services/search.js'
import BlogItem from './BlogItem.js'

export default function Blogs({blogs,searchTerm,onDelete,getBlogId}) {
   return (
      <div>
         {blogs.filter(searchIt(searchTerm)).map((blog)=>{
               return(
                  <BlogItem
                  key={blog.objectId}
                  blog={blog}
                  onDelete={onDelete}
                  getBlogId={getBlogId}
                  />
               )
            })}
      </div>
   )
}
