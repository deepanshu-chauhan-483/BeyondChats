import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const dummyData = [
  { id: 1, url: "https://example.com", status: "scraped" },
  { id: 2, url: "https://example.com/about", status: "pending" },
  { id: 3, url: "https://example.com/contact", status: "scraped" },
]

function WebsiteScrapingStatus() {
  const [selectedPage, setSelectedPage] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Website Scraping Status</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Detected Pages</h3>
          <ul className="space-y-2">
            {dummyData.map((page) => (
              <li
                key={page.id}
                className={`cursor-pointer p-3 rounded-md transition-colors ${
                  selectedPage === page
                    ? "bg-purple-100 border-purple-300 border"
                    : "hover:bg-gray-100 border border-transparent"
                }`}
                onClick={() => setSelectedPage(page)}
              >
                <span className="font-medium">{page.url}</span>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    page.status === "scraped" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {page.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Scraped Data</h3>
          {selectedPage ? (
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-medium text-lg mb-2">{selectedPage.url}</h4>
              <p className="text-gray-600">
                {selectedPage.status === "scraped"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Se d do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  : "Scraping pending..."}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Select a page to view scraped data</p>
          )}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => navigate("/integration")}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WebsiteScrapingStatus

