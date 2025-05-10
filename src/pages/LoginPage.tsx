
import React from 'react';
import AuthHeader from '@/components/AuthHeader';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-sidebar">
        <div className="max-w-md px-4 sm:px-6 lg:px-8 text-center">
          <AuthHeader />
          <div className="mt-24 space-y-6">
            <h1 className="text-5xl font-bold">Login page</h1>
            <p className="text-xl opacity-80">
              Start your journey<br />now with us
            </p>
          </div>
        </div>
      </div>
      <div className="auth-form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
