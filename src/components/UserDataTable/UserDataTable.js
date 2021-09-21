import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";

const UserDataTable = ({ data, index, setEditData }) => {
  const [passVisible, setPassVisible] = useState(false);
  const [clickedPass, setClickedPass] = useState(null);
  const { state, dispatch } = useContext(UserContext);

  const handleDelete = (id) => {

    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }
  const handleEditData = (data) => {
    setEditData({ ...data, update: true });

  }
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{data?.firstName}</td>
        <td>{data?.lastName}</td>
        <td>{data?.userName}</td>
        <td>{data?.email}</td>
        <td className='password-field'>
          {<input value={data?.password} type={`${passVisible ? "text" : "password"}`} />} <FontAwesomeIcon
            style={{ cursor: "pointer", paddingTop: "5px", fontSize: "22px" }}
            icon={passVisible && clickedPass === data?.id ? faEyeSlash : faEye}

            onClick={() => {
              setPassVisible(!passVisible);
              setClickedPass(data.id)
            }}
          />
        </td>

        <td>

          <FontAwesomeIcon
            style={{ cursor: "pointer", fontSize: '32px' }}
            icon={faEdit}
            onClick={() => handleEditData(data)}
            className="pe-3 pt-2"
          />

          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faTrash}
            onClick={() => handleDelete(data?.id)}
          />
        </td>

      </tr>
    </>
  )
}

export default UserDataTable
