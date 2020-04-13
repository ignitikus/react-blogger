import React from 'react'

export default function Search({handleChange, searchTerm}) {
   return (
      <div>
         <form className='ui form'>
				<div className="field">
					<input 
						onChange={handleChange} 
						type="text" 
						placeholder='Search by subject'
						value={searchTerm}
						/>
				</div>
			</form>
      </div>
   )
}
