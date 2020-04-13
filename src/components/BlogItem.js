import React from 'react'
import Button from './Button.js'

export default function BlogItem({blog:{objectId, title, author,subject,article},onDelete, getBlogId}) {
   return (
      <div 
         className="ui card" 
         style={{width:"100%", padding:'20px', backgroundColor: 'slategrey'}}>
         <div className="content">
            <div className="header">{title}</div>
            <br/>
            <div className="meta">Author: {author}</div>
            <div className="meta">Subject: {subject}</div>
            <hr/>
            <div className="description">{article}</div>
            <Button 
               className='ui primary button' 
               style={{margin: '10px 15px'}} 
               onClick={() => { return onDelete(objectId)
            }}>
               Delete
            </Button>
            <Button 
               className='ui green button' 
               style={{margin: '10px 15px'}} 
               onClick={() => { return getBlogId(objectId)
            }}>
               Update
            </Button>
         </div>
      </div>
   )
}
