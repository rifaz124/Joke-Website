const btn = document.getElementById("btn");
const apiKey = "dGhy5qyeJFnZlW+BkvQkSA==Q2C1eCXZLO2DT3zq"
const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1"

const option = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey },
}
async function getjoke() {
    document.getElementById("joke").innerHTML = "Updating...."
    let response = await fetch(apiUrl, option);
    let data = await response.json();
    document.getElementById("joke").innerHTML = data[0].joke;
}
btn.addEventListener("click", getjoke);