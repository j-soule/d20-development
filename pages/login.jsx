import { ContentPageHeader } from "../components/headers";

function LoginPage() {
  return (
    <>
      <ContentPageHeader
        type="login"
        title="D20 Developers"
        tagline="We always roll high initaitive"
      />
      
<div className="flex flex-col justify-center items-center mt-6">
<form action="#" method="POST" className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="******************"
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label
            className="md:w-2/3 block text-gray-500 font-bold"
            htmlFor="stay-in"
          >
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="stay-in"
              id="stay-in"
            />
            <span className="text-sm">Stay logged in</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div>
            <button
              className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div>
            <button
              className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-4"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
</div>
      
    </>
  );
}

export default LoginPage;
