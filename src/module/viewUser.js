import {FaEye} from "react-icons/fa"

function ViewUser({item,index}) {
    return (
    <>
        <button type="button" className="btn btn-warning" data-toggle="modal" 
            data-target={`#ViewUserModal${index}`}
        >
            <FaEye/>
        </button>
        <div className="modal" id={`ViewUserModal${index}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">View User</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Id: {item?.id}</p>
                        <p>Username: {item?.username}</p>
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

export default ViewUser