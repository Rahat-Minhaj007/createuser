import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './AddUser.css';
import { randomId } from '../../Utilities/Utilities';
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';

const AddUser = ({ editData, setEditData }) => {

  const { register, handleSubmit, errors } = useForm();
  const { state, dispatch } = useContext(UserContext);
  const onSubmit = (data, e) => {

    const userData = {
      id: randomId(),
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password

    };





    if (editData.update !== true) {
      dispatch({
        type: 'ADD_USER',
        payload: userData
      })

      e.target.reset();
    } else if (editData.update === true) {
      dispatch({
        type: 'UPDATE',
        payload: { ...userData, id: editData.id }
      })
      setEditData({});
      e.target.reset();
    }

  };
  return (
    <div>

      <form className="mt-5 user addBook" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center pb-2"><FontAwesomeIcon icon={faUsers} /> User Management</h2>
        <div className="user-input-field">

          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            ref={register({ required: true })}
            defaultValue={`${editData.update ? editData.firstName : ""}`}

          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>


        <div className="user-input-field">

          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            ref={register({ required: true })}
            defaultValue={`${editData.update ? editData.lastName : ""}`}
          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>

        <div className="user-input-field">

          <input
            name="userName"
            type="text"
            placeholder="User Name"
            ref={register({ required: true })}
            defaultValue={`${editData.update ? editData.userName : ""}`}
          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>

        <div className="user-input-field">

          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
            defaultValue={`${editData.update ? editData.email : ""}`}
          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>

        <div className="user-input-field">

          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={register({ required: true, maxLength: 6 })}
            defaultValue={`${editData.update ? editData.password : ""}`}


          />
          {errors.name && <span style={{ color: "red" }}>This field is required</span>}
        </div>

        <button className="userBtn">{`${editData.update ? "UPDATE" : "CREATE USER"}`}</button>
      </form>

    </div>
  )
}

export default AddUser;
