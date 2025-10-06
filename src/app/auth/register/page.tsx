// Lab 3
import { useForm } from "react-hook-form";

interface PostFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {

 const { register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<PostFormData>();

    return (
        <main>
            <h1> Register </h1>
            <fieldset>
                <label>Username</label>
                <input type="username"></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="password"></input>
            </fieldset>
            <fieldset>
                <label>Confirm</label>
                <input type="password"></input>
            </fieldset>
            <button>Register</button>
        </main>
    )
}