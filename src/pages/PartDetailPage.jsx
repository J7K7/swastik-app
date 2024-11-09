import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import HeadeingImage from "../components/HeadingImage";

const PartDetailPage = () => {
  // Initialize the form hook
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parts: [{ quantity: "", detail: "" }], // Default initial state
    },
  });

  // Manage an array of input fields dynamically
  const { fields, append } = useFieldArray({
    control,
    name: "parts", // This should match the field array name
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    reset()
    // You can handle the form data here
  };

  return (
    <>
      <HeadeingImage />
      <div className="login-container px-4 py-6 flex justify-center items-start">
        <form
          className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-2xl space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-orange-500 font-bold">
            Part/Parts Details
          </h1>
          {fields.map((item, index) => (
            <div key={item.id} className="form-group space-y-4">
              <div>
                <input
                  type="number"
                  placeholder="Quantity"
                  {...register(`parts.${index}.quantity`, {
                    required: "Quantity is required",
                  })}
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                />
                {errors.parts && errors.parts[index]?.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parts[index].quantity.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  placeholder="Part Description"
                  {...register(`parts.${index}.detail`, {
                    required: "Part Description is required",
                  })}
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none resize-none"
                  rows="1"
                ></textarea>
                {errors.parts && errors.parts[index]?.detail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parts[index].detail.message}
                  </p>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ quantity: "", detail: "" })}
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Add New Part
          </button>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PartDetailPage;
