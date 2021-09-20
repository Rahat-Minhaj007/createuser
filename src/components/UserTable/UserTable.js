import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEyeSlash, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import AddUser from "../Home/AddUser/AddUser";

const UserTable = ({ setEditData }) => {
  const { state, dispatch } = useContext(UserContext);
  const { userList } = state;
  const [passVisible, setPassVisible] = useState(false);
  const [clickedPass, setClickedPass] = useState(null);

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
    <div className="pb-5">
      <div>
        <div className="table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr className="bg-dark" >
                <th className="text-light text-left" scope="col">ID</th>
                <th className="text-light" scope="col">First Name</th>
                <th className="text-light" scope="col">Last Name</th>
                <th className="text-light" scope="col">User Name</th>
                <th className="text-light" scope="col">Email</th>
                <th className="text-light" scope="col">Password</th>
                <th className="text-light" scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {
                userList?.map((data, index) =>

                  <tr>
                    <td>{index + 1}</td>
                    <td>{data?.firstName}</td>
                    <td>{data?.lastName}</td>
                    <td>{data?.userName}</td>
                    <td>{data?.email}</td>
                    <td>
                      {passVisible && clickedPass === data?.id ? data?.password : "******"} <FontAwesomeIcon
                        style={{ cursor: "pointer", paddingLeft: "10px", fontSize: "25px" }}
                        icon={passVisible && clickedPass === data?.id ? faEyeSlash : faEye}
                        onClick={() => {
                          setPassVisible(!passVisible);
                          setClickedPass(data.id)
                        }}
                      />
                    </td>

                    <td>

                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        icon={faEdit}
                        onClick={() => handleEditData(data)}
                      />

                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        icon={faTrash}
                        onClick={() => handleDelete(data?.id)}
                      />
                    </td>

                  </tr>
                )
              }
            </tbody>
          </table>

        </div>
        <div className="d-flex justify-content-between">
          {/* <div className="d-flex">
            <FontAwesomeIcon
              style={{ cursor: "pointer", paddingRight: "10px", fontSize: "35px" }}
              icon={faArrowAltCircleLeft}
              onClick={() => handlePrevious()}

            />
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            >
            </Pagination>

            <FontAwesomeIcon
              style={{ cursor: "pointer", paddingLeft: "10px", fontSize: "35px" }}
              icon={faArrowAltCircleRight}
              onClick={() => handleNext()}
            />
          </div> */}
          <div>
            <h6>Showing 4 out of {state.userList.length}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTable;
