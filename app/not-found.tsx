// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const NotFound = () => {
//   return (
//     <div className=" flex flex-col h-screen w-screen justify-center bg-amber-0 items-center  ">
//       <Image src={"/notfound.svg"} width={300} height={300} alt={""} />
//       <h1 className="text-2xl m-2 ">
//         <span className=" text-indigo-700 font-medium m-6 ">Whoops!</span> Page
//         not found.
//       </h1>
//       <p className=" text-md text-gray-700 ">
//         The page you’re looking for doesn’t exist. But don’t worry, you can:
//       </p>
//       <div className=" text-gray-600 ">
//         Return to the
//         <Link href="/admin">
//           <span className="text-md text-indigo-700"> Home Page </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

"use client";

import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100 px-6 text-center">
      {/* Animated Cat SVG */}
      <svg
        className="w-48 h-48 mb-8"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <circle cx="32" cy="36" r="20" fill="#fbbf24" />

        {/* Ears */}
        <polygon
          className="ear-left"
          points="15,20 25,10 28,25"
          fill="#f59e0b"
        />
        <polygon
          className="ear-right"
          points="49,20 39,10 36,25"
          fill="#f59e0b"
        />

        {/* Eyes */}
        <circle cx="22" cy="35" r="4" fill="#1e40af" />
        <circle cx="42" cy="35" r="4" fill="#1e40af" />

        {/* Pupils */}
        <circle className="pupil-left" cx="22" cy="36" r="2" fill="#000" />
        <circle className="pupil-right" cx="42" cy="36" r="2" fill="#000" />

        {/* Tail */}
        <path
          className="tail"
          d="M 52 45 Q 60 40 54 30"
          stroke="#fbbf24"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-lg text-primary max-w-md mb-8">
        Looks like this curious cat couldn t find the page you re after!
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-1 bg-indigo-600 text-white rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition"
      >
        Go back home
      </Link>

      <style jsx>{`
        /* Ears twitch animation */
        .ear-left,
        .ear-right {
          transform-origin: bottom center;
          animation: twitch 3s infinite ease-in-out;
        }
        .ear-right {
          animation-delay: 1.5s;
        }
        @keyframes twitch {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        /* Pupils blink (scale Y) */
        .pupil-left,
        .pupil-right {
          transform-origin: center;
          animation: blink 4s infinite ease-in-out;
        }
        .pupil-right {
          animation-delay: 2s;
        }
        @keyframes blink {
          0%,
          10%,
          20%,
          100% {
            transform: scaleY(1);
          }
          15% {
            transform: scaleY(0.1);
          }
        }

        /* Tail wag */
        .tail {
          transform-origin: 54px 30px;
          animation: wag 2.5s infinite ease-in-out;
        }
        @keyframes wag {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
