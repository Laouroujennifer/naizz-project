"use client"

import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ici tu peux ajouter la logique d’authentification
    router.push("/dashbord") // redirige vers le dashboard
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full max-w-3xl bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl shadow-xl overflow-hidden flex items-center min-h-[500px]">
        {/* Logo aligned to the left */}
        <div className="absolute inset-0 flex items-center justify-start pl-10 pointer-events-none">
          <img
            src="/images/Vector.png"
            alt="Naizz Logo"
            className="h-24 md:h-28 opacity-100"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Login Form Card shifted and centered on the right */}
        <div className="relative bg-white w-[320px] h-[400px] p-6 md:p-8 rounded-xl shadow-lg z-10 ml-auto mr-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Login</h2>
          <p className="text-center text-gray-600 mb-6">Hey champ! Welcome back to Naizz</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
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
              Login
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
            Continue with Google
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            I don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-medium">Signup</a>
          </p>
        </div>
      </div>
    </div>
  )
}
