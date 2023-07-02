import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  description: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  company_id?: string;
}
