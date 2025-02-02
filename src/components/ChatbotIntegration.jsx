import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function ChatbotIntegration() {
  const [integrationMethod, setIntegrationMethod] = useState("")
  const navigate = useNavigate()

  const handleTestChatbot = () => {
    window.open("https://example.com", "_blank")
  }

  const handleIntegrate = (method) => {
    setIntegrationMethod(method)
  }

  const handleTestIntegration = () => {
    navigate("/integration-result")
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Chatbot Integration & Testing</h2>
      <div className="max-w-md mx-auto space-y-6">
        <button
          onClick={handleTestChatbot}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          Test Chatbot
        </button>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Integrate on your website</h3>
          <div className="space-y-3">
            <button
              onClick={() => handleIntegrate("code")}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
              Copy-paste Code
            </button>
            <button
              onClick={() => handleIntegrate("email")}
              className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
            >
              Email Instructions to Developer
            </button>
          </div>
        </div>
        {integrationMethod && (
          <div className="mt-6 bg-white p-6 rounded-md border border-gray-200">
            <h4 className="font-semibold mb-4 text-lg">
              {integrationMethod === "code" ? "Integration Code:" : "Email Instructions"}
            </h4>
            {integrationMethod === "code" ? (
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>
                  {`<script src="https://beyondchats.com/widget.js"></script>
<script>
BeyondChats.init({
  apiKey: 'YOUR_API_KEY'
});
</script>`}
                </code>
              </pre>
            ) : (
              <p className="text-gray-600">Instructions have been emailed to your developer.</p>
            )}
          </div>
        )}
        <button
          onClick={handleTestIntegration}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Test Integration
        </button>
      </div>
    </div>
  )
}

export default ChatbotIntegration

