"use client";

import { Box, Button, Container, Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import IconForm from "../../ui/asiderIconForm/page";
import Track1 from "../../ui/formProgressTrack/step1/page";
import "react-phone-number-input/style.css";
import PhoneInput, { Value } from "react-phone-number-input";
import Track2 from "../../ui/formProgressTrack/step2/page";
import Congulaturation from "../congulatutation/page";
import { useSession } from "next-auth/react";

const from = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query");
  const [page, setPage] = useState(query ? parseInt(query) : 0);
  const pagelng = [1, 2, 3];
  const [value, setValue] = useState("");

  useEffect(() => {
    if (query) {
      setPage(parseInt(query));
    }
  }, [query]);

  function handleNext() {
    const nextPage = page + 1;
    setPage(nextPage);
    router.push(`?query=${nextPage}`);
  }
  function handleprev() {
    const nextPage = page - 1;
    setPage(nextPage);
    router.push(`?query=${nextPage}`);
  }

  return (
    <div className=" bg-white overflow-hidden">
      <form action="">
        {page === 0 && (
          <Flex className="bg-transparent h-screen w-screen  ">
            <IconForm grandImage={"/image.svg"} petitImage={"/profile.svg"} />
            <Box className="bg-sky-50 flex-1 flex flex-col space-y-4 px-2 md:px-10 py-20 sm:py-0">
              <Track1 />
              <div className="bg-transparent h-auto  ">
                {/* Input Username */}

                <div>
                  <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-base font-normal text-gray-900 "
                  >
                    Names
                  </label>
                  <div className="relative mb-1   flex items-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className=" border max-w-xl focus:ring-2 outline-0 ease-in duration-100 bg-gray-100 px-6 text-gray-500 text-base rounded-lg focus:ring-blue-500 block w-full ps-10 p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Names"
                    />
                  </div>
                  {/* Input email */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-base font-normal text-gray-900 "
                    >
                      Email
                    </label>
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="input-group-1"
                        className=" border max-w-xl focus:ring-2 outline-0 ease-in duration-100 bg-gray-100 px-6 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=" example@gmail"
                        defaultValue={session?.user?.email || ""}
                        readOnly
                      />
                    </div>

                    {/* Input phone */}
                  </div>

                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-base font-normal text-gray-900 "
                    >
                      Telephone
                    </label>

                    <div className="relative mb-4">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        {/* <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 19 18"
                        >
                          <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg> */}
                      </div>
                      <PhoneInput
                        type="text"
                        style={{ outline: "!none" }}
                        id="input-group-1"
                        defaultCountry="RW"
                        className=" border max-w-xl focus:ring-2 outline-0 ease-in duration-100 bg-gray-100  text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="+250 00000000"
                        onChange={setValue}
                      />
                    </div>
                    {/* Type */}

                    <div className="mb-6">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 font-normal text-base  text-gray-900 "
                      >
                        Library type
                      </label>
                      <input
                        type="text"
                        className=" border max-w-xl focus:ring-2 outline-0 ease-in duration-100 bg-gray-100 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="School Library, Public Library, Special Library"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-1.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Next Page
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Box>
          </Flex>
        )}

        {page === 1 && (
          <Flex className="bg-transparent h-screen w-screen  ">
            <IconForm grandImage={"image.svg"} petitImage={"account.svg"} />
            <Box className="bg-sky-50 flex-1 flex flex-col space-y-4 px-20 py-10">
              <Track2 />
              <div className="bg-transparent h-auto  ">
                {/* Input Username */}

                <div>
                  <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-lg font-medium text-gray-900 "
                  >
                    Opening Hour
                  </label>
                  <div className="relative mb-3">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                    <input
                      type="text"
                      id="input-group-1"
                      className=" border bg-gray-100  text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Opening hour 9:00 AM"
                    />
                  </div>

                  {/* Input email */}

                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-lg font-medium text-gray-900 "
                    >
                      Address
                    </label>
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                      <input
                        type="text"
                        id="input-group-1"
                        className=" border bg-gray-100  text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                      />
                    </div>

                    {/* Input phone */}
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-lg font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <div className="relative mb-4">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                      <input
                        type="password"
                        className=" border bg-gray-100  text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5    border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                      />
                    </div>
                    {/* Type */}

                    <div className="mb-6">
                      <label
                        htmlFor="large-input"
                        className="block mb-2 text-lg font-medium text-gray-900 "
                      >
                        Retry-Password
                      </label>
                      <input
                        type="......."
                        className=" border bg-gray-100 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   border-gray-500 placeholder-gray-400text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Retry-Password"
                      />
                    </div>
                  </div>
                  {/* Next */}
                  <div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    >
                      Next Page
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </Flex>
        )}

        {page === 2 && (
          <Box className="bg-white rounded-md shadow w-xl">
            <Container>
              <Congulaturation />
            </Container>
          </Box>
        )}
      </form>
    </div>
  );
};
export default from;
