import { Request, Response, NextFunction } from "express";
import { scanSchema, analyzeSchema } from "../schemas/IssueSchema";
import { GitHubService } from "../services/GithubService";
import { CacheService } from "../services/CacheService";
import { LLMService } from "../services/LLMService";
import { buildPrompt } from "../utils/PromptUtil";

const githubService = new GitHubService();
const cacheService = new CacheService();
const llmService = new LLMService();

export async function scanRepo(req: Request, res: Response, next: NextFunction) {
  try {
    const { repo } = scanSchema.parse(req.body);

    const issues = await githubService.fetchOpenIssues(repo);

    cacheService.saveIssues(repo, issues);

    res.json({
      repo,
      issues_fetched: issues.length,
      cached_successfully: true
    });
  } catch (error) {
    next(error);
  }
}

export async function analyzeRepo(req: Request, res: Response, next: NextFunction) {
  try {
    const { repo, prompt } = analyzeSchema.parse(req.body);

    const issues = cacheService.getIssues(repo);

    if (!issues) {
      return res.status(400).json({
        error: "Repository not scanned yet. Please call /scan first."
      });
    }

    if (issues.length === 0) {
      return res.status(400).json({
        error: "No issues cached for this repository."
      });
    }

    const finalPrompt = buildPrompt(prompt, issues);
    const analysis = await llmService.analyze(finalPrompt);

    res.json({ analysis });
  } catch (error) {
    next(error);
  }
}
