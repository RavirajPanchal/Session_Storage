import React, { useRef} from "react";
import Home from "./home";
import './Login.css';


function Login(){
    const email=useRef()
    const password=useRef()
    const getEmail=sessionStorage.getItem("emailData")
    const getPassword=sessionStorage.getItem("passwordData")
    

    const handleSubmit=()=>{
        if(email.current.value=="ravi@gmail.com" && password.current.value=="123"){
            sessionStorage.setItem("emailData","ravi@gmail.com")
            sessionStorage.setItem("passwordData","123")
        }
    }

    return(
        <div>
            {
                getEmail&&getPassword?
                <Home/>:
            <form onSubmit={handleSubmit}>
        <div className="form-group">
        &nbsp; <label>Email</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   
            <input type="text" className="form-control" ref={email}/>
        </div><br/>
        <div className="form-group">
            <label>Password</label> &nbsp; &nbsp; &nbsp; &nbsp; 
            <input type="password" className="form-control" ref={password} />
        </div>
        <br/>

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button>Login</button>
            </form>
}
        </div>
    );

       
}
export default Login;

