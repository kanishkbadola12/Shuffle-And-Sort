'use strict';

const tableData = [1,2,3,4,5,6,7,8,9];

/**
 * Create table with intial data on page load
 */
window.onload = function() {
    createTable(tableData);
};

/**
 * Shuffle tableData to any random order
 */
function shuffleTableData() {
    const tableDataClone = [...tableData];

    for (let i = 0; i < tableDataClone.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));               
        let temp = tableDataClone[i];
        tableDataClone[i] = tableDataClone[j];
        tableDataClone[j] = temp;
    }
    
    createTable(tableDataClone);
}

/**
 * Sort tableData in ascending order
 */
function sortTableData() {
    createTable(tableData);
}

/**
 * Check if data table exists or not in the View
 * @returns {Boolean} 
 */
function isTableDataExists(){
    return document.getElementById('dataTableView').innerHTML !== "";
}

/**
 * Create table from tableData and append it to the View
 * @param {Array} tableData - data for table to be created in shuffled or sorted order
 */
 function createTable(tableData) {
    if (isTableDataExists()) {
        document.getElementById('dataTable').remove();
    }

    const table = document.createElement('table');
    table.setAttribute('id', 'dataTable');
    const tableBody = document.createElement('tbody');
    let columnStartIndex = 0;
    let columnEndIndex = 3;

    for (let row = 1; row <= 3; row++) {
        const row = document.createElement('tr');
        const columnData = tableData.slice(columnStartIndex, columnEndIndex);

        for (let column = 0; column < columnData.length; column++) {
            const cell = document.createElement('td');
            cell.appendChild(document.createTextNode(columnData[column]));
            row.appendChild(cell);
        }

        columnStartIndex = columnStartIndex + 3;
        columnEndIndex = columnStartIndex + 3;
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    document.getElementById('dataTableView').appendChild(table);
    applyCellBackgroundColor(); 
}


/**
 * Apply background color to every cell of the table as per their numeric value
 */
function applyCellBackgroundColor() {
    const dataTableCells = Array.from(document.querySelectorAll('td'));

    dataTableCells.forEach(cell => {
        switch(true) {
            case cell.innerText === '1':
                cell.style.backgroundColor = '#6F98A8';
                break;
            case cell.innerText === '2':
                cell.style.backgroundColor = '#2B8EAD';
                break;
            case cell.innerText === '3':
                cell.style.backgroundColor = '#2F454E';
                break;
            case cell.innerText === '4':
                cell.style.backgroundColor = '#2B8EAD';
                break;
            case cell.innerText === '5':
                cell.style.backgroundColor = '#2F454E';
                break;
            case cell.innerText === '6':
                cell.style.backgroundColor = '#BFBFBF';
                break;
            case cell.innerText === '7':
                cell.style.backgroundColor = '#BFBFBF';
                break;
            case cell.innerText === '8':
                cell.style.backgroundColor = '#6F98A8';
                break;
            case cell.innerText === '9':
                cell.style.backgroundColor = '#2F454E';
                break;      
        }
    })
}