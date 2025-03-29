export type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  pushed_at: string;
  language: string | null;
  screenshot_url: string;
};

export async function fetchUserRepositories(): Promise<Repository[]> {
  const response = await fetch("/api/github");
  if (!response.ok) throw new Error("Failed to fetch repositories");
  return response.json();
}
