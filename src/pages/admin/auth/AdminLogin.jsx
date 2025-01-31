import logo from '../../../assets/logo.png';
function AdminLogin() {
    return (
        <main className="bg-blue-950 min-h-screen md:c0l-span-4">
            <img className="max-w-50" src={logo} />
            <div className="flex item-center justify-center mt-10">
                <form className="w-full">
                    <div className="justify-items-center">
                        <h1 className="text-4xl font-bold text-white">Login</h1>
                        <p className="text-lg text-white mt-3">Login to your account.</p>
                        <div className="w-4/6 md:w-1/4 mt-6">
                            <label htmlFor="E-mail-Address" className="block text-sm font-medium text-white">E-mail Address</label>
                            <input type="email" name="E-mail-Address" className="block mt-2 border border-white bg-white py-2 w-full" autoComplete="E-mail-Address" />
                        </div>
                        <div className="w-5/6 md:w-1/4 mt-6">
                            <label htmlFor="password" className="block text-sm font-medium text-white mt-2">Password</label>
                            <input type="password" name="password" className="block mt-2 border border-white bg-white py-2 w-full" autoComplete="Password" />
                        </div>
                        <div className="container w-1/4 md:w-1/4 md:flex justify-between items-center mt-6">
                            <div className="container flex justify-between items-center">
                                <div className="">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <p className="text-white text-sm">Reset Password</p>
                            </div>
                        </div>
                        <div className="w-5/6 md:w-1/4">
                            <button type="submit" className="block mt-9 border bg-yellow-400 font-medium text-xl py-2 w-full">Signin</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default AdminLogin;