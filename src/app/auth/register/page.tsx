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
            <form>
            <fieldset onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input type="text"{...register("username", {required: "Username is required"})}/>
                {errors.username && <p>{errors.username.message}</p>}
            </fieldset>

            <fieldset>
                <label>Password</label>
                <input type="password"{...register("password", {required: "Password is required"})}/>
                {errors.password && <p>{errors.password.message}</p>}
            </fieldset>

            <fieldset>
                <label>Confirm</label>
                <input type="password"{...register("password", {required: "Password is required"})}/>
                {errors.password && <p>{errors.password.message}</p>}
            </fieldset>

            <button>Register</button>
            </form>
        </main>
    )
}