import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/patients",
        data
      );
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Patient Information Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
          <input
            id="age"
            type="number"
            {...register("age", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.age && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Gender:</span>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: true })}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
              />
              <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender", { required: true })}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
              />
              <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Female</label>
            </div>
          </div>
          {errors.gender && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700">Blood Pressure:</label>
          <input
            id="bloodPressure"
            {...register("bloodPressure", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.bloodPressure && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700">Heart Rate:</label>
          <input
            id="heartRate"
            {...register("heartRate", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.heartRate && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <label htmlFor="medication" className="block text-sm font-medium text-gray-700">Medication:</label>
          <input
            id="medication"
            {...register("medication", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.medication && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place:</label>
          <input
            id="place"
            {...register("place", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          {errors.place && <span className="text-red-500 text-xs mt-1">This field is required</span>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;