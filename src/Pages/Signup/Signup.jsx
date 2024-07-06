export default function Signup() {
  return (
    <div className="flex justify-between items-center h-[85vh] w-full">
      <div className="w-full sm:w-[430px] mx-auto shadow rounded p-4">
        <h2 className="text-2xl font-semibold text-center text-neutral mb-6">
          Sign Up
        </h2>
        <form className="p-4 flex flex-col gap-4">
          <div>
            <p className="text-[15px]">Email</p>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              required
              className="lowercase"
            />
          </div>

          <div>
            <p className="text-[15px]">Phone</p>
            <input
              type="text"
              placeholder="Enter phone number"
              name="phone"
              required
              className="lowercase"
            />
          </div>

          <div>
            <p className="text-[15px]">Password</p>
            <input
              type="password"
              placeholder="******"
              name="password"
              required
            />
          </div>

          <div>
            <p className="text-[15px]">Re-Password</p>
            <input
              type="rePassword"
              placeholder="******"
              name="re password"
              required
            />
          </div>
          {/* {isError && (
          <p className="text-sm text-red-500">{error?.data?.error}</p>
        )} */}

          <div className="mt-4">
            <button className="w-full text-base-100 bg-primary px-4 py-2 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
