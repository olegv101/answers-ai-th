import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthInput } from "../components/auth/AuthInput";
import { AuthError } from "../components/auth/AuthError";
import { AuthLink } from "../components/auth/AuthLink";

/**
 * Interface for sign-in form data
 */
interface SignInFormData {
    email: string;
    password: string;
}

/**
 * SignIn Component
 * Handles user authentication with email/password
 * Features:
 * - Form validation
 * - Error handling
 * - Navigation after successful login
 */
export function SignIn() {
    // Form state management
    const [formData, setFormData] = useState<SignInFormData>({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const { signIn } = useAuth();
    const navigate = useNavigate();

    /**
     * Handles input changes in the form
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    /**
     * Handles form submission
     * Attempts to sign in and navigates to home on success
     */
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
