import { signOut } from "../auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="text-white p-4 bg-red-600">Sign Out</button>
    </form>
  )
}