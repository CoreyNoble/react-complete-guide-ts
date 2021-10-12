import './UserList.css'

const UserList = (props) => {
  const list = props.users.map((user) =>
    <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>
  )
  
  return (
    <ul className="UserList">
      {list}
    </ul>
  )
}

export default UserList