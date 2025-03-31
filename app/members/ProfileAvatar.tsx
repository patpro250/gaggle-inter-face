import Image from "next/image";

const ProfileAvatar = () => {
  return (
    <div className="relative w-9 h-9 rounded-full overflow-hidden cursor-pointer border border-gray-300">
      <Image src={"/10bg.png"} alt="Profile" fill className="object-cover" />
    </div>
  );
};

export default ProfileAvatar;
