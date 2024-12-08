import React from "react";  
import { Link } from "react-router-dom";

/**
 * Props for AuthLink component
 */
interface AuthLinkProps {
    text: string;      // Main text to display
    linkText: string;  // Text for the clickable link
    to: string;        // Route to navigate to
}

/**
 * AuthLink Component
 * Renders a text with a linked portion for auth-related navigation
 * Used in sign-in/sign-up pages to switch between auth modes
 */
export function AuthLink({ text, linkText, to }: AuthLinkProps) {
    return (
        <p className="text-center text-sm text-[#BBBBBB] mt-4">
            {text}{" "}
            <Link to={to} className="text-[#C9FF3B] hover:underline">
                {linkText}
            </Link>
        </p>
    );
} 