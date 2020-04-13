import React, { Component } from 'react'
import blogs from '../data/data.js'
import Search from './Search'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'

export default class App extends Component {
	// state={ blogs }
	constructor(){
		super()
		this.state={
			blogs,
			searchTerm: ''
		}

		this.onDelete = this.onDelete.bind(this)
		
	}

	onDelete(id){
		const updatedBlogs = this.state.blogs.filter(({objectId})=>objectId !==id)
		this.setState({blogs:updatedBlogs})
	}

	handleChange = (event) => {
		this.setState({searchTerm: event.target.value.trim()})
	}

   handleCreateBlogSubmit = (event, blog) => {
      event.preventDefault()
      const blogs = [blog, ...this.state.blogs]
      this.setState({blogs})
   }

   getBlogId = (id) => {
      console.log(id)
   }
   
   

	render() {
		return (
			<div style={{
				marginTop:'100px', 
				display:'flex', 
				justifyContent:'center', 
				alignItems:'center', 
				flexDirection:'column'}}>
            <Search 
               handleChange={this.handleChange} 
               searchTerm={this.state.searchTerm}
            />
            <CreateBlog 
               handleCreateBlogSubmit={this.handleCreateBlogSubmit} 
            />
            <Blogs 
               blogs={this.state.blogs} 
               searchTerm={this.state.searchTerm}
               onDelete={this.onDelete}
               getBlogId={this.getBlogId}
            />
			</div>
		)
	}
}