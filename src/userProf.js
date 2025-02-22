const userProfile = ({ data }) => {
    console.log(userProfile)
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };
  
export default userProfile;