"use client";

import React, { useEffect, useState } from "react";
import { Orbitron, Poppins } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Stepper1 from "../stepper/page";
import { Landmark, Link } from "lucide-react";
import { Building2 } from "lucide-react";
import LeftP1 from "./left/page";
import axios, { AxiosError } from "axios";
import { useInstitutionContext } from "../../admin/stateManagement/institution";
import { setTimeout } from "timers/promises";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
var datainput = null;
const P1 = () => {
  const router = useRouter();
  const { DataForm, setData } = useInstitutionContext();
  const [status, setStatus] = useState<number | string>();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    if (!DataForm.email) {
      router.push("/pagnation-page/sigin-with-goole");
    }
  }, [DataForm.email]);
  const SubmitHander = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const name = nameInput.value;
    datainput = name;
    if (name) {
      setLoading(true);

      axios
        .post("http://localhost:4000/verify", { name })
        .then((res) => {
          console.log(res.status);
          setStatus(res.status);
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          console.log(err.message);
          setStatus(err.response.status);
          setLoading(false);
        });
    } else {
      console.log("fill form");
    }
  };

  const nextHander = () => {
    setData({ ...DataForm, name: datainput });
    router.push("/pagnation-page/p2");
  };

  const handerOnChange = () => {
    setStatus(null);
  };

  return (
    <div>
      <main className="flex">
        {/* left */}
        {/* <LeftP1 /> */}

        {/* Right Section */}
        <div className="flex-1/2  h-screen flex flex-col  items-center relative isolate overflow-hidden bg-white px-6 py-0 sm:py-32 lg:px-8  ">
          <section className="">
            <div className="absolute w-full inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
            <div className="absolute  inset-y-0 right-1/3 -z-10 mr-16 w-[400%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

            <div>
              <Stepper1 />
              <div className="text-center flex flex-col space-y-6 items-center ">
                <div className="bg-sky-0 w-20 mt-5 mb-10 shadow rounded-full text-center ">
                  <img className="m-auto" src="image.svg" alt="" />
                </div>
              </div>

              <div>
                <form
                  className="text-center "
                  onSubmit={SubmitHander}
                  action=""
                >
                  <label
                    className=" text-base text-gray-600  "
                    htmlFor="institution"
                  >
                    Verify institution Name
                  </label>
                  {/* anouncement massege */}
                  <div className="block">
                    {status === 200 && (
                      <Callout.Root color="green">
                        <Callout.Icon>
                          <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>
                          Institution name is available.
                        </Callout.Text>
                      </Callout.Root>
                    )}
                    {status === 404 && (
                      <Callout.Root color="red">
                        <Callout.Icon>
                          <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>
                          Institution name is already registered
                        </Callout.Text>
                      </Callout.Root>
                    )}
                  </div>
                  {/* anouncement massege */}
                  <div className=" relative bg-gray-50  mt-3 rounded-md  ">
                    <Building2
                      className="bg-gray-0 absolute top-2  left-2"
                      size={12}
                      strokeWidth={1.25}
                      width={30}
                      height={30}
                    />

                    <input
                      className={`${
                        status != 404
                          ? "border-2 border-indigo-100"
                          : " !border-2 !border-red-400"
                      }
                      ${
                        status === 200
                          ? "!border-2 !border-green-300"
                          : " border-2 border-indigo-100"
                      }
                      font-normal  focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2   ps-12`}
                      type="text"
                      onChange={handerOnChange}
                      id="institution"
                      name="name"
                      // value={DataForm.name}

                      placeholder="Verify Institution Name"
                    />
                  </div>
                  {/* verify the loadind */}
                  {!loading ? (
                    <button
                      type="submit"
                      className=" bg-sky-600 mt-6 w-[100%] h-10 rounded-md text-md font-medium text-white "
                    >
                      verify
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className=" flex justify-center items-center gap-4 bg-sky-600 mt-6 w-[100%] h-10 rounded-md text-md font-normal text-white "
                    >
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-dashed bg-red-0"></span>
                      <p>finding name...</p>
                    </button>
                  )}{" "}
                  {status === 200 && (
                    <button
                      type="submit"
                      onClick={nextHander}
                      className=" bg-sky-600 mt-6 w-[100%] h-10 rounded-md text-md font-medium text-white "
                    >
                      Continue
                    </button>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default P1;
