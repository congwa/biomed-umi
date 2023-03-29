import { request } from '@umijs/max';

type Companies = {
  id: number;

  name: string | null;

  address: string | null;

  city: string | null;

  state: string | null;

  zip: string | null;

  phone: string | null;

  email: string | null;

  createdAt: Date | null;
};

type ReqCompanies = Omit<Companies, 'id' | 'createdAt'>;

export async function companiesListReq(): Promise<Companies[]> {
  return request('/v1/companies', {
    method: 'GET',
  });
}

export async function companiesAddReq(body: ReqCompanies) {
  return request('/v1/companies', {
    method: 'POST',
    data: body,
  });
}

export async function companiesEditReq(id: number, body: ReqCompanies) {
  return request(`/v1/companies/${id}`, {
    method: 'PUT',
    data: body,
  });
}

export async function companiesDelReq(id: number) {
  return request(`/v1/companies/${id}`, {
    method: 'DELETE',
  });
}
