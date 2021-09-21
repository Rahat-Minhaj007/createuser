import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import UserDataTable from "../UserDataTable/UserDataTable";

import './UserTable.css';



const UserTable = ({ setEditData }) => {
  const { state, dispatch } = useContext(UserContext);
  const { userList } = state;

  return (
    <div className="pb-5">
      <div>
        <div className="table-responsive">
          <table className="table table-dark  table-striped">
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
                userList?.map((data, index) => <UserDataTable data={data} index={index} setEditData={setEditData} key={data?.id}></UserDataTable>)
              }
            </tbody>
          </table>

        </div>
        <div className="d-flex justify-content-end">

          <div>
            <h6>Showing 4 out of {state.userList.length}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTable;
