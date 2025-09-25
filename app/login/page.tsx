"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ici tu peux ajouter la logique d'authentification
    router.push("/dashbord") // redirige vers le dashboard
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full max-w-3xl bg-gradient-to-br from-[#d2eef4] via-[#9de8ef] to-[#4bc7df] rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
        
        {/* Logo avec espacement équilibré */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-6 lg:pr-12 lg:pl-16">
          <div className="relative w-56 h-48 lg:w-72 lg:h-60">
            <Image
              src="/images/Vector (2).png"
              alt="Naizz Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Login Form Card avec bon espacement */}
        <div className="relative bg-white w-full max-w-md lg:w-[380px] h-auto lg:h-[460px] p-7 rounded-xl shadow-lg mx-4 lg:mx-8 my-6 lg:my-10 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-2xl font-bold text-center text-gray-800 mb-3">Login</h2>
          <p className="text-center text-gray-600 mb-7 text-sm lg:text-base">
            Hey champ! Welcome back to Naizz
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                placeholder="Email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition text-sm lg:text-base"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition text-sm font-medium text-gray-700"
          >
            <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
            Continue with Google
          </button>

          <p className="mt-5 text-center text-xs lg:text-sm text-gray-600">
            I don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-medium">Signup</a>
          </p>
        </div>
      </div>
    </div>
  )
}