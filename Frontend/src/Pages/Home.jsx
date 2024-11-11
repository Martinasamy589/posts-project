import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    const [posts, setPosts] = useState([]);

    
    async function getPosts() {

        const res = await fetch('/api/posts');
        const data = await res.json();
        if (res.ok) {
            setPosts(data)
        }
        console.log(data)
    }

    useEffect(()=>{
        getPosts();
    },[])

    return(
            <>
                <h1 className="h1">Latest Posts</h1>
                {posts.length > 0 ?
                
                    posts.map(post => 
                        <div key={post.id} style={{width:"50%", border:"2px solid", borderRadius:"10px", margin:"auto", marginBottom:"20px"}}>
                            
                            <h2>{post.title}</h2>
                            
                            <div style={{width:"fit-content",border:"1px solid", borderRadius:"10px", margin:"auto",padding:"5px"}}>
                            
                            <h6>by {post.user.name}</h6>
                            <h6>
                                {new Date(post.created_at).toLocaleDateString()}
                                .//. 
                                {new Date(post.created_at).toLocaleTimeString()}

                            </h6>
                            </div>
                            <p style={{width:"80%", margin:"auto", marginBottom:"20px", marginTop:"20px", color:"darkblue"}}>
                                {post.body}
                                </p>
                                <Link to={`/posts/${post.id}`}>
                                Read more
                                </Link>
                        </div>
                    )

                :
                    
                <h1>There are no posts</h1>
            
                }
            </>
        )
}