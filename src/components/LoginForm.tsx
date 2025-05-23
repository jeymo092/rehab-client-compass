
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication - in a real app, this would call an API
    setTimeout(() => {
      // Simple validation
      if (email === 'admin@mwangaza.org' && password === 'admin123') {
        toast({
          title: "Login successful",
          description: "Welcome to Mwangaza Rehabilitation Center",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Login to your account</h2>
        <p className="text-muted-foreground">Enter your credentials to access the system</p>
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
          <div className="flex justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-sm text-rehabilitation-button hover:underline">
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Input 
              id="password"
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password"
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
        
        <Button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login now"}
        </Button>
      </form>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Access is restricted to authorized personnel only.</p>
        <p>Contact system administrator for account creation.</p>
      </div>
    </div>
  );
};

export default LoginForm;
