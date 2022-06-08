displayLeaderboard = () => {
    let leaderboard = localStorage.getItem("leaderboard");
    leaderboard = JSON.parse(leaderboard)

    leaderboard.sort((a,b) => {
        a = JSON.parse(a)
        b =JSON.parse(b)

        return b.score - a.score;
    });
}