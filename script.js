function loadTable() {  
    const container = document.querySelector("table thead tr");
    for (let i = 1; i < 11; i++) {
        let newNode = document.createElement("th");
        newNode.innerText = `${i}° Gale/Mão`;
        newNode.setAttribute("scope", "col")
        container.appendChild(newNode);
    }
    
    const body = document.querySelector("table tbody");
    for (let i = 1; i < 11; i++) {
        let newTr = document.createElement("tr");
        
        let newNode = document.createElement("th");
        newNode.innerText = `${i}° Ciclo`;
        newNode.setAttribute("scope", "row")
        newTr.appendChild(newNode);

        for (let j = 1; j < 11; j++) { 
            newTr.innerHTML += `
            <td>
                <input type="number" class="form-control" placeholder="R$">
            </td>
            `
        }

        body.appendChild(newTr);
    }
}
function copy() {
    var copyText = document.getElementById("result");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
}
function generateJson() {
    let result = [];
    const rows = document.querySelectorAll("tr");
    for (let i = 1; i < 11; i++) {
        const columns = rows[i].querySelectorAll("input");
        result.push([]);
        for (let j = 0; j < 10; j ++) {
            if (columns[j].value !== "" && columns[j].value !== "0") {
                result[i - 1].push(parseFloat(columns[j].value))
            } else {
                if (j === 0) {
                    result.splice(i - 1, 1);
                }
                break;
            }
        }
        if (result.length < i) {
            break;
        }
    }
    var text = document.getElementById("result");
    text.value = JSON.stringify(result);
}