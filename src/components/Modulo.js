import React from 'react'


function Modulo({post, setSelectedPost}) {
  function handleCloseModulo(e) {
    setSelectedPost(null);
  }

  return (
    <div className="modal">
      <div className="backdrop">
        <div className="modal-content">
          <div className="modal-bar">
            <i className="fas fa-times" onClick={handleCloseModulo}></i>
          </div>
          <div className="modal-img-container">
            <img className="modal-img" src={post.thumbnail.large} alt={post.title} />
          </div>
          <div className="modal-body">
            <div className="modal-title"> {post.title} </div>
            <div className="modal-text"> {post.content} </div>
            <div className="modal-user-container">
              <div className="modal-user-img-container">
                <img className="modal-user-img" src={post.author.avatar} alt={post.author.name} />
              </div>
              <div className="modal-user"> {post.author.name + ' - ' + post.author.role} </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Modulo

