"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log({ name, email, password });
    console.log("Supabase client:", supabase);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    console.log({ data, error });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Signup failed ❌");
    } else {
      toast.success("Signup successful 🎉 Check your email to confirm.");
      router.push("/login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full md:w-3/4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between">
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/images/Vector (2).png"
            alt="Naizz Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2">
          <div className=" bg-white px-4 md:px-8 py-8 md:py-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
              Signup
            </h2>
            <p className="text-center text-gray-600 mb-7">
              Explore the possibilities of language learning with Naizz
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
              />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
              />

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition text-sm lg:text-base ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>
            </form>
            <div className="flex items-center my-5">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition text-sm font-medium text-gray-700"
            >
              <img
                src="/google-icon.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Continue using Google
            </button>
            <p className="mt-5 text-center text-xs lg:text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
