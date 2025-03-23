"use client";
import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div>
        <p>Not signed in</p>
        <button onClick={() => signOut()}>Sign in</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <img
        src={session.user.image}
        alt="User Avatar"
        className="w-20 h-20 rounded-full mt-2"
      />
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 mt-4"
      >
        Sign Out
      </button>
    </div>
  );
}
