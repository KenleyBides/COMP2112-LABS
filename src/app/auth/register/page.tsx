// Lab 3
'use client'
import { useForm } from "react-hook-form";

interface PostFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {

 const { register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<PostFormData>();

 const onSubmit = (data: PostFormData) => {
    console.log("Success:", data);
 }
    return (
        <main>
            <h1> Register </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Username</label>
                <input type="text" {...register("username", {required: "Username is required"})}/>
                {errors.username && <p>{errors.username.message}</p>}
            </fieldset>

            <fieldset>
                <label>Password</label>
                <input type="password" {...register("password", {required: "Password is required"})}/>
                {errors.password && <p>{errors.password.message}</p>}
            </fieldset>

            <fieldset>
                <label>Confirm</label>
                <input type="password" {...register("confirm", { required: "Please confirm your password", validate: (value, formValues) =>
                value === formValues.password || "Passwords do not match",
            })}
          />
                {errors.confirm && <p>{errors.confirm.message}</p>}
            </fieldset>

            <button type="submit">Register</button>
            </form>
            {isSubmitSuccessful && <p>Registration successful</p>}
        </main>
    )
}