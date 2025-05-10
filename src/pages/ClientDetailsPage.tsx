import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample client data
const sampleClient = {
  id: '1',
  admissionNumber: 'MRC-2023-001',
  name: 'John Doe',
  originalHome: 'Nairobi',
  street: 'Moi Avenue',
  gender: 'Male',
  dateOfBirth: '2005-06-12',
  admissionDate: '2023-01-15',
  parentName: 'Jane Doe',
  parentContact: '+254 712 345 678',
  parentLocation: 'Nairobi, Kenya',
  relationship: 'Mother',
  registrationDate: '2023-01-15',
  status: 'discharged' as const,
  reintegrationProgram: 'Technical Training Program',
  reintegrationLocation: 'Nairobi Technical Institute',
  contactPersonnel: 'David Mwangi',
  contactDetails: '+254 722 123 456',
  reintegrationNotes: 'Enrolled in a 6-month carpentry course. Shows good progress and interest in woodworking.',
};

// Sample academic records
const sampleAcademicRecords = [
  { subject: 'Mathematics', grade: 'B+', term: '2023 Term 1', comments: 'Good progress in algebra' },
  { subject: 'English', grade: 'A-', term: '2023 Term 1', comments: 'Excellent in writing' },
  { subject: 'Science', grade: 'B', term: '2023 Term 1', comments: 'Good understanding of concepts' },
  { subject: 'Social Studies', grade: 'B+', term: '2023 Term 1', comments: 'Active participation' },
];

// Sample home visit records
const sampleHomeVisits = [
  { 
    id: '1',
    date: '2023-03-15',
    conductedBy: 'Sarah Kimani',
    department: 'Social Work',
    findings: 'Home environment is stable. Family is supportive of the rehabilitation process.',
    recommendations: 'Continue with regular follow-ups. Family counseling recommended.'
  },
  {
    id: '2',
    date: '2023-06-22',
    conductedBy: 'Daniel Ochieng',
    department: 'Psychology',
    findings: 'Client showing good adjustment at home. Parent reported improved behavior.',
    recommendations: 'Maintain current therapy plan. Consider reducing session frequency.'
  }
];

const ClientDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [client, setClient] = useState(sampleClient);
  const [academicRecords, setAcademicRecords] = useState(sampleAcademicRecords);
  const [homeVisits, setHomeVisits] = useState(sampleHomeVisits);
  
  // In a real app, this would fetch client data from an API
  useEffect(() => {
    // Simulate API call
    console.log(`Fetching details for client ID: ${id}`);
  }, [id]);
  
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-rehabilitation-purple">{client.name}</h1>
              <Badge>{client.status === 'active' ? 'Active' : client.status}</Badge>
            </div>
            <p className="text-gray-600">Admission #: {client.admissionNumber}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Edit Client</Button>
            <Button variant="default">Add Report</Button>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Academic Records</TabsTrigger>
            <TabsTrigger value="home-visits">Home Visits</TabsTrigger>
            <TabsTrigger value="reintegration">Reintegration</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Full Name:</dt>
                      <dd>{client.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Gender:</dt>
                      <dd>{client.gender}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Date of Birth:</dt>
                      <dd>{client.dateOfBirth}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Admission Date:</dt>
                      <dd>{client.admissionDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Registration Date:</dt>
                      <dd>{client.registrationDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Original Home:</dt>
                      <dd>{client.originalHome}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Street:</dt>
                      <dd>{client.street}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Parent/Guardian Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Name:</dt>
                      <dd>{client.parentName}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Relationship:</dt>
                      <dd>{client.relationship}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Contact:</dt>
                      <dd>{client.parentContact}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-500">Location:</dt>
                      <dd>{client.parentLocation}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Academic Performance</CardTitle>
                <Button size="sm">Add Record</Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="p-2">Subject</th>
                        <th className="p-2">Term</th>
                        <th className="p-2">Grade</th>
                        <th className="p-2">Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {academicRecords.map((record, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{record.subject}</td>
                          <td className="p-2">{record.term}</td>
                          <td className="p-2">
                            <Badge variant="outline" className="font-medium">
                              {record.grade}
                            </Badge>
                          </td>
                          <td className="p-2">{record.comments}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="home-visits">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Home Visit Reports</CardTitle>
                <Button size="sm">Add Home Visit</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {homeVisits.map((visit) => (
                    <div key={visit.id} className="border-b pb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                        <div>
                          <h3 className="font-medium">Visit on {visit.date}</h3>
                          <p className="text-sm text-gray-500">
                            Conducted by: {visit.conductedBy} ({visit.department})
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">View Full Report</Button>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-medium">Findings</h4>
                          <p className="text-sm">{visit.findings}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Recommendations</h4>
                          <p className="text-sm">{visit.recommendations}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reintegration">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Reintegration Program</CardTitle>
                {client.status === 'discharged' && (
                  <Button size="sm">Edit Program Details</Button>
                )}
              </CardHeader>
              <CardContent>
                {client.status === 'discharged' && client.reintegrationProgram ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Program Name</h3>
                        <p className="mt-1">{client.reintegrationProgram}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="mt-1">{client.reintegrationLocation}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Contact Person/Trainer</h3>
                        <p className="mt-1">{client.contactPersonnel}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Contact Details</h3>
                        <p className="mt-1">{client.contactDetails}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Notes</h3>
                      <p className="mt-1">{client.reintegrationNotes}</p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="text-lg font-medium mb-3">Progress Tracking</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">No progress records yet</span>
                        <Button size="sm" variant="outline">Add Progress Report</Button>
                      </div>
                    </div>
                  </div>
                ) : client.status === 'discharged' ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground mb-4">No reintegration program has been assigned yet.</p>
                    <Button>Add Reintegration Program</Button>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">
                      Reintegration program details will be available once the client completes rehabilitation.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Department Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    View department-specific reports and assessments for this client.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="font-medium">Social Work</span>
                      <span className="text-xs text-muted-foreground">3 reports</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="font-medium">Psychology</span>
                      <span className="text-xs text-muted-foreground">2 reports</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="font-medium">Education</span>
                      <span className="text-xs text-muted-foreground">4 reports</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ClientDetailsPage;
