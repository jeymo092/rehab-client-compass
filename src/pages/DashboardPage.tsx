
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import ClientDataTable from '@/components/ClientDataTable';

// Sample data for demonstration
const sampleClients = [
  {
    id: '1',
    admissionNumber: 'MRC-2023-001',
    name: 'John Doe',
    originalHome: 'Nairobi',
    street: 'Moi Avenue',
    parentName: 'Jane Doe',
    parentContact: '+254 712 345 678',
    parentLocation: 'Nairobi, Kenya',
    registrationDate: '2023-01-15',
    status: 'active' as const,
  },
  {
    id: '2',
    admissionNumber: 'MRC-2023-002',
    name: 'Alice Smith',
    originalHome: 'Mombasa',
    street: 'Ocean Drive',
    parentName: 'Bob Smith',
    parentContact: '+254 723 456 789',
    parentLocation: 'Mombasa, Kenya',
    registrationDate: '2023-02-20',
    status: 'active' as const,
  },
  {
    id: '3',
    admissionNumber: 'MRC-2023-003',
    name: 'Michael Johnson',
    originalHome: 'Kisumu',
    street: 'Lake Road',
    parentName: 'Sarah Johnson',
    parentContact: '+254 734 567 890',
    parentLocation: 'Kisumu, Kenya',
    registrationDate: '2023-03-05',
    status: 'discharged' as const,
  },
];

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [role] = useState<'admin' | 'social' | 'psychology' | 'education'>('admin');
  
  const handleViewClientDetails = (id: string) => {
    navigate(`/dashboard/clients/${id}`);
  };
  
  const handleLogout = () => {
    // In a real app, this would clear authentication state
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-rehabilitation-light">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-rehabilitation-accent">MWANGAZA</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">
              Welcome, {role === 'admin' ? 'Administrator' : role === 'social' ? 'Social Worker' : role === 'psychology' ? 'Psychologist' : 'Educator'}
            </span>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-rehabilitation-purple">Dashboard</h1>
          <Button onClick={() => navigate('/dashboard/register-client')}>
            Register New Client
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42</div>
              <p className="text-xs text-muted-foreground mt-1">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">36</div>
              <p className="text-xs text-muted-foreground mt-1">
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Home Visits This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
              <p className="text-xs text-muted-foreground mt-1">
                +2 from last week
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">All Clients</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="discharged">Discharged</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardContent className="p-0">
                <ClientDataTable 
                  clients={sampleClients} 
                  onViewDetails={handleViewClientDetails}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="active">
            <Card>
              <CardContent className="p-0">
                <ClientDataTable 
                  clients={sampleClients.filter(c => c.status === 'active')} 
                  onViewDetails={handleViewClientDetails}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="discharged">
            <Card>
              <CardContent className="p-0">
                <ClientDataTable 
                  clients={sampleClients.filter(c => c.status === 'discharged')} 
                  onViewDetails={handleViewClientDetails}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardPage;
