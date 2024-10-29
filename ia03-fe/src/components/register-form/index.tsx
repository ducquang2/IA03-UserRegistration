import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import { EMAIL_REGEX } from '../../libs/utils/constants';

type FormError = {
  email?: string, password?: string
}

const apiUrl = import.meta.env.VITE_API_URL;

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<FormError>({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'email':
        if (!value.match(EMAIL_REGEX)) {
          setErrors((prev) => ({ ...prev, email: 'Invalid email format' }))
        } else {
          setErrors((prev) => ({ ...prev, email: undefined }))
        }
        break;
      case 'password':
        if (value.length < 8) {
          setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }))
        } else {
          setErrors((prev) => ({ ...prev, password: undefined }))
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormError = {};

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data (e.g., to an API)
      try {

        const response = await fetch(`${apiUrl}/users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json(); // Try to parse error response
          setApiError(errorData.message || 'Registration failed'); // Use message from server or generic message
        } else {
          setApiError(''); // Clear error if successful
          console.log('Registration successful!');
          navigate('/'); // Navigate to dashboard
        }
      } catch (error) {
        setApiError('An unexpected error occurred');
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Error:</strong> {apiError}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={
                classNames(
                  "block text-gray-700 font-bold mb-2",
                  { "text-red-500": errors.email }
                )
              }>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className={
                classNames(
                  "block text-gray-700 font-bold mb-2",
                  { "text-red-500": errors.password }
                )
              }>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}