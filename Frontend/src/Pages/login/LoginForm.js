import React, {useState} from 'react'
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function LoginForm() {

// created a state having two variables initially empty
const [email, setemail] = useState('')
const [password, setpassword] = useState('')

// using useNavigate() hook from react-router-dom
    const navigate = useNavigate()


// on submit of the form we call this function to communicate with the backend to verify the Email & Password fields
    async function handleSubmit(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/",{email, password})
            .then(res => {
                if(res.data == "Exist"){
                    navigate("/adminControl")
                }
                else if(res.data == "Not Exist"){
                    alert("User not signed up")
                } 
            })
            .catch(event => {
                alert("wrong data"),
                console.log(e)
            })

        }
        catch(event){
            console.log(event)
        }
        
    }


    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Outcome Based Education<br/></h2>
                    <p>Empowering students for success through measurable outcomes.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        {/* for some weird reason the handleSubmit function doesn't work! Need to work on that*/}
                        <form action = "POST">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="XYZ@gmail.com" onChange={(e) => setemail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                            </div>
                            <div className="my-2">
                            <button type="submit" onClick={handleSubmit} className="btn btn-success mx-1">Submit</button>
                            <button type="submit" onClick = {() => {navigate("/signup")}}className="btn btn-primary" link to = '/signup'>Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm