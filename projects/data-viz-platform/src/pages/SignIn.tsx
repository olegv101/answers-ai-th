import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthInput } from "../components/auth/AuthInput";
import { AuthError } from "../components/auth/AuthError";
import { AuthLink } from "../components/auth/AuthLink";

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-white mb-6">Sign In</h1>
      <AuthError message={error} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="standard"
          className="w-full bg-[#C9FF3B] text-black font-medium py-2 px-4 rounded-md hover:bg-[#C9FF3B]/90 transition-colors"
        >
          Sign In
        </Button>

        <AuthLink 
          text="Don't have an account?"
          linkText="Sign Up"
          to="/signup"
        />
      </form>
    </AuthLayout>
  );
}
