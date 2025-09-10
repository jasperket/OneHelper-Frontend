import type { SleepRequest, SleepResponse } from "@/models/sleepLog";
import apiClient from "./apiClient";

export const getSleepLogs = async (): Promise<SleepResponse[]> => {
  const response = await apiClient.get<SleepResponse[]>("/SleepLog");
  return response.data;
};

export const getSleepLogById = async (id: number): Promise<SleepResponse> => {
  const response = await apiClient.get<SleepResponse>("/SleepLog");
  return response.data;
};

export const createSleepLog = async (
  sleepLog: SleepRequest,
): Promise<SleepRequest> => {
  const response = await apiClient.post<SleepRequest>("/SleepLog", sleepLog);
  return response.data;
};

export const updateSleepLog = async (
  id: number,
  body: SleepRequest,
): Promise<SleepRequest> => {
  const response = await apiClient.put<SleepRequest>(`/SleepLog/${id}`, body);
  return response.data;
};

export const deleteSleepLog = async (id: number): Promise<void> => {
  await apiClient.delete(`/SleepLog/${id}`);
};
