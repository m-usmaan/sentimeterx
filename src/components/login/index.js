import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import LoginContainer from "components/Login/styles";
import { HOME_URL } from "constants/urls";
import { loginUser } from "features/users/apis";
import { login } from "features/users/userSlice";
import { toast } from "react-toastify";
import { getToken, removeToken, setToken } from "utils";

const Login = () => {
  removeToken();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoggedIn && getToken()) {
    return <Navigate to={HOME_URL} replace />;
  }

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setToken(response.data.token); // TODO: Also manage token expiry
        dispatch(login(response.data.user));
        navigate(HOME_URL);
      })
      .catch((error) => {
        if (error.response.status === 400) toast.error("Invalid Credentials");
        // TODO: Return proper message & 401 from backend
        else
          toast.error(`${error.response.status}: ${error.response.statusText}`);
      });
  };

  return (
    <LoginContainer>
      <Form
        onFinish={handleSubmit}
        name="basic"
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: "25%",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <h1>Let's Sign You In !</h1>
        <br />
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};

export default Login;
