import React from 'react'

function Card({ post, setSelectedPost }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {month: 'short',
                    day: 'numeric',
                    year: 'numeric'};
    return date.toLocaleString('defualt', options);
  }
  
  function handleClick(e) {
    setSelectedPost(post);
  }

  return (
    <div className="card">
      <div className="card-img-container" onClick={handleClick}>
          <img className="card-img" src={post.thumbnail.small} alt={post.title} />
      </div>
      <div className="card-body">
          <div className="bullets-container">
              <span className="bullet bullet--primary"></span>
              <span className="bullet bullet--secondary"></span>
          </div>
          <div className="card-title" onClick={handleClick}> {post.title} </div>
          <div className="card-text"> {post.content} </div>
          <div className="card-footer">
              <div className="card-user"> {post.author.name + ' - ' + post.author.role} </div>  
              <div className="card-date"> {formatDate(post.date)} </div>
          </div>
      </div>
    </div>
  )
}

export default Card

