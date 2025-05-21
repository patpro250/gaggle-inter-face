"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactCodeInput from "react-code-input";

type FormData = {
  code: string;
};

export default function OTPForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { code: "" },
  });

  const onSubmit = (data: FormData) => {
    alert("Code entered: " + data.code);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-h-screen max-w-xl mx-auto  bg-amber-0 flex flex-col gap-5 justify-center items-center p-10"
    >
      <Controller
        name="code"
        control={control}
        rules={{
          required: "Code is required",
          minLength: { value: 6, message: "Code must be 6 digits" },
          maxLength: { value: 6, message: "Code must be 6 digits" },
          pattern: { value: /^[0-9]+$/, message: "Only digits allowed" },
        }}
        render={({ field }) => (
          <ReactCodeInput
            {...field}
            inputMode="numeric"
            type="text"
            fields={6}
            onChange={field.onChange}
            inputStyle={{
              fontFamily: "monospace",
              borderRadius: 4,
              border: "1px solid lightgray",
              marginRight: 10,
              marginLeft: 10,
              width: 50,
              height: 50,
              fontSize: 24,
              textAlign: "center",
              outline: "none",
            }}
          />
        )}
      />
      {errors.code && (
        <p className="text-red-500 text-sm">{errors.code.message}</p>
      )}

      <button
        type="submit"
        className=" bg-primary text-white rounded px-4 py-2 w-full"
      >
        Verify
      </button>
      <p className="text-sm text-gray-400">
        The code must be exactly 6 digits long.
      </p>
    </form>
  );
}
