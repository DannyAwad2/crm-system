import { IAttachment } from './iattachment';
import { IProduct } from './iproduct';
import { ITeamMember } from './iteam-member';
import { IUser } from './iuser';

export type DealStatus =
  | 'proposal'
  | 'meeting'
  | 'lead'
  | 'negotiation'
  | 'win'
  | 'lose';
export type Priority = 'low' | 'medium' | 'high';

export interface IDeal {
  product: IProduct;
  user: IUser;
  status: DealStatus; // Restricted status types
  teamId: string;
  dealId: string; // Unique identifier for the deal
  createdAt: string; // ISO date format
  updatedAt: string; // ISO date format
  priority: Priority; // Priority levels
  notes: string; // Additional context or comments
  estimatedCloseDate: string; // ISO date format
  attachments: IAttachment[]; // List of attachments
  teamMembers: ITeamMember[]; // List of team members working on the deal
}

// Array of deals
const deals: IDeal[] = [
  {
    product: {
      name: 'Cloud Migration',
      price: 95000,
      description:
        'A comprehensive service to migrate enterprise systems to the cloud, ensuring minimal downtime and maximum efficiency.',
    },
    user: {
      name: 'Mr. Johnson',
      type: 'prospect',
      email: 'mr.johnson@example.com',
      phone: '+1234567890',
    },
    status: 'proposal',
    teamId: '123',
    dealId: 'D-001',
    createdAt: '2025-01-12',
    updatedAt: '2025-01-12',
    priority: 'high',
    notes:
      'Client is interested in a cloud-based solution but concerned about costs.',
    estimatedCloseDate: '2025-02-15',
    attachments: [
      {
        type: 'PDF',
        name: 'Proposal_Document.pdf',
        url: 'https://example.com/proposals/D-001.pdf',
      },
    ],
    teamMembers: [
      {
        name: 'Alice Smith',
        role: 'Sales Manager',
        email: 'alice.smith@example.com',
      },
      {
        name: 'Bob Johnson',
        role: 'Technical Consultant',
        email: 'bob.johnson@example.com',
      },
    ],
  },
  {
    product: {
      name: 'Cybersecurity Suite',
      price: 125000,
      description:
        'An advanced cybersecurity solution tailored for enterprise needs.',
    },
    user: {
      name: 'Ms. Carter',
      type: 'lead',
      email: 'ms.carter@example.com',
      phone: '+9876543210',
    },
    status: 'lead',
    teamId: '124',
    dealId: 'D-002',
    createdAt: '2025-01-10',
    updatedAt: '2025-01-11',
    priority: 'medium',
    notes:
      'Interested in cybersecurity solutions but requested more technical details.',
    estimatedCloseDate: '2025-03-01',
    attachments: [],
    teamMembers: [
      {
        name: 'David Lee',
        role: 'Account Executive',
        email: 'david.lee@example.com',
      },
    ],
  },
];
