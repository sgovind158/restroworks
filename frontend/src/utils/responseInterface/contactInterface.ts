export interface ContactResponse {
  message: string;
  doc?: {
    createdAt: string;
    updatedAt: string;
    name: string;
    email: string;
    message: string;
    id: string;
  };
  error?: {
    status?: boolean;
    message?: string;
  };
}