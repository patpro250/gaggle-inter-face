import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { passwordSchema } from "./passwordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { changePassword } from "./changePassword";
import toast from "react-hot-toast";

export type ChangePasswordForm = z.infer<typeof passwordSchema>;

export const ChangePasswordModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    repeat: false,
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    delete data.repeatPassword;

    const response = await changePassword(data);
    if (response.success) {
      toast.success(response.message || "Password changed successfully!");
      onClose();
    } else {
      toast.error(response.message || "An error occurred. Please try again.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-4">
          Change your Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Old Password */}
          <div className="relative">
            <label className="block text-gray-700">Old Password</label>
            <input
              {...register("oldPassword")}
              type={showPassword.old ? "text" : "password"}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300 pr-10"
              required
              onCopy={preventCopyPaste}
              onCut={preventCopyPaste}
              onPaste={preventCopyPaste}
            />
            <button
              type="button"
              onClick={() => toggleVisibility("old")}
              className="absolute top-9 right-3 text-gray-500 hover:text-primary"
            >
              {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.oldPassword && (
              <p className="text-red-500 text-sm">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-gray-700">New Password</label>
            <input
              {...register("newPassword")}
              type={showPassword.new ? "text" : "password"}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300 pr-10"
              required
              onCopy={preventCopyPaste}
              onCut={preventCopyPaste}
              onPaste={preventCopyPaste}
            />
            <button
              type="button"
              onClick={() => toggleVisibility("new")}
              className="absolute top-9 right-3 text-gray-500 hover:text-primary"
            >
              {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.newPassword && (
              <p className="text-red-500 text-sm">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Repeat Password */}
          <div className="relative">
            <label className="block text-gray-700">Repeat Password</label>
            <input
              {...register("repeatPassword")}
              type={showPassword.repeat ? "text" : "password"}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300 pr-10"
              required
              onCopy={preventCopyPaste}
              onCut={preventCopyPaste}
              onPaste={preventCopyPaste}
            />
            <button
              type="button"
              onClick={() => toggleVisibility("repeat")}
              className="absolute top-9 right-3 text-gray-500 hover:text-primary"
            >
              {showPassword.repeat ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm">
                {errors.repeatPassword.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="bg-red-400 py-2 text-white px-4 rounded-full hover:bg-red-500 transition duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
