import './App.css';
import { useState } from 'react';
import UserData from './Components/UserData';
import UserList from './Components/UserList';

function App() {

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    window.scrollTo(0,0);
  };

  return (
    <div className='App'>
      <div className="container">
        <div className='row'>
          <div className='col-lg-4 col-sm-4'>
            <div className='sidebar'>
              <UserList onSelectUser={handleSelectUser} />
            </div>
          </div>
          <div className='col-lg-8 col-sm-12 userData'>
            <UserData selectedUser={selectedUser} />
          </div>
        </div >
      </div>
    </div>
  );
}

export default App;
