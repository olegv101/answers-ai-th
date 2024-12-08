import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AuthInput({ label, ...props }: AuthInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-[5px] border border-[#5A5A5A] bg-[#2C2E334D]/30 px-3 py-2 text-sm text-[#EDEDED] placeholder-[#EDEDED]/80 focus:border-white/40 focus:outline-none"
      />
    </div>
  );
} 