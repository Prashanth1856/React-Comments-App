// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeComment, deleteComment} = props
  const {
    id,
    inputUsername,
    inputComment,
    postTime,
    like,
    initialClassName,
  } = commentDetails
  const firstLetter = inputUsername.slice(0, 1).toUpperCase()
  const sincePost = formatDistanceToNow(postTime)

  const likeTextClassName = like ? 'button active' : 'button'

  const likeImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onClickLike = () => {
    onLikeComment(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="display-comment-container">
      <div className="details-container">
        <div className={initialClassName}>
          <p>{firstLetter}</p>
        </div>
        <div>
          <div className="name-time-container">
            <h1 className="username">{inputUsername}</h1>
            <p className="post-time">{sincePost}</p>
          </div>
          <p className="comment">{inputComment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img
            src={like ? likedImg : likeImg}
            alt="like"
            className="like-icon"
          />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          testId="delete"
          className="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="h-line" />
    </li>
  )
}

export default CommentItem
