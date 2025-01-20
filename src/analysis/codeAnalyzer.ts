import { Project } from "ts-morph";

export const analyzeCode = (filePath: string) => {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const diagnostics = sourceFile.getPreEmitDiagnostics().map((d) => d.getMessageText());
  return { diagnostics };
};