function clearTableSearch(tr) {
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");

        if (tr[i].id != "header" && tr[i].id != "fecha") {
            tr[i].style.display = "";
            found = false;

            for (var j = 0; j < td.length; j++) {
                td[j].classList.remove("tableFound");
            }
        } 
    }
}

function searchInTable() {

    var input1 = document.getElementById("searchInput");
    var input2 = document.getElementById("searchInput2");

    var table = document.getElementById("historyTable");


    var tr = table.getElementsByTagName("tr");

    var filter1 = input1.value.toUpperCase();
    var filter2 = input2.value.toUpperCase();

    clearTableSearch(tr);

    if (filter1 == "" && filter2 == "") {
        return;
    }

    
    var found1 = false;
    var found2 = false;

    var both = !(filter1 == "" && filter2 != "" || filter1 != "" && filter2 == "");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");

        if (tr[i].id == "header" || tr[i].id == "fecha") {
            continue;
        }

        var finalTd = [];

        for (var j = 0; j < td.length; j++) {
            var textValue = (td[j].textContent || td[j].innerText).toUpperCase();

            if (filter1 != "" && textValue.indexOf(filter1) > -1) {
                found1 = true;
                finalTd.push(td[j]);
            }
            
            if (filter2 != "" && textValue.indexOf(filter2) > -1) {
                found2 = true;
                finalTd.push(td[j]);
            }
        }

        if ((both && found1 && found2) || (!both && (found1 || found2))) {
            tr[i].style.display = "";

            for (var m = 0; m < finalTd.length; m ++ ){
                finalTd[m].classList.add("tableFound");
            }
            
        } 
        else {
            tr[i].style.display = "none";
        }
        
        found1 = false;
        found2 = false;
    }
}

function sortTable() {
    var table = document.getElementById("ranking").tBodies[0];
    var store = [];

    for(var i = 0, len = table.rows.length; i < len; i++){
        var row = table.rows[i];

        var points  = parseFloat(row.cells[1].textContent || row.cells[1].innerText);
        var wins    = parseFloat(row.cells[3].textContent || row.cells[3].innerText);
        var draws   = parseFloat(row.cells[4].textContent || row.cells[4].innerText);
        var losses  = parseFloat(row.cells[5].textContent || row.cells[5].innerText);
   
        if (isNaN(points) || isNaN(wins) || isNaN(draws) || isNaN(losses)) {
            continue;
        }
        
        store.push([[points, wins, draws, losses], row]);
    }

    store.sort(function(x,y) {
        var pointsDiff = x[0][0] - y[0][0];
        if (pointsDiff != 0) {
            return -pointsDiff;
        }
        
        var winsDiff = x[0][1] - y[0][1];
        if (winsDiff != 0) {
            return -winsDiff;
        }
        
        var lossesDiff = x[0][3] - y[0][3];
        if (lossesDiff != 0) {
            return lossesDiff;
        }
        
        return 0;
    });

    for (var i = 0, len = store.length; i < len; i++) {
        table.appendChild(store[i][1]);
    }

    store = null;
}
