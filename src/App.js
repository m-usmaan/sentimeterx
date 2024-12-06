import "./App.css";
import Root from "components/root";
import Login from "components/login";
import { isUserLoggedIn } from "utils";

function App() {
  return <div className="App">{isUserLoggedIn() ? <Root /> : <Login />}</div>;
}

export default App;
