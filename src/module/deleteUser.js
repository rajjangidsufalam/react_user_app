import {AiTwotoneDelete} from "react-icons/ai"

function DeleteUser({item,index}) {
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
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default DeleteUser