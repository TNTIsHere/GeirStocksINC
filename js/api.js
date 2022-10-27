let myHeaders = new Headers();
myHeaders.append("apikey", "6W3E2LD7UPOGNMT0");

let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders
};

fetch("https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=6W3E2LD7UPOGNMT0", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log("error", error));