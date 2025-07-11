import { RatingDisplay } from "@/app/_components/rating";
import { getLetterAndBackground } from "@/app/Hooks/profileAvatarColorGenerator";
import { Session123 } from "@/app/Hooks/useSession";
import { Cog, KeySquare } from "lucide-react";
import Link from "next/link";

const Profile = async () => {
  const { email, name, phone, rating, id } = await Session123();

  const { backgroundColor, letter } = getLetterAndBackground(name);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-6">
          <div
            className="w-24 h-24 rounded-full flex justify-center items-center text-5xl text-sidebar-primary-foreground font-extrabold overflow-hidden"
            style={{ backgroundColor }}
          >
            {letter}
          </div>
          <div>
            <h2 className="text-2xl pb-2 text-primary font-md">{name}</h2>
            <p className="text-gray-500">{email}</p>
            <p className="text-gray-500">+25 {phone || "waiting..."}</p>
            <RatingDisplay rating={rating} />
          </div>
        </div>

        <div className="flex gap-4">
          <Link href={`/d/admin/Account/${id}/setting`}>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors shadow-sm">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-medium">Edit Profile</span>
            </button>
          </Link>
          <Link href={`/d/admin/Account/${id}/cp`}>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-400/80 transition-colors shadow-sm">
              <KeySquare className="w-4 h-4" />
              <span className="text-sm font-medium">Change Password</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
