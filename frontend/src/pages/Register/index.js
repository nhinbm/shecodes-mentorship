import React, { useEffect } from "react";
import { Button, Form, Input, Typography, Col, Row, notification } from "antd";
import { RegisterBackground, RegisterContainer } from "./styles";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { AuthServices } from "@services/auth.service";
import * as Yup from "yup";

const registerValidation = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too weak")
    .required("Password is required"),
  confirm: Yup.string().required("Password confirmation is required"),
  fullName: Yup.string().required("Full name is required"),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
      fullName: "",
    },
    validationSchema: registerValidation,
    validateOnChange: false,
    onSubmit: async (newValue) => {
      if (newValue.password !== newValue.confirm) {
        return notification.error({
          message: "Password confirmation is not matched with password",
        });
      }
      try {
        const { data } = await AuthServices.register(newValue);
        notification.success({
          message: "Register new account successfully",
        });
        window.location.href = "/login";
      } catch (error) {
        notification.error({
          message:
            error?.response?.data?.message ||
            "Failed to register, please try again",
        });
      }
    },
  });

  const { values, handleChange, errors, submitForm } = formik;

  useEffect(() => {
    const errorArr = Object.values(errors);
    if (errorArr.length > 0) {
      errorArr.map((e) => notification.error({ message: e }));
    }
  }, [errors]);

  return (
    <RegisterBackground>
      <RegisterContainer>
        <Form layout="vertical">
          <Typography.Title>Đăng ký</Typography.Title>
          <Form.Item label="Họ tên" required tooltip="This is a required field">
            <Input
              name="fullName"
              aria-label="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Email" required tooltip="This is a required field">
            <Input
              name="email"
              value={values.email}
              aria-label="email"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            required
            tooltip="This is a required field"
          >
            <Input
              name="password"
              type="password"
              aria-label="password"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            required
            tooltip="This is a required field"
          >
            <Input
              name="confirm"
              type="password"
              aria-label="confirm"
              value={values.confirm}
              onChange={handleChange}
            />
          </Form.Item>
          <Row>
            <Col flex={1}>
              <Link to="/login">
                <Button size="large" type="link">
                  Đăng nhập
                </Button>
              </Link>
            </Col>
            <Col flex={1}>
              <Form.Item style={{ float: "right" }}>
                <Button size="large" type="primary" onClick={submitForm}>
                  Đăng ký
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </RegisterContainer>
    </RegisterBackground>
  );
};

export default Register;
