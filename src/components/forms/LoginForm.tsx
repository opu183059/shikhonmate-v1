import { Button, Checkbox, CheckboxProps, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import logo from "../../../public/Logo.png";
import { TUser } from "../../types/user.type";

const LoginForm = () => {
  const [login, { error, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(error);

  const onFinish = async (values: { email: string; password: string }) => {
    const toster = message.loading("Loging in...", 0);
    try {
      const response = await login(values).unwrap();
      console.log(response);

      const decodedUser = jwtDecode(response.data.token) as TUser;
      dispatch(
        setUser({
          user: decodedUser,
          token: response.data.token,
        })
      );
      if (response.success) {
        toster();
        message.success(response.message);
        navigate(`/${decodedUser?.userRole}`, { replace: true });
        // navigate(`${decodedUser?.userRole}`, { replace: true });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toster();
      message.error(err?.data?.message as string);
    }
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
      className="md:w-1/2"
    >
      <div className="flex justify-center mb-4">
        <img src={logo} />
      </div>
      <Form.Item
        hasFeedback
        name="email"
        rules={[
          { type: "email" },
          { required: true, message: "Please input your Email!" },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          size="large"
        />
      </Form.Item>
      <div className="flex justify-between mb-4">
        <Checkbox onChange={onChange}>Remember Me.</Checkbox>
        <p>Forgot Password?</p>
      </div>
      <Form.Item className="text-primary">
        <Button
          block
          disabled={isLoading}
          type="primary"
          htmlType="submit"
          size="large"
          className="btn1 uppercase"
        >
          {isLoading ? "Loging..." : "Log in"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
