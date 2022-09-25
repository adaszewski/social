import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            
            <div className="avatar">
                <img src={props.post.user.avatar_url} alt="{props.post.user.username}"></img>
            </div>

            <div className="user">
                {props.post.user.username}
            </div>

            <div className="content">
                <p>
                    {props.post.content}
                </p>
            </div>
        </div>
    
       
    )
}

export default Post;
