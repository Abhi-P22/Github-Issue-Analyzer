import { GitHubIssue } from "../services/GithubService";

export function buildPrompt(userPrompt: string, issues: GitHubIssue[]) {
  const issueText = issues.map((issue, index) =>
    `Issue ${index + 1}:
Title: ${issue.title}
Body: ${issue.body}
Created at: ${issue.created_at}
URL: ${issue.html_url}`
  ).join("\n\n");

  return `
You are an expert GitHub issue analyst.

Task:
${userPrompt}

Here are the open issues from the repository:
${issueText}

Please:
- Identify key themes
- Summarize main problems
- Recommend what maintainers should prioritize
- Respond in clear paragraphs or bullet points
`;
}
