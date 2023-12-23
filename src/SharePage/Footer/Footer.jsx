const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-6 md:w-11/12 mx-auto">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn bg-[#61C5B3] hover:text-[#61C5B3] text-white  join-item hover:bg-transparent hover:border-2 hover:border[#61C5B3]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 mt-2 md:w-11/12 text-base-content mx-auto">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer