class Github {
    constructor() {
        this.access_token = "";
        // repository 수
        this.repos_count = 5;
        // repository 순서
        this.repos_sort = "created: asc";
        }
    
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}`,
            {
            headers: {
                Authorization: "token <github token code>", // 본인의 토큰 코드를 입력해야 합니다.
            },
            }
        );
    
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
            {
            headers: {
                Authorization: "token <github token code>", // 본인의 토큰 코드를 입력해야 합니다.
            },
            }
        );
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return {
            profile,
            repos,
        };
    }
}