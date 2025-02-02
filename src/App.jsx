import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Registration from "./components/Registration";
import OrganizationSetup from "./components/OrganizationSetup";
import WebsiteScrapingStatus from "./components/WebsiteScrapingStatus";
import ChatbotIntegration from "./components/ChatbotIntegration";
import IntegrationResult from "./components/IntegrationResult";
import ProgressBar from "./assets/Progressbar"; 

const steps = [
  { path: "/", name: "Registration" },
  { path: "/organization", name: "Organization Setup" },
  { path: "/scraping-status", name: "Scraping Status" },
  { path: "/integration", name: "Chatbot Integration" },
  { path: "/integration-result", name: "Integration Result" },
];

const ProgressWrapper = () => {
  const location = useLocation();
  const currentIndex = steps.findIndex((step) => step.path === location.pathname);
  const progress = ((currentIndex + 1) / steps.length) * 100; // Calculate progress percentage

  return (
    <div className="mb-4">
      <ProgressBar progress={progress} />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-purple-600 bg-clip-text text-transparent">
          BeyondChats
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ProgressWrapper /> 
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/organization" element={<OrganizationSetup />} />
            <Route path="/scraping-status" element={<WebsiteScrapingStatus />} />
            <Route path="/integration" element={<ChatbotIntegration />} />
            <Route path="/integration-result" element={<IntegrationResult />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
