# Initial Project Structure

``` 
├── ai-agent/
│   ├── src/
│   │   ├── analysis/
│   │   │   ├── codeAnalyzer.ts       # Module for code analysis.
│   │   ├── gcp/
│   │   │   ├── monitoring.ts         # Modulo to connect with Google Cloud Monitoring.
│   │   │   ├── logging.ts            # Modulo to connect with Google Cloud Logging.
│   │   ├── llm/
│   │   │   ├── openAiClient.ts       # Client to connect with the OpenAI API.
│   │   ├── utils/
│   │   │   ├── config.ts             # Common config (e.g., API keys, URLs).
│   │   │   ├── logger.ts             # Local logs
│   │   ├── index.ts                  # Entry point for the agent.
│   ├── test/
│   │   ├── analysis.test.ts
│   │   ├── gcp.test.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
``` 
