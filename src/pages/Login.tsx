import { useForm } from "react-hook-form";
import { fetchUserData, selectIsAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { Navigate } from "react-router-dom";
export type LoginFormInputs = {
  email: string;
  password: string;
};
const Login: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
  const onSubmit = async (values: LoginFormInputs) => {
    const data = await dispatch(fetchUserData(values));
    if (!data.payload) {
      return alert("Invalid email or password!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 data-testid='login-page'>Login</h1>
      <div className="form__block">
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className={errors?.email ? "input__error" : "form__input"}
        />
        {errors?.email && <p className="form__error">{errors.email.message}</p>}
      </div>
      <div className="form__block">
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className={errors?.password ? "input__error" : "form__input"}
        />
        {errors?.password && (
          <p className="form__error">{errors.password.message}</p>
        )}
      </div>
      <button className="button button--login" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
