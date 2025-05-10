
import React from 'react';
import AuthHeader from '@/components/AuthHeader';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-sidebar">
        <div className="max-w-md px-4 sm:px-6 lg:px-8 text-center">
          <AuthHeader />
          <div className="mt-24 space-y-6">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="text-xl opacity-80">
              Create an account to<br />start managing clients
            </p>
          </div>
        </div>
      </div>
      <div className="auth-form-container">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
