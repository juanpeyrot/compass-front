import { useState } from "react"
import { User, Mail, Trash2 } from "lucide-react"

export const UserSettings = () => {
  const [user, setUser] = useState({
    username: "johndoe",
    email: "johndoe@example.com",
  })

  const handleDeleteAccount = () => {
    console.log("Deleting account...")
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Settings</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <User size={18} className="mr-2 text-primary" />
          <span className="font-semibold mr-2">Username:</span>
          <span>{user.username}</span>
        </div>
        <div className="flex items-center">
          <Mail size={18} className="mr-2 text-primary" />
          <span className="font-semibold mr-2">Email:</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="space-y-4">
        <button
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={handleDeleteAccount}
        >
          <Trash2 size={18} className="mr-2" />
          Delete Account
        </button>
      </div>
    </div>
  )
}