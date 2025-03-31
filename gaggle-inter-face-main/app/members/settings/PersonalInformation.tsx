import { Save } from "lucide-react";

const PersonalInformation = () => {
  return (
    <div className="mt-4 max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="font-bold text-2xl text-left text-primary mb-4">
        Personal Information
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-left mt-4">
          <button className="bg-primary cursor-pointer text-white py-2 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-primary-dark transition duration-300">
            <Save size={18} strokeWidth={1} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
