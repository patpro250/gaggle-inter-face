import { DataList, Flex, IconButton } from "@radix-ui/themes";
import { getApiClient } from "../g/schools/axios";
import CopyButton from "./clipboard";

interface Props {
  id: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  profile: string | null;
  status: "ACTIVE" | "INACTIVE" | string;
  gender: "M" | "F" | string;
  phone: string;
  password: string;
  role: "MANAGER" | "ADMIN" | "USER" | string;
  permissions: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

const LibrarianDetail = async ({ id }: Props) => {
  const api = await getApiClient(); // This is safe inside SWR
  const { data: LibrarianOnly } = await api.get<User>(`/librarians/${id}`);
  console.log(LibrarianOnly);
  return (
    <div className="bg-amber-0">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Status</DataList.Label>
          <DataList.Value>
            <p
              className={`px-2 rounded-2xl ${
                LibrarianOnly.status == "PENDING"
                  ? "bg-amber-300"
                  : "bg-green-500"
              } text-sm capitalize`}
            >
              {LibrarianOnly.status}
            </p>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Joined At</DataList.Label>
          <DataList.Value>{LibrarianOnly.createdAt}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label minWidth="88px">Role</DataList.Label>
          <DataList.Value>
            <p className="text-indigo-600 font-medium ">{LibrarianOnly.role}</p>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label minWidth="88px">Name</DataList.Label>
          <DataList.Value>
            <p className=" text-green-700 ">
              {LibrarianOnly.firstName} {LibrarianOnly.lastName}
            </p>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Email</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <DataList.Label>{LibrarianOnly.email}</DataList.Label>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              >
                <CopyButton value={LibrarianOnly.email} />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Phone</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <DataList.Label>{LibrarianOnly.phone}</DataList.Label>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              >
                <CopyButton value={LibrarianOnly.phone} />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  );
};

export default LibrarianDetail;
