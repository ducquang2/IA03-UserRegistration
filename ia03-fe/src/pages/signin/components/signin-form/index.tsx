function SigninForm() {
  return (
    <div className="h-[calc(100%-5rem)] flex items-center justify-center bg-base-200"> {/* Container */}
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> {/* Card */}
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="divider">OR</div>
          <div className="text-center">
            <a href="#" className="link link-primary">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SigninForm;