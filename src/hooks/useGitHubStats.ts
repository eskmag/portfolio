// src/hooks/useGitHubStats.ts
import { useState, useEffect } from 'react';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  loading: boolean;
  error: string | null;
}

export const useGitHubStats = (username: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalStars: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }));

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const reposData = await reposResponse.json();

        // Calculate total stars across all repositories
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        }));
      }
    };

    if (username) {
      fetchGitHubStats();
    }
  }, [username]);

  return stats;
};
