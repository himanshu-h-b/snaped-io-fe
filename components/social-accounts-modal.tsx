import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialAccount {
  name: string
  platform: string
  status?: "selected" | "select"
}

const accounts: SocialAccount[] = [
  { name: "Alan Walker", platform: "youtube" },
  { name: "Alan Walker", platform: "instagram" },
  { name: "Alan Walker", platform: "youtube" },
]

interface SocialAccountsModalProps {
  onClose: () => void
  onSelectAccount: (account: SocialAccount) => void
  currentAccount: SocialAccount
}

export function SocialAccountsModal({ onClose, onSelectAccount, currentAccount }: SocialAccountsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg dark:bg-[#121212] w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Social Accounts</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          {accounts.map((account, index) => {
            const isSelected = account.platform === currentAccount.platform

            return (
              <div key={index} className="flex items-center justify-between p-2 border rounded-lg mb-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white mr-2">
                    A
                  </div>
                  <div>
                    <div className="font-medium">{account.name}</div>
                    <div className="flex items-center">
                      <div
                        className={`h-4 w-4`}
                      >
                        <img src="/logos/youtube.svg" alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="text-purple-600" onClick={() => onSelectAccount(account)}>
                  {isSelected ? "Selected" : "Select"}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

