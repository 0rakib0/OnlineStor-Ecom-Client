import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Provider/AuthProvider"
import Swal from "sweetalert2"

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const naviget = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Account successfully Login!",
                    text: `${user.email} successfully register`,
                    icon: "success"
                });
                naviget('/')
            })
            .catch(error => {
                Swal.fire({
                    title: "Account not successfully Login!",
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
                    <form onSubmit={handleLogin}>
                        <h4 className="text-center text-2xl font-semibold">Login Account</h4>
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
                            <input type="submit" value='Login' className="input input-bordered w-full bg-[#61C5B3] text-white hover:border-2 hover:border-[#61C5B3] hover:text-[#61C5B3] hover:bg-transparent duration-200" />
                        </label>
                        <p>Do not Have Account? <Link className="text-blue-400 pb-4" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login