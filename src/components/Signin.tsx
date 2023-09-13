import { z } from "zod";
import { isAuth } from "../store/NoteSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email()
    .min(5)
    .endsWith("com", { message: "Only .com domains allowed" }),
  password: z.string().min(8).max(16),
});
type FormType = z.infer<typeof schema>;

const Signin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });
  const state = useAppSelector((state) => state.note);
  return (
    <>
      <h1>Sign {state.isAuth?"out":"in"}</h1>

      {!state.isAuth ? (
        <form
          onSubmit={handleSubmit((data) => {
            dispatch(isAuth(!state.isAuth));
            alert(JSON.stringify(data));
          })}
        >
          {" "}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              id="email"
              {...register("email")}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>{" "}
          <input
           
            type="submit"
            value="Sign in"
            className="btn btn-primary"
          />{" "}
        </form>
      ) : (
        <button
          onClick={() => {
            dispatch(isAuth(!state.isAuth));
          }}
          type="submit"
          className="btn btn-danger"
        >
          Sign out{" "}
        </button>
      )}
    </>
  );
};

export default Signin;
