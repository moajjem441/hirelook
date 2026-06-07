'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from "@heroui/react";
import { authClient } from "@/lib/auth-client"; 

const SignInPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // লগ-ইন সফল হলে হোমপেজে পাঠিয়ে দিন
    router.push('/');
    router.refresh(); // নতুন সেশন লোড করার জন্য এটি ভালো প্র্যাকটিস
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#141414] border border-white/5 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            onChange={handleInputChange}
            required
            className={{ input: "text-white", label: "text-gray-400" }}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            variant="bordered"
            onChange={handleInputChange}
            required
            className={{ input: "text-white", label: "text-gray-400" }}
          />
          
          <Button 
            type="submit" 
            isLoading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4"
          >
            Sign In
          </Button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account?{' '}
          <a href="/auth/sign-up" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;