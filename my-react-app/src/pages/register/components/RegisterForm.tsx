import { Form, useNavigate, Link } from "react-router-dom";
import { userRegisterForm } from "../hooks";
import _ from "lodash";

export const RegisterForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useRegisterForm();
  const navigate = useNavigate();

  return (
    <div className="p-4 w-full">
      <Form method="post" action="/signup">
        <div className="space-y-4">
          <div className={`form-control ${touched.fullName && errors.fullName ? "has-error" : ""}`}>
            <label className="mb-2 block">Full Name</label>
            <input
              id="fullName"
              required
              {...getFieldProps("fullName")}
              className="input input-bordered w-full"
            />
            {touched.fullName && errors.fullName && (
              <p className="text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className={`form-control ${touched.username && errors.username ? "has-error" : ""}`}>
            <label className="mb-2 block">Username</label>
            <input
              id="username"
              required
              {...getFieldProps("username")}
              className="input input-bordered w-full"
            />
            {touched.username && errors.username && (
              <p className="text-red-600 mt-1">{errors.username}</p>
            )}
          </div>
          <div className={`form-control ${touched.password && errors.password ? "has-error" : ""}`}>
            <label className="mb-2 block">Password</label>
            <input
              id="password"
              required
              type="password"
              autoComplete="on"
              {...getFieldProps("password")}
              className="input input-bordered w-full"
            />
            {touched.password && errors.password && (
              <p className="text-red-600 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!dirty || !isValid}
            >
              Register
            </button>
            <div className="flex gap-1">
              <span className="text-base">Already have an account?</span>
              <Link to="/login" className="text-blue-600">Sign In</Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
