import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E0D0D]">
      <div className="bg-[#161618] p-8 rounded-lg border border-[#525252] w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Sign In</h1>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-md mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[5px] border border-[#5A5A5A] bg-[#2C2E334D]/30 px-3 py-2 text-sm text-[#EDEDED] placeholder-[#EDEDED]/80 focus:border-white/40 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[5px] border border-[#5A5A5A] bg-[#2C2E334D]/30 px-3 py-2 text-sm text-[#EDEDED] placeholder-[#EDEDED]/80 focus:border-white/40 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            variant="standard"
            className="w-full bg-[#C9FF3B] text-black font-medium py-2 px-4 rounded-md hover:bg-[#C9FF3B]/90 transition-colors"
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-[#BBBBBB] mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#C9FF3B] hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
