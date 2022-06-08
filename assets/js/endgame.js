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

        let list = [];
        list.push(JSON.stringify(data));
        console.log(list)
        localStorage.setItem("leaderboard", JSON.stringify(list));
    } else {
        let data = {
            name: document.getElementById("username"). value,
            score: localStorage.getItem("mostRecentScore")
        }

        console.log(leaderboard)
        leaderboard = JSONparse(leaderboard)
        leaderboard.push(JSON.stringify(data))
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    }

    window.location.href = "index.html";
}

getResults()