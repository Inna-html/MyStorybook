import { useEffect, useState } from "react";
import { Posts } from "./Posts";

// import './Post.stories';

const Post = ({ backgroundColor }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(res => setPosts(res))
    }, []);

    return (
        <div style={{backgroundColor}}>
            {posts.map(posts => <Posts key={posts.id} posts={posts} />)}
        </div>
    )
}

export { Post };
