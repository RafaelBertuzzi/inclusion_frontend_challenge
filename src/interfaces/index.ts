import { endpoints } from '@/utils/endpoints';

export interface IResponseDTO {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}

export type TEndpoint = (typeof endpoints)[number];
