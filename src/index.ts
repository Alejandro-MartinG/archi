import { analyzeCode } from "./analysis/codeAnalyzer";
import { getMetrics } from "./gcp/monitoring";
import { askLLM } from "./llm/openAiClient";
import { CONFIG } from "./utils/config";
import { log } from "./utils/logger";

export const runAgent = async (filePath: string) => {
  log("Starting AI agent...");

  const analysisResult = analyzeCode(filePath);
  log(`Code analysis: ${JSON.stringify(analysisResult)}`);

  const metrics = await getMetrics(CONFIG.GCP_PROJECT_ID);
  log(`GCP Metrics: ${metrics.length} entries retrieved.`);

  const suggestion = await askLLM("How can I improve this project?");
  log(`AI Suggestion: ${suggestion}`);
};