import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Register() {

  const {setToken} = useContext(AppContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const [errors, setErrors] = useState({});

  async function handleRegister(e) {
    e.preventDefault(); 

    

    const res = await fetch("/api/register",{
        method: "post",
        body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
    } else {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate("/");
      console.log(data);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister} action="">
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        {errors.name && <p style={{color:'red'}}>{errors.name[0]}</p>}
        <br />
        <label>Email:</label>
        <br />
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        {errors.email && <p style={{color:'red'}}>{errors.email[0]}</p>}
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}        
          />
          {errors.password && <p style={{color:'red'}}>{errors.password[0]}</p>}
        <br />
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          value={formData.password_confirmation}
          onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}        
          />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}
