import React from "react";  
import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
}

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