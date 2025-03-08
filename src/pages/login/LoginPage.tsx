import { Button, Checkbox, CheckboxProps, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/Logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    console.log(values);
    navigate("/dashboard", { replace: true });
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
            type="primary"
            htmlType="submit"
            size="large"
            className="btn1 uppercase"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
