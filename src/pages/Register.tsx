import { useForm } from "react-hook-form";
import { fetchRegister,selectIsAuth } from "../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
export type RegisterFormInputs = {
  fullName: string;
  email: string;
  password: string;
};
const Register: React.FC = () => {
   const dispatch = useAppDispatch();
   const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors ,isValid},
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async(values: RegisterFormInputs) => {
   const data = await dispatch(fetchRegister(values));
   if (!data.payload) {
     return alert("Registration error");
   }
   if ("token" in data.payload) {
     window.localStorage.setItem("token", data.payload.token);
   }
    reset();
  };
  if (isAuth) {
   return <Navigate to="/" />;
 }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <div className="form__block">
        <label>Name</label>
        <input
          type="text"
          {...register("fullName", { required: "Name is required" })}
          className={errors?.fullName ? "input__error" : "form__input"}
        />
        {errors?.fullName && (
          <p className="form__error">{errors.fullName.message}</p>
        )}
      </div>
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
          {...register("password", { required: "Password is required" ,minLength:{value:5,message:'Password can\'t be less than 5 characters'}})}
          className={errors?.password ? "input__error" : "form__input"}
        />
        {errors?.password && (
          <p className="form__error">{errors.password.message}</p>
        )}
      </div>
      <button className="button button--login" type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
};

export default Register;
