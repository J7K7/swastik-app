import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from React Hook Form
import HeadeingImage from '../components/HeadingImage'; // Your image component

function LoginPage() {
    // Initialize useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });
            
            const result = await response.json();
    
            if (response.ok) {
                // Handle success
                console.log('Login success:', result);
            } else {
                throw new Error(result.message || 'Login failed');
            }
        } catch (error) {
            // Handle error
            console.error('Login failed:', error.message);
        }
    };
    

    return (
        <>
            <HeadeingImage />
            <div className="login-container px-4 py-6 flex justify-center items-start">
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-2xl space-y-6"
                >
                    <div className="form-group">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('email', { required: 'Email is required' })} // Registering email field
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} {/* Display error message */}
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                            {...register('password', { required: 'Password is required' })} // Registering password field
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>} {/* Display error message */}
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
