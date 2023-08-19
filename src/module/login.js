import axios from "axios"
import { useState } from "react"

function Login({setMessage,setUserAuth}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/login', { 
                username, password 
            }).then(({ data }) => {
                console.log("login response",data)
                if (data?.token) {
                    setMessage("success","Login Successfully")
                    setUserAuth(true,data?.token)
                } else {
                    setMessage("error",data?.message ?? "SomeThing Went Wrong")
                }
            })
            console.log("handleSubmit")
        }
        catch (error) {
            console.error(error)
            setMessage("error",error?.response?.data?.message ?? "SomeThing Went Wrong")
        }
    }
    return (
        <div className="container col-md-4">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="username">UserName:</label>
                    <input type="text" className="form-control"
                        placeholder="Enter UserName" id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control"
                        placeholder="Enter password" id="pwd"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login