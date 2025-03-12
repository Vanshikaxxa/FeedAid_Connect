"use client";

import type React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { X } from "lucide-react";

interface CommunitySignupFormProps {
  onClose?: () => void;
}

export default function CommunitySignupForm({
  onClose = () => {},
}: CommunitySignupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="flex justify-center mt-8 mb-2">
          <div className="scale-200 text-green-700 transform w-4.5">
            <FaLocationArrow />
          </div>
        </div>

        <div className="px-8 pb-8">
          <h2 className="text-3xl font-medium text-center text-green-700 mb-4">
            Join Our Community!
          </h2>

          <p className="text-center text-gray-700 mb-6">
            Get the latest updates on food rescue efforts, community impact, and
            ways to get involved
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                We won't send any spam, promise!
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Sign me up
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Maybe later
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
