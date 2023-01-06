import React from 'react'
import '../CSS/search.css'
import {MdSearch} from 'react-icons/md'
import PropTypes from 'prop-types'

const Search = ({setSearchText}) => {
  return (
    <div className="search">
      <MdSearch size="2em" className="md-search"/>
      <input
        type="text"
        onChange={e => setSearchText(e.target.value)}
        className="inp"
        placeholder="Search..."
      />
    </div>
  )
}

Search.propTypes = {
  setSearchText: PropTypes.func
}

export default Search