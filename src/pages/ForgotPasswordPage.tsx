
import React, { useState } from 'react';
import AuthHeader from '@/components/AuthHeader';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending reset email
    setTimeout(() => {
      toast({
        title: "Reset link sent",
        description: "If the email exists in our system, you will receive a password reset link.",
      });
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-sidebar">
        <div className="max-w-md px-4 sm:px-6 lg:px-8 text-center">
          <AuthHeader />
          <div className="mt-24 space-y-6">
            <h1 className="text-5xl font-bold">Reset Password</h1>
            <p className="text-xl opacity-80">
              Recover access to<br />your account
            </p>
          </div>
        </div>
      </div>
      <div className="auth-form-container">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
            <p className="text-muted-foreground">
              Enter your email address to receive a password reset link
            </p>
          </div>
          
          {submitted ? (
            <div className="text-center space-y-6">
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                Password reset link sent! Check your email.
              </div>
              <p>Didn't receive the email? Check your spam folder or try again.</p>
              <Button
                onClick={() => setSubmitted(false)} 
                variant="outline"
                className="w-full"
              >
                Try again
              </Button>
              <div className="pt-4">
                <Link to="/login" className="text-rehabilitation-button hover:underline">
                  Return to login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="auth-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send reset link"}
              </Button>
              
              <div className="text-center pt-4">
                <span className="text-sm text-muted-foreground">
                  Remember your password? 
                </span>{" "}
                <Link to="/login" className="text-sm text-rehabilitation-button hover:underline">
                  Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
