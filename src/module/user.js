import axios from "axios"
import { useEffect, useState } from "react"
import ViewUser from "./viewUser"
import DeleteUser from "./deleteUser"

function User({setMessage}) {

    const [data, setData] = useState([])

    const getUser = async () => {
        try {
            let response = await axios.get('/users')
            if (response?.data) {
                setData(response?.data ?? [])
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    console.log(data, "data")

    useEffect(() => {
        getUser()
    }, [])

    return <div className="container col-md-8 mt-3">
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>
                            <ViewUser item={item} index={index}/>
                            <DeleteUser item={item} index={index} setMessage={setMessage} getUser={getUser}/>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default User

