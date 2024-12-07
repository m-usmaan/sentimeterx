import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./App.css";
import Root from "components/root";
import { LOGIN_URL } from "constants/urls";
import { getToken } from "utils";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (isLoggedIn && getToken()) {
    return (
      <div className="App">
        <Root />
      </div>
    );
  } else {
    return <Navigate to={LOGIN_URL} />;
  }
}

export default App;
