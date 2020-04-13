import React, { Component } from 'react'
import Button from './Button.js'

export default class CreateBlog extends Component {
   constructor(){
      super()
      this.state = {
         blog: {
            title: '',
            subject: '',
            author: '',
            article: ''
         }
      }
   }

   handleChange = (event) => {
      const updatedBlog = {...this.state.blog}
      updatedBlog[event.target.name] = event.target.value
      this.setState({blog:updatedBlog})
   }

   handleSubmit = (event) => {
      event.preventDefault()
      const blog = { title: '', subject: '', author: '', article: ''}
      this.props.handleCreateBlogSubmit(event, this.state.blog)
      this.setState({blog})
      event.target.reset()
   }



   render() {
      return (
         <div style={{
            margin:'40px',
            width:'500px'
         }}>
            <form onSubmit={this.handleSubmit} className='ui form'>
               <div className="equal width fields">
                  <div className="field">
                  <label>Title</label>
                  <div className="ui fluid input">
                     <input 
                        type="text" 
                        placeholder='Title...' 
                        name='title' 
                        value={this.state.blog.title} 
                        onChange={this.handleChange}
                     />
                  </div>
                  </div>
               </div>
                  <div className="equal width fields">
                  <div className="field">
                  <label>Author</label>
                  <div className="ui fluid input">
                     <input 
                        type="text" 
                        placeholder='Author...' 
                        name='author' 
                        value={this.state.blog.author} 
                        onChange={this.handleChange}
                     />
                  </div>
                  </div>
               </div>
                  <div className="equal width fields">
                  <div className="field">
                  <label>Subject</label>
                  <div className="ui fluid input">
                     <input 
                        type="text" 
                        placeholder='Subject...' 
                        name='subject' 
                        value={this.state.blog.subject} 
                        onChange={this.handleChange}
                     />
                  </div>
                  </div>
               </div>
                  <div className="equal width fields">
                  <div className="field">
                  <label>Article</label>
                  <div className="ui fluid input">
                     <input 
                        type="text" 
                        placeholder='Article...' 
                        name='article' 
                        value={this.state.blog.article} 
                        onChange={this.handleChange}
                     />
                  </div>
                  </div>
               </div>
               <div className="field">
                  <Button type='submit' className='ui button'>Submit</Button>
               </div>
            </form>
         </div>
      )
   }
}
