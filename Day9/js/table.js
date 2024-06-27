// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const addEmployeeButton = document.getElementById('addEmployee');
    const employeeModal = document.getElementById('employeeModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const employeeForm = document.getElementById('employeeForm');
    const employeeTableBody = document.querySelector('#employeeTable tbody');
    const searchInput = document.getElementById('searchInput');
    let sortColumn = null;
    let sortOrder = 'asc';

    // Initial records
    const initialRecords = [
        { name: 'John Doe', email: 'john@example.com', status: 'Free', role: 'Developer', date: '2023-06-01' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'Busy', role: 'Designer', date: '2023-07-15' },
        { name: 'Michael Brown', email: 'michael@example.com', status: 'Working', role: 'Project Manager', date: '2023-05-10' },
        { name: 'Emily Davis', email: 'emily@example.com', status: 'On Vacation', role: 'HR Manager', date: '2023-08-20' },
        { name: 'William Johnson', email: 'william@example.com', status: 'Free', role: 'Marketing Specialist', date: '2023-04-25' },
        { name: 'Olivia Martinez', email: 'olivia@example.com', status: 'Busy', role: 'Sales Representative', date: '2023-09-10' }
    ];

    // Function to initialize table with initial records
    function initializeTable() {
        initialRecords.forEach(record => {
            addEmployeeRow(record);
        });
    }

    // Function to add a new row to the table
    function addEmployeeRow(data) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.status}</td>
            <td>${data.role}</td>
            <td>${data.date}</td>
            <td>
                <button class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
                <button class="delete-btn"><i class="fas fa-trash-alt"></i> Delete</button>
            </td>
        `;
        employeeTableBody.appendChild(row);

        // Add event listeners to the new buttons
        row.querySelector('.edit-btn').addEventListener('click', () => editEmployee(row));
        row.querySelector('.delete-btn').addEventListener('click', () => deleteEmployee(row));
    }

    // Function to edit an employee's details
    function editEmployee(row) {
        const cells = row.getElementsByTagName('td');
        const [name, email, status, role, date] = Array.from(cells).slice(0, 5).map(cell => cell.textContent);
        const modal = document.getElementById('employeeModal');
        modal.style.display = 'flex';
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('status').value = status;
        document.getElementById('role').value = role;
        document.getElementById('date').value = date;

        employeeForm.removeEventListener('submit', handleFormSubmit);
        employeeForm.addEventListener('submit', function handleFormSubmit(e) {
            e.preventDefault();
            cells[0].textContent = document.getElementById('name').value;
            cells[1].textContent = document.getElementById('email').value;
            cells[2].textContent = document.getElementById('status').value;
            cells[3].textContent = document.getElementById('role').value;
            cells[4].textContent = document.getElementById('date').value;
            modal.style.display = 'none';
            employeeForm.removeEventListener('submit', handleFormSubmit);
            employeeForm.reset();
        });
    }

    // Function to delete an employee row
    function deleteEmployee(row) {
        row.remove();
    }

    // Function to filter the table based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        Array.from(employeeTableBody.getElementsByTagName('tr')).forEach(row => {
            const cells = Array.from(row.getElementsByTagName('td')).slice(0, 5);
            const text = cells.map(cell => cell.textContent.toLowerCase()).join(' ');
            row.style.display = text.includes(query) ? '' : 'none';
        });
    });

    // Function to handle sorting by column
    function handleSorting(columnIndex) {
        const rowsArray = Array.from(employeeTableBody.rows);
        const dataType = columnIndex === 4 ? 'date' : 'string';

        rowsArray.sort((rowA, rowB) => {
            const cellA = rowA.cells[columnIndex].textContent.trim();
            const cellB = rowB.cells[columnIndex].textContent.trim();

            if (dataType === 'date') {
                const dateA = new Date(cellA);
                const dateB = new Date(cellB);
                return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            } else {
                return sortOrder === 'asc' ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
            }
        });

        // Re-append rows to maintain DOM order
        employeeTableBody.innerHTML = '';
        rowsArray.forEach(row => {
            employeeTableBody.appendChild(row);
        });
    }

    // Event listener for column header clicks to initiate sorting
    document.querySelectorAll('#employeeTable th').forEach((header, index) => {
        header.addEventListener('click', () => {
            const isCurrentlySorted = sortColumn === index;
            sortOrder = isCurrentlySorted && sortOrder === 'asc' ? 'desc' : 'asc';
            sortColumn = index;
            handleSorting(index);

            // Clear previous sorting icons
            document.querySelectorAll('#employeeTable th i').forEach(icon => {
                icon.classList.remove('fa-sort-up', 'fa-sort-down');
            });

            // Set new sorting icon
            const icon = header.querySelector('i');
            if (sortOrder === 'asc') {
                icon.classList.add('fa-sort-up');
            } else {
                icon.classList.add('fa-sort-down');
            }
        });
    });

    // Initialize table with initial records
    initializeTable();

    // Function to open modal
    addEmployeeButton.addEventListener('click', () => {
        employeeModal.style.display = 'flex';
    });

    // Function to close modal
    closeModal.addEventListener('click', () => {
        employeeModal.style.display = 'none';
    });

    // Function to handle form submission
    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(employeeForm);
        const employeeData = Object.fromEntries(formData);
        addEmployeeRow(employeeData);
        employeeForm.reset();
        employeeModal.style.display = 'none';
    });
});
