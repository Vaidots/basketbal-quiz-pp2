/*jshint esversion: 6 */
/*jshint -W033 */

const getResults = () => {
    let score = localStorage.getItem("mostRecentScore");
    let finalScore = document.getElementById("finalScore");
    finalScore.innerHTML = score
}