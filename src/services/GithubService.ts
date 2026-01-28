import axios from "axios";

export interface GitHubIssue {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
}

export class GitHubService {
  async fetchOpenIssues(repo: string): Promise<GitHubIssue[]> {
    const url = `https://api.github.com/repos/${repo}/issues?state=open`;

    const response = await axios.get(url);

    return response.data.map((issue: any) => ({
      id: issue.id,
      title: issue.title,
      body: issue.body,
      html_url: issue.html_url,
      created_at: issue.created_at
    }));
  }
}
