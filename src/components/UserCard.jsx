import { SlPresent } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import { VscTrash } from "react-icons/vsc";

function UserCard({user, openEdit, deleteUser}){
    return(
        <div className="card">
            <h3 className="card__name">{user?.first_name} {user?.last_name}</h3>
            <div className="card__info">
                <span>
                    <span><b>Mail:</b> {user?.email}</span>
                </span>
                <span>
                    <span><b>Birthday:</b> <SlPresent/> {user?.birthday}</span>
                </span>
            </div>
            <div className="card__btns">
                <button onClick={() => deleteUser(user?.id)}><VscTrash /></button>
                <button onClick={() => openEdit(user)}><SlNote/></button>
            </div>
        </div>
    )
}; 

export default UserCard;