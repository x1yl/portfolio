import { Repository } from "@/lib/github";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const THUMIO_TOKEN = process.env.THUMIO_TOKEN;

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/x1yl/repos", {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error("Failed to fetch repositories");
    const repos: Repository[] = await response.json();

    const processedRepos: Repository[] = repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
      .map((repo) => ({
        ...repo,
        screenshot_url: repo.homepage
          ? `https://image.thum.io/get/auth/${THUMIO_TOKEN}/maxAge/24/${repo.homepage}`
          : "/images/237-536x354.jpg",
      }));

    return Response.json(processedRepos);
  } catch (error: unknown) {
    console.error('Repository fetch error:', error);
    return Response.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}