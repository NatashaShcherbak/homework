const li = document.querySelector('.js--table');
const table = document.createElement('table');
function createTable() {
    for (let i = 0; i <= 9; i++) {
        let row = table.insertRow();
        for (let y = 1; y <= 10; y++) {
            let cell = row.insertCell();
            cell.innerHTML = String(i * 10 + y);
        }
    }
    li.appendChild(table);
}
document.addEventListener('DOMContentLoaded', createTable);
