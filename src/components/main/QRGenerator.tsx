import { useState } from "react";
import { QrCode } from "lucide-react";

export const QRGenerator = () => {
  const [url, setUrl] = useState("")
  const [qrCode, setQrCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
        <QrCode className="mr-2" />
        Generate QR Code
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
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-light text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Generate QR Code
        </button>
      </form>
      {qrCode && (
        <div className="mt-4 flex justify-center">
          <img
            src={qrCode || "/placeholder.svg"}
            alt="Generated QR Code"
            className="border-2 border-accent rounded-md"
          />
        </div>
      )}
    </div>
  )
}