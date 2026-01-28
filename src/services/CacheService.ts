import { readCacheFile, writeCacheFile } from "../utils/FileUtil";
import { GitHubIssue } from "./GithubService";

export class CacheService {
  saveIssues(repo: string, issues: GitHubIssue[]) {
    const data = readCacheFile();
    data[repo] = issues;
    writeCacheFile(data);
  }

  getIssues(repo: string): GitHubIssue[] | null {
    const data = readCacheFile();
    return data[repo] || null;
  }
}
