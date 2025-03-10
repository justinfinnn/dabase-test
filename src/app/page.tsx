"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobForm from "@/app/components/JobForm";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Job = {
  id: string;
  title: string;
  description: string;
  company: string;
};

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get(`${API_URL}/jobs`);
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("❌ Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`${API_URL}/job/${id}`);
      fetchJobs(); // Refresh job list
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        🏢 Job Listings
      </h1>

      {/* Job Submission Form */}
      <JobForm onJobAdded={fetchJobs} />

      {/* Loading Indicator */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-300">
          Loading jobs...
        </p>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Job Listings */}
      {jobs.length === 0 && !loading ? (
        <div className="text-center text-gray-600 dark:text-gray-300 mt-6">
          <p>No jobs available. Be the first to post a job! 🎉</p>
        </div>
      ) : (
        <div className="space-y-4 mt-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-300 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {job.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-semibold">
                  🏢 {job.company}
                </p>
              </div>

              {/* 🚀 Delete Button */}
              <button
                onClick={() => deleteJob(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
