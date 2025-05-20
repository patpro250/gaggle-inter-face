"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  code: string[]; // array of 6 digits as strings
};

const Verfication = () => {
  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });

  // Focus logic and paste handling
  useEffect(() => {
    function focusNextInput(
      el: HTMLInputElement,
      prevId: string | null,
      nextId: string | null
    ) {
      if (el.value.length === 0 && prevId) {
        const prevEl = document.getElementById(
          prevId
        ) as HTMLInputElement | null;
        prevEl?.focus();
      } else if (el.value.length > 0 && nextId) {
        const nextEl = document.getElementById(
          nextId
        ) as HTMLInputElement | null;
        nextEl?.focus();
      }
    }

    const inputs = document.querySelectorAll<HTMLInputElement>(
      "[data-focus-input-init]"
    );

    inputs.forEach((element) => {
      element.addEventListener("keyup", function () {
        const prevId = this.getAttribute("data-focus-input-prev");
        const nextId = this.getAttribute("data-focus-input-next");
        focusNextInput(this, prevId, nextId);
      });

      element.addEventListener("paste", function (e) {
        const event = e as ClipboardEvent;
        event.preventDefault();
        const pasteData = event.clipboardData?.getData("text") || "";
        const digits = pasteData.replace(/\D/g, "").split("");

        digits.forEach((digit, idx) => {
          if (idx < 6) {
            setValue(`code.${idx}`, digit);
            const input = document.getElementById(
              `code-${idx + 1}`
            ) as HTMLInputElement | null;
            if (input) input.value = digit;
          }
        });

        // Focus after last pasted digit
        if (digits.length > 0) {
          const focusIndex = Math.min(digits.length, 6);
          const nextInput = document.getElementById(
            `code-${focusIndex}`
          ) as HTMLInputElement | null;
          nextInput?.focus();
        }
      });
    });
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    // Join array to string if needed
    const codeString = data.code.join("");
    alert("Verification code submitted: " + codeString);
    // You can send `codeString` to your backend here
  };

  return (
    <div className=" flex justify-center">
      <form
        className="max-w-sm   flex bg-amber-300 p-4 overflow-x-hidden flex-col justify-center  "
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex justify-center mb-2 space-x-6 rtl:space-x-reverse">
          {[...Array(6)].map((_, index) => (
            <Controller
              key={index}
              name={`code.${index}` as const}
              control={control}
              rules={{ required: true, pattern: /^[0-9]$/ }}
              render={({ field }) => (
                <div>
                  <label htmlFor={`code-${index + 1}`} className="sr-only">
                    Code {index + 1}
                  </label>
                  <input
                    {...field}
                    id={`code-${index + 1}`}
                    type="text"
                    maxLength={1}
                    data-focus-input-init
                    data-focus-input-prev={
                      index > 0 ? `code-${index}` : undefined
                    }
                    data-focus-input-next={
                      index < 5 ? `code-${index + 2}` : undefined
                    }
                    className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d?$/.test(val)) {
                        field.onChange(val);
                      }
                    }}
                    // Prevent entering non-digit characters
                    onKeyDown={(e) => {
                      if (
                        e.key.length === 1 &&
                        !/[0-9]/.test(e.key) &&
                        e.key !== "Backspace"
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
              )}
            />
          ))}
        </div>
        <button
          type="submit"
          className="m-5 w-80 px-4 py-1 bg-primary text-white rounded hover:opacity-99 "
        >
          Submit
        </button>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Please introduce the 6 digit code we sent via email.
        </p>
      </form>
    </div>
  );
};

export default Verfication;
