import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Add_user, Remove_user, Update_user } from "./Configuration/actions";

function App() {
  const userList = useSelector((store) => store);
  const dispatch = useDispatch();

  const [EditedId, setEditedId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(Update_user({ EditedId, name, email }));
      setIsEditing(false)
    } else {
      dispatch(Add_user({ name, email }));
    }
    setName('')
    setEmail('')
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    const Updated = userList.find((item) => item.id === id);
    setName(Updated.name);
    setEmail(Updated.email);
    setEditedId(id);
  };

  return (
    <div className="App">
      <form>
        <input
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>

      <hr />
      <ul>
        {userList.map((item) => {
          return (
            <div key={item.id}>
              <li>
                id:{item.id} - name :{item.name} - email : {item.email}
              </li>
              <button onClick={() => dispatch(Remove_user(item.id))}>
                Delete
              </button>
              <button onClick={() => handleEdit(item.id)}>Update</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
