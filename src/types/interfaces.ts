interface User {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
}

interface Project {
  description?: string;
  gatewayIds?: string[];
  image?: string;
  industry?: string;
  name: string;
  projectId: string;
  rule?: string;
  structure?: string;
  userIds?: string[];
  website?: string;
}

interface ReportRequestData {
  projectId?: string;
  from?: string;
  to?: string;
  gatewayId?: string;
}

interface Transaction {
  amount: number;
  created: string;
  gatewayId: string;
  gatewayName: string;
  modified: string;
  paymentId: string;
  projectId: string;
  userIds: string[];
}

interface GateWay {
  description: string;
  gatewayId: string;
  image: string;
  industry: string;
  name: string;
  projectId: string;
  rule: string;
  structure: string;
  userIds: string[];
  website: string;
}

interface Filters {
  byProject: boolean;
  byGateway: boolean;
}
export { User, Project, ReportRequestData, Transaction, GateWay, Filters };
