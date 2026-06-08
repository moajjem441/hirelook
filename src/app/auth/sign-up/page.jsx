'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from "@heroui/react";
import { authClient } from "@/lib/auth-client"; 
import {Description, Label, Radio, RadioGroup} from "@heroui/react";

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '',role:"seeker" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      role:formData.role,
      
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Success: Redirect to sign-in page
    router.push('/auth/sign-in');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#141414] border border-white/5 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create an Account</h2>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <Input
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            variant="bordered"
            onChange={handleInputChange}
            required
            className={{ input: "text-white", label: "text-gray-400" }}
          />
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
            placeholder="Create a password"
            variant="bordered"
            onChange={handleInputChange}
            required
            className={{ input: "text-white", label: "text-gray-400" }}
          />


          {/* role section  */}

           <div className="flex flex-col gap-4">
      <Label>Subscription plan</Label>
      <RadioGroup
      onChange={(value)=>setFormData((prev)=>({...prev,role:value}))}
      defaultValue="seeker" name="seeker" orientation="horizontal">
        <Radio selected name ="seeker" value="seeker" >
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Job Seeker</Label>
            
          </Radio.Content>
        </Radio>
       
        <Radio name="recruiter" value="recruiter" >
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Recruiter</Label>
            
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </div>

          
          <Button 
            type="submit" 
            isLoading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{' '}
          <a href="/auth/sign-in" className="text-blue-500 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;