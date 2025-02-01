import type React from "react"
import { useState } from "react"
import { Link } from "lucide-react"

export const URLShortener = () => {
  const [url, setUrl] = useState("")
  const [password, setPassword] = useState("")
  const [description, setDescription] = useState("")
  const [customValue, setCustomValue] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
        <Link className="mr-2" />
        Shorten URL
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL here"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
				<input
          type="text"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          placeholder="Custom URL (optional)"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (optional)"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          className="w-full resize-y min-h-12 max-h-48 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          rows={3}
        />
        <button
          type="submit"
          className="bg-gray-900 w-full py-2 px-4 text-white rounded-md hover:bg-primary-dark focus:ring-primary"
        >
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4 p-4 bg-background rounded-md">
          <p className="font-bold text-text">Your shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  )
}