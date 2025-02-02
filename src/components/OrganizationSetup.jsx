import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OrganizationSetup() {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch API key from environment variables
  const API_KEY = import.meta.env.VITE_LINK_PREVIEW_API_KEY || process.env.REACT_APP_LINK_PREVIEW_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/scraping-status");
  };

  const fetchMetaDescription = async () => {
    if (!websiteUrl) {
      setError("Please enter a website URL first.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(`https://api.linkpreview.net/?key=${API_KEY}&q=${websiteUrl}`);
      if (response.data && response.data.description) {
        setDescription(response.data.description);
      } else {
        setError("No meta description found.");
      }
    } catch (err) {
      setError("Error fetching meta description. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Setup Your Organization</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Website URL
          </label>
          <input
            type="url"
            id="websiteUrl"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Company Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="button"
            onClick={fetchMetaDescription}
            className="mt-2 text-sm text-purple-600 hover:underline focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Fetching..." : "Auto-fetch Description"}
          </button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default OrganizationSetup;
