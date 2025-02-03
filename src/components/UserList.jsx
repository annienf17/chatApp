const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Active Users ({users.length})</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
