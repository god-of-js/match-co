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

interface Report {
  amount: number;
  created: string;
  gatewayId: string;
  modified: string;
  paymentId: string;
  projectId: string;
  userIds: string[];
}

interface GateWay {
  description: string;
  gatewayIds: string[];
  image: string;
  industry: string;
  name: string;
  projectId: string;
  rule: string;
  structure: string;
  userIds: string[];
  website: string;
}
export { User, Project, ReportRequestData, Report, GateWay };
