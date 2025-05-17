import { auth } from "../auth";

const useSession = async () => {
  const session = await auth();
};
