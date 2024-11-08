import React from 'react';
import { useForm } from 'react-hook-form';
import HeadingImage from '../components/HeadingImage';

function ProductDetailPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('', { // Replace with your actual API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productDescription: data.productDescription,
                    valveSerialNumber: data.valveSerialNumber,
                    uW: data.uW,  // assuming checkboxes are handled with boolean values
                    oW: data.oW,  // assuming checkboxes are handled with boolean values
                    observation: data.observation,
                    stepsTaken: data.stepsTaken,
                    statusOfService: data.statusOfService,
                    workingSatisfactory: data.workingSatisfactory,
                    underObservation: data.underObservation,
                    runningWithDefect: data.runningWithDefect,
                    pending: data.pending,
                    timeIn: data.timeIn,
                    timeOut: data.timeOut,
                }),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log('Product Data Save success:', result);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Product Data Save failed:', error.message);
        }
    };    

    return (
        <>
            <HeadingImage />
            <div className="product-detail-container px-4 py-6 flex justify-center items-start">
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-2xl space-y-6"
                >
                    <h1 className="text-orange-500 font-bold underline">
                        Product Details
                    </h1>
                    
                    {/* Product Description */}
                    <div className="form-group">
                        <textarea 
                            id="productDescription" 
                            placeholder="Product Description"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none resize-none"
                            rows="1"
                            {...register('productDescription', { required: 'Product Description is required' })}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                        ></textarea>
                        {errors.productDescription && <p className="text-red-500 text-sm">{errors.productDescription.message}</p>}
                    </div>

                    {/* Valve Serial Number */}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="valveSerialNumber" 
                            placeholder="Valve Serial Number"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('valveSerialNumber', { required: 'Valve Serial Number is required' })}
                        />
                        {errors.valveSerialNumber && <p className="text-red-500 text-sm">{errors.valveSerialNumber.message}</p>}
                    </div>

                    {/* U/W Checkbox */}
                    <div className="form-group flex items-center">
                        <input 
                            type="checkbox" 
                            id="uw" 
                            {...register('uw')}
                            className="mr-2"
                        />
                        <label htmlFor="uw">U/W</label>
                    </div>

                    {/* O/W Checkbox */}
                    <div className="form-group flex items-center">
                        <input 
                            type="checkbox" 
                            id="ow" 
                            {...register('ow')}
                            className="mr-2"
                        />
                        <label htmlFor="ow">O/W</label>
                    </div>

                    {/* Observation */}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="observation" 
                            placeholder="Observation"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('observation', { required: 'Observation is required' })}
                        />
                        {errors.observation && <p className="text-red-500 text-sm">{errors.observation.message}</p>}
                    </div>

                    {/* Steps Taken */}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="stepsTaken" 
                            placeholder="Steps Taken"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('stepsTaken', { required: 'Steps Taken is required' })}
                        />
                        {errors.stepsTaken && <p className="text-red-500 text-sm">{errors.stepsTaken.message}</p>}
                    </div>

                    <div className="form-group">
                    {/* Status Of Service */}
                    <label className="font-semibold">Status Of Service</label>
                    <select
                        {...register('statusOfService', { required: 'Status of Service is required' })}
                        className="w-full px-4 py-2 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none"
                    >
                        <option value="Open">Open</option>
                        <option value="Close">Close</option>
                    </select>
                    {errors.statusOfService && <p className="text-red-500 text-sm">{errors.statusOfService.message}</p>}
                    </div>
                    <div className="form-group flex items-center">
                        <input type="checkbox" id="workingSatisfactory" {...register('workingSatisfactory')} className="mr-2" />
                        <label htmlFor="workingSatisfactory">Working Satisfactory</label>
                    </div>
                    <div className="form-group flex items-center">
                        <input type="checkbox" id="underObservation" {...register('underObservation')} className="mr-2" />
                        <label htmlFor="underObservation">Under Observation</label>
                    </div>
                    <div className="form-group flex items-center">
                        <input type="checkbox" id="runningWithDefect" {...register('runningWithDefect')} className="mr-2" />
                        <label htmlFor="runningWithDefect">Running with Defect</label>
                    </div>
                    <div className="form-group flex items-center">
                        <input type="checkbox" id="pending" {...register('pending')} className="mr-2" />
                        <label htmlFor="pending">Pending</label>
                    </div>

                    {/* Time-In */}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="timeIn" 
                            placeholder="Time-In"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('timeIn', { required: 'Time-In is required' })}
                        />
                        {errors.timeIn && <p className="text-red-500 text-sm">{errors.timeIn.message}</p>}
                    </div>

                    {/* Time-Out */}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="timeOut" 
                            placeholder="Time-Out"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('timeOut', { required: 'Time-Out is required' })}
                        />
                        {errors.timeOut && <p className="text-red-500 text-sm">{errors.timeOut.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        SAVE AND NEXT
                    </button>
                </form>
            </div>
        </>
    );
}

export default ProductDetailPage;