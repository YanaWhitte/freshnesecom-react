const CommentCard = (props) => {
  return <div className="comment-card column">
    <p className="comment-text">
      “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will
      get all what you need by writiing a text here “
    </p>
    <p className="comment-name">Name and Surname</p>
    <div className="img-container row"><img src={props.avatar} alt="comment avatar" className="comment-avatar" width={48} height={48} /></div>
  </div>
}

export default CommentCard;