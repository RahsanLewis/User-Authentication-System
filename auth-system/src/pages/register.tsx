// pages/register.tsx
import React from 'react'
import Link from 'next/link'
import RegisterForm from '../components/RegisterForm'

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register for an account
          </h2>
        </div>
        <RegisterForm />
        <div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
<Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
