import axios from "axios"
import {AiTwotoneDelete} from "react-icons/ai"

function DeleteUser({item,index,setMessage,getUser}) {

    const removeUser = async () => {
        try{
            await axios.delete(`/users/${item.id}`).then(({data})=>{
                if(data?.message){
                    setMessage("success",data?.message)
                    getUser()
                }
                else{
                    setMessage("error",data?.message)
                }
                console.log("delete User",data)
            })
        }catch(error){
            console.error(error)
            setMessage("error",error?.response?.data?.message ?? "SomeThing Went Wrong")
        }
    }

    return (
    <>
        <button type="button" className="btn btn-danger ml-2" data-toggle="modal" 
            data-target={`#DeleteUserModal${index}`}
        >
            <AiTwotoneDelete/>
        </button>
        <div className="modal" id={`DeleteUserModal${index}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Delete User</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete this item?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" 
                          onClick={()=>{removeUser()}}
                        >
                            Delete
                        </button>
                        <button type="button" className="btn btn-primary" 
                            data-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default DeleteUser