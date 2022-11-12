import React, { useState } from "react";

const SearchBar=({onSearchSubmit})=>{
	const [term,setTerm]=useState();

	const onInputChange = (e) => {
		e.preventDefault();
		//console.log(this.state.term)
		setTerm(e.target.value );
	};

	const onSubmit = (e) => {
		e.preventDefault();
		onSearchSubmit(term);
	};

	return (
			<div className="search-bar ui segment">
				<form
					onSubmit={onSubmit}
					className="ui form"
				>
					<div className="field">
						<label>Video Search</label>
						<input
							value={term}
							type="text"
							onChange={onInputChange}
						></input>
					</div>
				</form>
			</div>
		);

}

export default SearchBar;
