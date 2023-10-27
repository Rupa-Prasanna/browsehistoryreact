import {Component} from 'react'

import './index.css'

const BrowseItem = props => {
  const {eachList, key} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachList

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="listItem">
        <div className="listItem">
          <p> {timeAccessed}</p>
          <img src={logoUrl} alt="app logo" className="image" />
          <p className="name">
            {' '}
            {title} <span className="span"> {domainUrl} </span>
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="image"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}
class BrowseHistory extends Component {
  state = {searchValue: '', browseList: 'initialHistoryList'}

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  deleteItem = id => {
    const {browseList} = this.state
    const updatedBrowseList = browseList.filter(eachItem => eachItem.id !== id)
    this.setState({browseList: updatedBrowseList})
  }

  render() {
    const {initialHistoryList} = this.props
    const {browseList} = this.state
    const {searchValue} = this.state

    const searchResults = browseList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div>
        <input type="search" className="input" onChange={this.onChangeSearch} />
        <ul>
          {searchResults.map(eachList => (
            <BrowseItem
              eachList={eachList}
              key={eachList.id}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowseHistory
