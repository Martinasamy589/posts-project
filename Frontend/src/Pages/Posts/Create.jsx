import { useContext, useState } from "react"
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export const Create = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const {token} = useContext(AppContext)

    const [formData, setFormData] = useState({
        title:"",
        body:"",
    })

    async function handleCreate(e) {
        e.preventDefault();
        
        const res = await fetch('/api/posts',{
            method:"post",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData),
        })
        
        const data = await res.json();

        if(data.errors){
            setErrors(data.errors)
        }else{
            navigate("/")
        }
    }

    return(
        <>
            <form onSubmit={handleCreate}>
                <h1 style={{textAlign:"center"}}>Create a Post</h1>
                <div>
                    <input type="text" placeholder="Post Title..." value={formData.title} onChange={(e)=>setFormData({...formData, title: e.target.value})} />

                    {errors.title && <p style={{color:'red'}}>{errors.title[0]}</p>}
                </div>
                <div>
                    <textarea rows="6" placeholder="Post Content..." value={formData.body} onChange={(e)=>setFormData({...formData, body: e.target.value})} ></textarea>
                
                    {errors.body && <p style={{color:'red'}}>{errors.body[0]}</p>}
                </div>
                <button>Post</button>
            </form>
        </>
    )
}