import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Provider/AuthProvider"
import Swal from "sweetalert2"
import { updateProfile } from "firebase/auth"
import { auth } from "../../../firebase.config"

const Register = () => {

    const { createUser, Logout } = useContext(AuthContext)
    const naviget = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: "Account successfully register!",
                    text: "Your account successfully register please login!",
                    icon: "success"
                });
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                console.log(user)
                Logout()
                naviget('/login')
            })
            .catch(error => {
                Swal.fire({
                    title: "Account not successfully register!",
                    text: error.message,
                    icon: "error"
                });
            })
    }


    return (
        <div className="w-11/12 md:w-3/4 mx-auto md:mt-4 mt-6">
            <div className="flex flex-col-reverse md:flex-row justify-center border-2 border-[#61C5B3]">
                <div>
                    <img src="https://raw.githubusercontent.com/0rakib0/OnlineStor-Ecom-Client/main/src/assets/bgImage.png" style={{ height: '30rem' }} alt="" />
                </div>
                <div className="md:w-6/12 mx-auto p-4">
                    <form onSubmit={handleRegister}>
                        <h4 className="text-center text-2xl font-semibold">Register Account</h4>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="Full name" name="name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mt-6 pb-6">
                            <input type="submit" value='Register' className="input input-bordered w-full bg-[#61C5B3] text-white hover:border-2 hover:border-[#61C5B3] hover:text-[#61C5B3] hover:bg-transparent duration-200" />
                        </label>
                        <p>Already Have Account? <Link className="text-blue-400 pb-4" to='/login'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register