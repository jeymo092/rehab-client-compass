
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome, Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if passwords match
    if (password !== confirmPassword) {
      toast({
        title: "Password Error",
        description: "The passwords do not match. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    
    // Simulate registration - in a real app, this would call an API
    setTimeout(() => {
      toast({
        title: "Registration successful",
        description: "Your account has been created. You may now log in.",
      });
      navigate('/login');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
        <p className="text-muted-foreground">Enter your details to register</p>
      </div>
      
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
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input 
              id="password"
              type={showPassword ? "text" : "password"} 
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input pr-10"
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input 
              id="confirmPassword"
              type={showPassword ? "text" : "password"} 
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="auth-input pr-10"
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <button 
          type="button" 
          className="google-button"
        >
          <Chrome size={20} />
          <span>Continue with Google</span>
        </button>
        
        <div className="text-center pt-4">
          <span className="text-sm text-muted-foreground">
            Already have an account? 
          </span>{" "}
          <Link to="/login" className="text-sm text-rehabilitation-button hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
