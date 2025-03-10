"use client";
import React, { useState } from "react";
import axios from "axios";
import "@/app/globals.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function JobForm({ onJobAdded }: { onJobAdded: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newJob = {
      id: Math.random().toString(36).substring(2, 9), // ✅ Generates a random job ID
      title,
      description,
      company,
    };

    try {
      await axios.post(`${API_URL}/job`, newJob);
      onJobAdded(); // ✅ Refresh job list after posting
      setTitle("");
      setDescription("");
      setCompany("");
    } catch (error) {
      console.error("Error creating job:", error);
      setError("❌ Failed to create job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 mb-12 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
        🚀 Post a New Job 🏢
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      <div className="space-y-4">
        {/* Job Title */}
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Job Title:</span>
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Software Engineer, Product Manager..."
            required
          />
        </label>

        {/* Description */}
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Description:</span>
          <textarea
            className="w-full p-3 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the job role..."
            required
            rows={3}
          ></textarea>
        </label>

        {/* Company Name */}
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">
            Company Name:
          </span>
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name..."
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 mt-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-md flex items-center justify-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          ) : (
            "🚀 Post Job"
          )}
        </button>
      </div>
    </form>
  );
}
