import Monitoring from "@google-cloud/monitoring";

const client = new Monitoring.MetricServiceClient();

export const getMetrics = async (projectId: string) => {
  const request = { name: `projects/${projectId}` };
  const [timeSeries] = await client.listTimeSeries(request);
  return timeSeries;
};