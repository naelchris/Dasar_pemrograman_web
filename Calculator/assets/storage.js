const CACHE_KEY = "calculation_history"

function checkForStorage(){
    return typeof(Storage) !== "undefined"
}

function putHistory(data){
    if(checkForStorage()){
        let historyData = null
        
        //get or make storage
        if(localStorage.getItem(CACHE_KEY) === null){
            historyData = []
        }else{
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY))
        }
        //unshift is used to add new value to an array at the begining of the array ( index 0 )
        historyData.unshift(data)

        if(historyData.length > 5){
            historyData.pop()
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));;

    }
}

function showHistory(){
    if(checkForStorage()){
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || []
    }else{
        return []
    }
}

function renderHistory(){
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");

    historyList.innerHTML = ""
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
  
  
        historyList.appendChild(row);
    }

}

renderHistory();