import { useState } from 'react'

import Form from './components/Form/Form'
import Card from './components/UI/Card/Card'
import UserList from './components/UserList/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const addUser = (userData) => {
    const newUser = {
      id: Math.random(),
      name: userData.name,
      age: userData.age
    }

    setUserList([
      ...userList,
      newUser
    ])
  }

  return (
    <div>
      <Card>
        <Form addUser={addUser} />
      </Card>
      {userList.length && (
        <Card>
          <UserList users={userList} />
        </Card>
      )}
    </div>
  );
}

export default App;
