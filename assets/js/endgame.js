/*jshint esversion: 6 */
/*jshint -W033 */

const getResults = () => {
    let score = localStorage.getItem("mostRecentScore");
    let finalScore = document.getElementById("finalScore");
    finalScore.innerHTML = score
}

const saveHighScore = () => {
    let leaderboard = localStorage.getItem("leaderboard");
    if(leaderboard == null) {
        let data = {
            name: document.getElementById("username"). value,
            score: localStorage.getItem("mostRecentScore")

        }
    }
}