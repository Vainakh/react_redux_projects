
const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="data">
                        Today at 6:00pm
                    </span>
                </div>
                <div className="text">Wow...nice post!</div>
            </div>
        </div>
    )
};