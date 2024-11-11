import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Login() {

  const {setToken} = useContext(AppContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  async function handlelogin(e) {
    e.preventDefault(); 

    const res = await fetch("/api/login",{
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
      <h1>Login</h1>
      <form onSubmit={handlelogin} action="">
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
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
