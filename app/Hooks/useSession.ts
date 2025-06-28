import { auth } from "@/app/auth";
import { InstitutionUser } from "./userIntrface";

export const Session123 = async (): Promise<InstitutionUser | null> => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  // Cast session.user to InstitutionUser (you can add runtime checks if needed)
  const user = session.user as InstitutionUser;

  return user;
};
