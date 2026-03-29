import { AxiosError } from 'axios';

export type ApiError = {
  status: number;
  type?: string;
  message: string;
};

type ErrorResponse = {
  message?: string;
  type?: string;
};

export const handleApiError = (error: AxiosError): never => {
  console.error('API error:', error);

  const data = error.response?.data as ErrorResponse;

  if (error.response) {
    throw {
      status: error.response.status,
      type: data?.type,
      message: data?.message || 'Server error',
    } as ApiError;
  }

  if (error.request) {
    throw { status: 0, message: 'No response from server' } as ApiError;
  }

  throw { status: 0, message: error.message } as ApiError;
};
