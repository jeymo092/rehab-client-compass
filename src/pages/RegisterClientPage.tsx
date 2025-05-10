
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const RegisterClientPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    originalHome: '',
    street: '',
    gender: '',
    dateOfBirth: '',
    parentName: '',
    parentContact: '',
    parentLocation: '',
    relationship: '',
    admissionDate: format(new Date(), 'yyyy-MM-dd'),
    reintegrationProgram: '',
    reintegrationLocation: '',
    contactPersonnel: '',
    contactDetails: '',
    reintegrationNotes: '',
  });

  const [loading, setLoading] = useState(false);
  const [showReintegration, setShowReintegration] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (field: string, date: Date | undefined) => {
    if (date) {
      setFormData((prev) => ({ ...prev, [field]: format(date, 'yyyy-MM-dd') }));
    }
  };
  
  const generateAdmissionNumber = () => {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `MRC-${year}-${month}${randomDigits}`;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to register client
    setTimeout(() => {
      const admissionNumber = generateAdmissionNumber();
      toast({
        title: "Client Registered Successfully",
        description: `Admission Number: ${admissionNumber}`,
      });
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-rehabilitation-light">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-rehabilitation-accent">MWANGAZA</div>
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Register New Client
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-blue-50 p-4 rounded-md mb-4">
                <p className="text-blue-700 text-sm">
                  A unique admission number will be automatically assigned upon successful registration.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Client Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter client's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('gender', value)}
                      value={formData.gender}
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admissionDate">Admission Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.admissionDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.admissionDate ? format(new Date(formData.admissionDate), "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.admissionDate ? new Date(formData.admissionDate) : undefined}
                          onSelect={(date) => handleDateChange('admissionDate', date)}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="originalHome">Original Home</Label>
                    <Input
                      id="originalHome"
                      name="originalHome"
                      value={formData.originalHome}
                      onChange={handleChange}
                      placeholder="Enter original home location"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street">Street</Label>
                    <Input
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Enter street name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Parent/Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent/guardian name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('relationship', value)}
                      value={formData.relationship}
                    >
                      <SelectTrigger id="relationship">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other Relative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentContact">Contact Number</Label>
                    <Input
                      id="parentContact"
                      name="parentContact"
                      value={formData.parentContact}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentLocation">Location</Label>
                    <Input
                      id="parentLocation"
                      name="parentLocation"
                      value={formData.parentLocation}
                      onChange={handleChange}
                      placeholder="Enter parent/guardian location"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Reintegration Program</h3>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setShowReintegration(!showReintegration)}
                  >
                    {showReintegration ? "Hide" : "Show"} Details
                  </Button>
                </div>
                
                {showReintegration && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-md">
                    <div className="space-y-2">
                      <Label htmlFor="reintegrationProgram">Program Name</Label>
                      <Input
                        id="reintegrationProgram"
                        name="reintegrationProgram"
                        value={formData.reintegrationProgram}
                        onChange={handleChange}
                        placeholder="Enter program name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reintegrationLocation">Location</Label>
                      <Input
                        id="reintegrationLocation"
                        name="reintegrationLocation"
                        value={formData.reintegrationLocation}
                        onChange={handleChange}
                        placeholder="Enter institution location"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPersonnel">Contact Person/Trainer</Label>
                      <Input
                        id="contactPersonnel"
                        name="contactPersonnel"
                        value={formData.contactPersonnel}
                        onChange={handleChange}
                        placeholder="Enter contact person or trainer name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactDetails">Contact Details</Label>
                      <Input
                        id="contactDetails"
                        name="contactDetails"
                        value={formData.contactDetails}
                        onChange={handleChange}
                        placeholder="Enter phone or email"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="reintegrationNotes">Additional Notes</Label>
                      <Textarea
                        id="reintegrationNotes"
                        name="reintegrationNotes"
                        value={formData.reintegrationNotes}
                        onChange={handleChange}
                        placeholder="Enter any additional notes about the reintegration program"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/dashboard')}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-rehabilitation-button"
                >
                  {loading ? "Registering..." : "Register Client"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RegisterClientPage;
