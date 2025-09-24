import Head from 'next/head';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Signup - Naizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full max-w-3xl bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl shadow-xl overflow-hidden flex items-center min-h-[500px]">
        {/* Logo aligné à gauche */}
        <div className="absolute inset-0 flex items-center justify-start pl-10 pointer-events-none">
          <img
            src="/images/Vector.png"
            alt="Naizz Logo"
            className="h-24 md:h-28 opacity-100"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Signup Form Card à droite */}
        <div className="relative bg-white w-[320px] h-[460px] p-6 md:p-8 rounded-xl shadow-lg z-10 ml-auto mr-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Signup</h2>
          <p className="text-center text-gray-600 mb-6">
            Explore the possibilities of language learning with Naizz
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Signup
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition text-sm font-medium text-gray-700"
          >
            <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
            Continue using Google
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline font-medium">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
