const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  jobs: 'job',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
