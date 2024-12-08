import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E0D0D]">
      <div className="bg-[#161618] p-8 rounded-lg border border-[#525252] w-full max-w-md">
        {children}
      </div>
    </div>
  );
} 