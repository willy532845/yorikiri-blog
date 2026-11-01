// src/lib/githubCache.ts
const githubCache = new Map<string, any>();

export async function fetchRepoData(repo: string) {
  // 標準化 Repo 名稱作為 Key
  let normalizedRepo = repo.toLowerCase().trim();
  if (normalizedRepo.startsWith("http")) {
    try {
      const url = new URL(normalizedRepo);
      // 去除前面網址內容，只留下 owner/repo 部分
      normalizedRepo = url.pathname.replace(/^\/+/, ""); // 移除開頭的斜線
    } catch (error) {
      console.warn(`Invalid URL provided: ${repo}`);
      return null;
    }
  }

  // 如果快取中已有資料，直接回傳
  if (githubCache.has(normalizedRepo)) {
    console.log(`[GitHub Cache] Hit: ${normalizedRepo}`);
    return githubCache.get(normalizedRepo);
  }

  console.log(`[GitHub Fetch] Fetching: ${normalizedRepo}`);
  try {
    const response = await fetch(
      `https://api.github.com/repos/${normalizedRepo}`,
      {
        headers: {
          // 建議在 .env 加入 GITHUB_TOKEN 以增加 Rate Limit
          Authorization: import.meta.env.GITHUB_TOKEN
            ? `token ${import.meta.env.GITHUB_TOKEN}`
            : "",
          "User-Agent": "Astro-Build-Cache",
        },
      },
    );

    if (!response.ok) {
      if (response.status === 403)
        console.warn("GitHub API rate limit exceeded.");
      return null;
    }

    const data = await response.json();
    // 存入快取
    githubCache.set(normalizedRepo, data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch repo ${repo}:`, error);
    return null;
  }
}
