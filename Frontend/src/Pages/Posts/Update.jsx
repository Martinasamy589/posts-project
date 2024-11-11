import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export const Update = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const { user, token } = useContext(AppContext)

    const [formData, setFormData] = useState({
        title:"",
        body:"",
    })

    async function getPost() {

        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setFormData({
                title: data.post.title,
                body:data.post.body
           })
        }
        if (user.id !== data.post.user_id) {
            navigate("/")
        }
        
    }

    async function handleUpdate(e) {
        e.preventDefault();
        
        const res = await fetch(`/api/posts/${id}`,{
            method:"put",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData),
        })
        
        const data = await res.json();

        console.log(data);
        
        if(data.errors){
            setErrors(data.errors)
        }else{
            navigate("/")
        }
    }

    useEffect(()=>{
        getPost()
    },[])

    return(
        <>
            <form onSubmit={handleUpdate}>
                <h1 style={{textAlign:"center"}}>Update a Post</h1>
                <div>
                    <input type="text" placeholder="Post Title..." value={formData.title} onChange={(e)=>setFormData({...formData, title: e.target.value})} />

                    {errors.title && <p style={{color:'red'}}>{errors.title[0]}</p>}
                </div>
                <div>
                    <textarea rows="6" placeholder="Post Content..." value={formData.body} onChange={(e)=>setFormData({...formData, body: e.target.value})} ></textarea>
                
                    {errors.body && <p style={{color:'red'}}>{errors.body[0]}</p>}
                </div>
                <button>Update</button>
            </form>
        </>
    )
}