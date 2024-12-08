import React from "react";

interface AuthErrorProps {
  message: string;
}

export function AuthError({ message }: AuthErrorProps) {
  if (!message) return null;
  
  return (
    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-md mb-4">
      {message}
    </div>
  );
} 