import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"
export const Show = () => {

    const navigate = useNavigate()

    const { user, token } = useContext(AppContext)

    const [post, setPost] = useState(null);

    const[postUser, setPostUser] = useState(null)

    const { id } = useParams();
    

    async function getPost() {
        
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        console.log(data)
        if (res.ok) {
            setPost(data.post)
            setPostUser(data.user)
        }
    }

    async function handleDelete(e) {
        e.preventDefault();

        if (user && user.id === post.user_id) {
            const res = await fetch(`/api/posts/${id}`,{
                method:"delete",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                
            })
            
            const data = await res.json();
            if(res.ok){
                navigate("/")
            }
            
        }
        
        
    }
    
    useEffect(()=>{
        getPost()
    },[])
    return(
        <>
                
                {post ?
                
                        <div key={post.id} style={{width:"50%", border:"2px solid", borderRadius:"10px", margin:"auto", marginBottom:"20px"}}>
                            
                            <h2>{post.title}</h2>
                            
                            <div style={{width:"fit-content",border:"1px solid", borderRadius:"10px", margin:"auto",padding:"5px"}}>
                            <h6>by {postUser}</h6>
                            <h6>
                                {new Date(post.created_at).toLocaleDateString()}
                                .//. 
                                {new Date(post.created_at).toLocaleTimeString()}

                            </h6>
                            </div>
                            <p style={{width:"80%", margin:"auto", marginBottom:"20px", marginTop:"20px", color:"darkblue"}}>
                                {post.body}
                                </p>
                                
                            {user && user.id === post.user_id &&
                                <Link to={`/posts/update/${post.id}`}>Update</Link>}
                                <form onSubmit={handleDelete}>
                                    <button>Delete Post</button>
                                </form>
                        </div>
                    

                :
                    
                <h1>Post not found</h1>
            
                }
            </>
    )
}