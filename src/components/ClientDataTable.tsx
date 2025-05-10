
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface Client {
  id: string;
  admissionNumber: string;
  name: string;
  originalHome: string;
  street: string;
  parentName: string;
  parentContact: string;
  parentLocation: string;
  registrationDate: string;
  status: 'active' | 'discharged' | 'transferred';
}

interface ClientDataTableProps {
  clients: Client[];
  onViewDetails: (id: string) => void;
}

const ClientDataTable: React.FC<ClientDataTableProps> = ({ clients, onViewDetails }) => {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Admission #</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Original Home</TableHead>
            <TableHead>Parent/Guardian</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.length > 0 ? (
            clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.admissionNumber}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.originalHome}</TableCell>
                <TableCell>{client.parentName}</TableCell>
                <TableCell>{client.parentContact}</TableCell>
                <TableCell>{client.registrationDate}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    client.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : client.status === 'discharged' 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onViewDetails(client.id)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                No clients found. <Link to="/dashboard/register-client" className="text-rehabilitation-button hover:underline">Register a client</Link>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientDataTable;
