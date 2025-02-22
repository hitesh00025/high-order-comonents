import logo from './logo.svg';
import './App.css';
import withLogger from "./withLogger";
import userProfile from './userProf';
const UsersWithData = withLogger(userProfile, "https://jsonplaceholder.typicode.com/users");


const EnhancedUserProfile = withLogger(userProfile);

function App() {
  return (
    <div>
      <h1>Users</h1>
      <UsersWithData />
    </div>
  );
}

export default App;
