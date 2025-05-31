import { RatingDisplay } from "@/app/_components/rating";
import { getLetterAndBackground } from "@/app/Hooks/profileAvatarColorGenerator";
import { useSession123 } from "@/app/Hooks/useSession";
import { Cog, KeySquare } from "lucide-react";
import Link from "next/link";
import Starts from "./starts";
import Profile from "./profile";
import InsititutionInfo from "./insititutionInfo";

export default async function InstitutionProfile() {
  return (
    <div className=" overflow-scroll p-4  mx-auto  space-y-6">
      {/* Profile Section */}
      <Profile />

      {/* Institution and Location Info */}
      <InsititutionInfo />

      {/* Stats */}

      <Starts />
    </div>
  );
}
