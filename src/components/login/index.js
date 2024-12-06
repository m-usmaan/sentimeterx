import { Button, Form, Input } from "antd";
import React from "react";

import LoginContainer from "./styles";
import { loginUser } from "features/users/apis";
import { toast } from "react-toastify";
import { storeToken } from "utils";

const Login = () => {
  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        storeToken(response.data.token); // TODO: Also manage token expiry
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 400) toast.error("Invalid Credentials"); // TODO: Return proper message & 401 from backend
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
        <h1>Login</h1>
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
