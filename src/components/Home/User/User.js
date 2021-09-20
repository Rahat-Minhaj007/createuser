import React, { useState } from 'react';
import Navigation from '../../Shared/Nav/Navigation';
import UserTable from '../../UserTable/UserTable';
import AddUser from '../AddUser/AddUser';
import './User.css';

import './User.css';

const User = () => {
  const [editData, setEditData] = useState({});
  console.log(editData);

  return (
    <div className="home">
      <>
        <Navigation />
      </>
      <div className="pt-2 container">

        <div className="d-flex justify-content-center">
          <AddUser editData={editData} setEditData={setEditData} />
        </div>

        <div className="pt-4 text-center">
          <UserTable setEditData={setEditData} />
        </div>

      </div>


    </div>
  );
};

export default User;
