import axios from "axios"
import { useEffect } from "react"


function User() {

    const getUser = async () => {
        let response = await axios.get('http://localhost:3001/api/users')
        console.log("response====",response)
    }

    useEffect(()=>{
        getUser()
    },[])

    return <div className="container col-md-8 mt-3">
        <table class="table">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default User

