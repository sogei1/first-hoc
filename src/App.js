import './App.css';
import SearchTodos from './TodoListHOC';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <SearchTodos></SearchTodos>
    </div>
  );
}

export default App;
