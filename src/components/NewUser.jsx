import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "semantic-ui-react";


export default function NewUser({ setLoggedInUser }) {

    const navigate = useNavigate()

    //states used for the form
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("")


    //handles creating a new user when the from is submitted
    function handleCreateAcount(){
        const newUser = {
            name: nameInput,
            email: emailInput,
            password: passwordInput,
            password_confirmation: confirmPasswordInput
        }
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then ((r) => {
            if (r.ok) {
                r.json().then ((user) => setLoggedInUser(user))
                navigate("/")
            }
        })
    }


    return(
        <div className="login-background">
        <div className="form-container">
            <Form className="create-account-form" onSubmit={(e) => {
                e.preventDefault()
                handleCreateAcount()
            }}>
            <h3>Create Account</h3> 
            <Form.Input className="input-form" fluid placeholder="Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
            <Form.Input className="input-form" fluid placeholder="Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
            <Form.Input className="input-form" fluid type="password" value={passwordInput} placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)}/>
            <Form.Input className="input-form" fluid type="password" value={confirmPasswordInput} placeholder="Confirm Password" onChange={(e) => setConfirmPasswordInput(e.target.value)}/>
            <div className="login-btns">
                <Form.Button class="form-buttons" type="submit">Create Acount</Form.Button>
                <button class="form-buttons" onClick={() => navigate('/login')}>Back</button>
            </div>
            <br/>
            </Form> 
        </div>        

        </div>
    )
}


