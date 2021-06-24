import React from 'react';
import '../style/User.css';
import { useStateValue } from './StateProvider';
import Button from '@material-ui/core/Button';
import {useHistory } from 'react-router-dom';

function UserProfile() {
  const divStyle = {
    marginTop: '97px'
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  
  return (
      <div style={divStyle} className="containerr">
        <form>
          <div className="row">
            <h1 className="head">User Profile</h1>
            <div className="input-group input-group-icon">
              <input defaultValue={user.name} type="text" disabled/>
              <div className="input-icon">👤</div>
            </div>
            <div className="input-group input-group-icon">
              <input defaultValue={user.email} type="email" disabled/>
              <div className="input-icon">💬</div>
            </div>
            <div className="input-group input-group-icon">
              <input defaultValue={user.phoneNo} type="text" disabled/>
              <div className="input-icon">📞</div>
            </div>
          </div>
          <div className="row">
          
            <div className="col-half">
              <h4>Role</h4>

              <div className="input-group">
                <input id="hostel-owner" type="radio" name="role" value="hostelOwner" checked={user.role === 'hostelOwner' ? true: false}/>
                <label for="hostel-owner">Owner</label>
                <input id="visitor" type="radio" name="role" value="visitor" checked={user.role === 'visitor' ? true: false}/>
                <label for="visitor">Visitor</label>
              </div>

              <Button variant="contained" color="primary" onClick={() => history.push('/Bookmark')}>My Bookmarks</Button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default UserProfile;