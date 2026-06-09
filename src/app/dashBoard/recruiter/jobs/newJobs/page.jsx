'use client';

import React, { useState } from "react";
import { Form, Card, Input, Button, Switch, Label } from "@heroui/react";

// Mock company data
const mockCompany = {
  id: "comp_123",
  name: "TechCorp Inc.",
  plan: "Growth",
  activeJobs: 2,
  maxJobs: 10,
  isApproved: true,
};

const NewJobPage = () => {
  const [remoteEnabled, setRemoteEnabled] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [company] = useState(mockCompany);
  
  // Validation error states
  const [errors, setErrors] = useState({
    title: "",
    category: "",
    type: "",
    deadline: "",
    responsibilities: "",
    requirements: "",
  });

  const canPostJob = company.isApproved && company.activeJobs < company.maxJobs;

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.title?.trim()) newErrors.title = "Job title is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.type) newErrors.type = "Please select a job type";
    if (!formData.deadline) newErrors.deadline = "Application deadline is required";
    if (!formData.responsibilities?.trim()) newErrors.responsibilities = "Responsibilities are required";
    if (!formData.requirements?.trim()) newErrors.requirements = "Requirements are required";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canPostJob) {
      alert(`Cannot post job. Your ${company.plan} plan allows max ${company.maxJobs} active jobs.`);
      return;
    }
    
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    const jobData = {
      ...formData,
      remote: remoteEnabled,
      currency,
      companyId: company.id,
      status: "active",
    };
    console.log("Job posted:", jobData);
    alert("Job posted successfully!");
  };

  // Job type options
  const jobTypes = [
    { value: "full", label: "Full-time" },
    { value: "part", label: "Part-time" },
    { value: "remote", label: "Remote" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
  ];

  const categories = [
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
    { value: "hr", label: "Human Resources" },
    { value: "finance", label: "Finance" },
  ];

  const currencies = [
    { value: "USD", label: "USD ($)" },
    { value: "EUR", label: "EUR (€)" },
    { value: "GBP", label: "GBP (£)" },
    { value: "INR", label: "INR (₹)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white flex justify-center py-12 px-4">
      <Form onSubmit={onSubmit} className="w-full max-w-5xl space-y-8">
        {/* Header */}
        <div className="relative mb-2">
          <div className="absolute -top-6 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Post a New Job
          </h1>
          <p className="text-gray-400 text-sm mt-2">Fill out the details to publish a new job listing</p>
        </div>

        {/* Company Banner */}
        <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 shadow-lg">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div>
              <p className="text-xs text-gray-400">Posting as</p>
              <p className="font-semibold text-white">{company.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">
                Plan: <span className="text-blue-400 font-medium">{company.plan}</span>
              </p>
              <p className="text-xs text-gray-400">
                Active Jobs: {company.activeJobs} / {company.maxJobs}
              </p>
            </div>
            {!canPostJob && (
              <div className="w-full mt-2 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-2 text-center">
                ⚠️ Job limit reached. Upgrade your plan to post more jobs.
              </div>
            )}
          </div>
        </Card>

        {/* Main Card */}
        <Card className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/50 hover:border-gray-700 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Title *</label>
                <Input
                  name="title"
                  placeholder="e.g. Senior Frontend Developer"
                  variant="bordered"
                  isRequired
                  isInvalid={!!errors.title}
                  errorMessage={errors.title}
                  classNames={{
                    input: "text-white",
                    inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-gray-500 focus-within:border-blue-500 transition-all"
                  }}
                  onChange={() => setErrors(prev => ({ ...prev, title: "" }))}
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Category *</label>
                <select
                  name="category"
                  required
                  className={`w-full bg-gray-800/50 border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none ${
                    errors.category ? "border-red-500" : "border-gray-700"
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5rem'
                  }}
                  onChange={() => setErrors(prev => ({ ...prev, category: "" }))}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Type *</label>
                <select
                  name="type"
                  required
                  className={`w-full bg-gray-800/50 border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none ${
                    errors.type ? "border-red-500" : "border-gray-700"
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5rem'
                  }}
                  onChange={() => setErrors(prev => ({ ...prev, type: "" }))}
                >
                  <option value="">Select job type</option>
                  {jobTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Salary Range</label>
                <div className="flex gap-2">
                  <div className="w-1/3">
                    <select
                      name="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none text-sm"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      {currencies.map((curr) => (
                        <option key={curr.value} value={curr.value}>{curr.label}</option>
                      ))}
                    </select>
                  </div>
                  <Input name="minSalary" placeholder="Min" variant="bordered" className="w-1/3" classNames={{ input: "text-white", inputWrapper: "bg-gray-800/50 border-gray-700" }} />
                  <Input name="maxSalary" placeholder="Max" variant="bordered" className="w-1/3" classNames={{ input: "text-white", inputWrapper: "bg-gray-800/50 border-gray-700" }} />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <div className="flex gap-3">
                  <Input name="city" placeholder="City" variant="bordered" className="w-1/2" isDisabled={remoteEnabled} classNames={{ input: "text-white", inputWrapper: "bg-gray-800/50 border-gray-700" }} />
                  <Input name="country" placeholder="Country" variant="bordered" className="w-1/2" isDisabled={remoteEnabled} classNames={{ input: "text-white", inputWrapper: "bg-gray-800/50 border-gray-700" }} />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Remote work allowed</span>
                    {remoteEnabled && <span className="text-xs text-green-400">Working mode: Remote</span>}
                  </div>
                  <Switch isSelected={remoteEnabled} onChange={setRemoteEnabled}>
                    <Switch.Control><Switch.Thumb /></Switch.Control>
                    <Switch.Content><Label className="text-sm text-gray-300">Remote</Label></Switch.Content>
                  </Switch>
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Application Deadline *</label>
                <Input
                  name="deadline"
                  type="date"
                  variant="bordered"
                  isRequired
                  isInvalid={!!errors.deadline}
                  errorMessage={errors.deadline}
                  classNames={{
                    input: "text-white [color-scheme:dark]",
                    inputWrapper: "bg-gray-800/50 border-gray-700 hover:border-gray-500 focus-within:border-blue-500"
                  }}
                  onChange={() => setErrors(prev => ({ ...prev, deadline: "" }))}
                />
              </div>
            </div>

            {/* Right Column - placeholder */}
            <div className="space-y-6"><div className="h-2"></div></div>
          </div>

          {/* Job Description Section */}
          <div className="mt-8 space-y-6">
            {/* Responsibilities */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Responsibilities *</label>
              <div className="bg-gray-800/30 border border-gray-700 rounded-t-xl p-2 border-b-0 flex gap-2 text-gray-400">
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">B</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">I</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">U</span>
              </div>
              <textarea
                name="responsibilities"
                className={`w-full bg-gray-800/50 border border-t-0 rounded-b-xl px-4 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all ${
                  errors.responsibilities ? "border-red-500" : "border-gray-700"
                }`}
                rows={4}
                placeholder="List the main responsibilities for this role..."
                required
                onChange={() => setErrors(prev => ({ ...prev, responsibilities: "" }))}
              />
              {errors.responsibilities && <p className="text-red-500 text-xs mt-1">{errors.responsibilities}</p>}
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Requirements *</label>
              <div className="bg-gray-800/30 border border-gray-700 rounded-t-xl p-2 border-b-0 flex gap-2 text-gray-400">
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">B</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">I</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">U</span>
              </div>
              <textarea
                name="requirements"
                className={`w-full bg-gray-800/50 border border-t-0 rounded-b-xl px-4 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all ${
                  errors.requirements ? "border-red-500" : "border-gray-700"
                }`}
                rows={4}
                placeholder="List the required skills, experience, education, etc..."
                required
                onChange={() => setErrors(prev => ({ ...prev, requirements: "" }))}
              />
              {errors.requirements && <p className="text-red-500 text-xs mt-1">{errors.requirements}</p>}
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Benefits (Optional)</label>
              <div className="bg-gray-800/30 border border-gray-700 rounded-t-xl p-2 border-b-0 flex gap-2 text-gray-400">
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">B</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">I</span>
                <span className="px-3 py-1 rounded cursor-pointer hover:text-white hover:bg-gray-700/50 transition">U</span>
              </div>
              <textarea name="benefits" className="w-full bg-gray-800/50 border border-t-0 border-gray-700 rounded-b-xl px-4 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" rows={3} placeholder="Health insurance, remote stipend, stock options, etc..." />
            </div>
            <p className="text-xs text-gray-500">Supports basic formatting</p>
          </div>
        </Card>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4">
          <Button type="reset" variant="flat" className="bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-800 hover:text-white rounded-xl px-6 transition-all">Cancel</Button>
          <Button type="submit" color="primary" isDisabled={!canPostJob} className={`bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl px-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 ${!canPostJob && 'opacity-50 cursor-not-allowed'}`}>Publish Job</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewJobPage;