"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useRef, useState } from "react";
import PageHeader from "../ui/page-header/page";
import ErrorBox from "../component/ERR0R/page";
import axios from "axios";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
type DataLogin = {
  email: string;
  password: string;
  who: string;
};
type erros = {
  verfy: string;
  login: string;
};

interface StateError {
  errors: erros;
  setErrors: React.Dispatch<React.SetStateAction<erros>>;
}

const LandingPage = () => {
  const router = useRouter();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const who = useRef<HTMLSelectElement>(null);
  const [erros, setErrors] = useState({
    login: "",
    verfy: "",
  });

  // clear erro

  const clearError = () => {
    setErrors({
      login: "",
      verfy: "",
    });
  };

  // when is Director

  const Is_Director = async (
    obj: DataLogin,
    setErrors: React.Dispatch<React.SetStateAction<erros>>
  ) => {
    const { who, ...DirectorObject } = obj;

    try {
      const sendData = await axios.post(
        "http://localhost:4000/auth/director",
        DirectorObject
      );

      const token = sendData.headers["x-auth-token"];

      if (!token) {
        router.push("/pagnation-page/");
        return;
      }

      // Bika token muri localStorage
      localStorage.setItem("x-auth-token", token);
      console.log(token);
      router.push("/admin");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          setErrors((prev) => ({
            ...prev,
            login:
              "Your login details appear to be incorrect. Please review your email and password",
          }));
          console.log(erros.login);
        }
      } else {
        console.log("Error occurred");
      }
    }
  };

  const Is_Librarian = () => {
    console.log("Librarian function");
  };

  // check who;
  const Who_Is = (is_director: string, obj: DataLogin, Error: erros) => {
    if (
      (is_director == "DIRECTOR" && !Error.verfy) ||
      (is_director == "DIRECTOR" && !Error.login)
    ) {
      Is_Director(obj, setErrors);
    } else if (
      (is_director == "DIRECTOR" && !Error.verfy) ||
      (is_director == "DIRECTOR" && !Error.login)
    ) {
      Is_Librarian();
    } else {
      router.push("/pagnation-page/");
    }
  };

  const verfy = (data: DataLogin) => {
    if (data.who != "") {
      return data.who;
    } else {
      setErrors((prev) => ({
        ...prev,
        verfy: "Please verify all required fields",
      }));
      return "Empty";
    }
  };

  const LoginHander = (e: FormEvent) => {
    e.preventDefault();
    if (!email.current || !password.current || !who.current)
      return "empty error";
    const data = {
      email: email.current.value,
      password: password.current.value,
      who: who.current.value,
    };

    const verfied = verfy(data);
    Who_Is(verfied, data, erros);
  };

  return (
    <>
      <PageHeader />
      <div className="bg-gray-50 flex flex-col gap-5 pt-10 items-center h-screen ">
        {/* <div>
          <Image width={80} height={80} src="/image.svg" alt={""} />
        </div> */}
        <h1 className="text-2xl">
          Login <span className=" text-indigo-600 "> Niti Book </span>
        </h1>

        {erros.verfy && <ErrorBox error={erros.verfy} />}
        {erros.login && <ErrorBox error={erros.login} />}
        <form onSubmit={LoginHander} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-narmal text-gray-700 "
            >
              email
            </label>
            <input
              type="email"
              id="email"
              ref={email}
              onChange={clearError}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-narmal text-gray-700 "
            >
              Who you are
            </label>

            <select
              name=""
              ref={who}
              onChange={clearError}
              className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              id=""
            >
              <option value="">Who are you?</option>
              <option value="LIBRARIAN">Librarian</option>
              <option value="DIRECTOR">Director</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-narmal text-gray-700 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              onChange={clearError}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 "
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 w-full rounded-md  hover:bg-indigo-500 transition-all"
          >
            Log In
          </button>
        </form>

        <div>
          <ul className=" text-gray-500 text-[9px] flex gap-3  ">
            <li className="hover:underline">
              <Link href="/">privicy</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Terms</Link>
            </li>

            <li className="hover:underline">
              <Link href="/">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
