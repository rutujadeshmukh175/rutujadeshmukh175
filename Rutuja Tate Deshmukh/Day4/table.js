function sortTable(columnIndex, ascending = true) {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.rows).slice(1); // Convert HTMLCollection to Array and skip header row

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].textContent.trim();
        let cellB = rowB.cells[columnIndex].textContent.trim();

        if (columnIndex === 2) {
            // Convert price to number for proper sorting
            cellA = parseFloat(cellA);
            cellB = parseFloat(cellB);
        } else if (columnIndex === 4) {
            // Sort product name alphabetically
            cellA = cellA.toLowerCase();
            cellB = cellB.toLowerCase();
        } else {
            // Convert numerical values to float for proper sorting
            cellA = parseFloat(cellA);
            cellB = parseFloat(cellB);
        }

        if (ascending) {
            return cellA > cellB ? 1 : -1;
        } else {
            return cellA < cellB ? 1 : -1;
        }
    });

    // Rearrange rows in table based on sorted order
    rows.forEach((row, index) => {
        table.appendChild(row); // Append each row in sorted order
    });
}

function handleSort() {
    const sortDropdown = document.getElementById("sortDropdown");
    const value = sortDropdown.value;
    const [columnIndex, order] = value.split("_");
    const ascending = order !== "desc";
    if (columnIndex) {
        sortTable(parseInt(columnIndex), ascending);
    }
}

function filterTable() {
    const filters = document.querySelectorAll('.filter-section input[type="checkbox"]:checked');
    const searchText = document.getElementById("filterInput").value.toLowerCase();
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let shouldDisplay = true; // Default to showing row

        // Check against filters
        if (filters.length > 0) {
            shouldDisplay = false; // Assume false, need to match at least one filter
            filters.forEach(filter => {
                const columnIndex = parseInt(filter.getAttribute("data-column"));
                const filterValue = filter.value.toLowerCase();
                if (cells[columnIndex].textContent.toLowerCase().includes(filterValue)) {
                    shouldDisplay = true; // Show row if any filter matches
                }
            });
        }

        // Check against search text
        if (searchText !== "" && shouldDisplay) {
            let found = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().indexOf(searchText) > -1) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                shouldDisplay = false;
            }
        }

        rows[i].style.display = shouldDisplay ? "" : "none";
    }
}

document.getElementById("filterInput").addEventListener("keyup", filterTable);
document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", filterTable);
});
