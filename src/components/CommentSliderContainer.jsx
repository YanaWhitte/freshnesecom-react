import CommentCard from "./Cards/CommentCard"

const CommentSliderContainer = () => {
  return <section className="comment-section">
    <div className="section-title-row container row">
      <p className="section-title title">Our customers says</p>
      <div className="section-btn button-right row">
        <a href="#">Button</a>
        <img src="icons/arrow-green-right.svg" alt="icon" />
      </div>
    </div>
    <div className="comment-row row">
      <div className="left-gradient gradient" />
      <div className="right-gradient gradient" />
      <div className="arrow-left flip">
        <img src="icons/flip-left.svg" alt="left" />
      </div>
      {[
        "img/comment-avatar-1.png",
        "img/comment-avatar-2.png",
        "img/comment-avatar-3.png",
        "img/comment-avatar-4.png",
      ].map(avatar => <CommentCard key={avatar} avatar={avatar} />)}
      <div className="arrow-right flip">
        <img src="icons/flip-right.svg" alt="right" />
      </div>
    </div>
  </section>
}

export default CommentSliderContainer;