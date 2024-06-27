document.addEventListener('DOMContentLoaded', function () {
    const customers = [
        { id: 1, name: 'Ann Culhane', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -270, deposit: 500 },
        { id: 2, name: 'Ahmad Rosser', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'paid', rate: 70, balance: 270, deposit: 500 },
        { id: 3, name: 'Zain Calzoni', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -20, deposit: 500 },
        { id: 4, name: 'Leo Stanton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'inactive', rate: 70, balance: 600, deposit: 500 },
        { id: 5, name: 'Kaiya Vetrovs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -350, deposit: 500 },
        { id: 6, name: 'Ryan Westervelt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'paid', rate: 70, balance: -270, deposit: 500 },
        { id: 7, name: 'Corey Stanton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'due', rate: 70, balance: 30, deposit: 500 },
        { id: 8, name: 'Adison Aminoff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -270, deposit: 500 },
        { id: 9, name: 'Alfredo Aminoff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'inactive', rate: 70, balance: 460, deposit: 500 }
    ];

    const tableBody = document.getElementById('customer-table-body');

    customers.forEach(customer => {
        document.addEventListener('DOMContentLoaded', function () {
            const customers = [
                { id: 1, name: 'Ann Culhane', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -270, deposit: 500 },
                { id: 2, name: 'Ahmad Rosser', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'paid', rate: 70, balance: 270, deposit: 500 },
                { id: 3, name: 'Zain Calzoni', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -20, deposit: 500 },
                { id: 4, name: 'Leo Stanton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'inactive', rate: 70, balance: 600, deposit: 500 },
                { id: 5, name: 'Kaiya Vetrovs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -350, deposit: 500 },
                { id: 6, name: 'Ryan Westervelt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'paid', rate: 70, balance: -270, deposit: 500 },
                { id: 7, name: 'Corey Stanton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'due', rate: 70, balance: 30, deposit: 500 },
                { id: 8, name: 'Adison Aminoff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'open', rate: 70, balance: -270, deposit: 500 },
                { id: 9, name: 'Alfredo Aminoff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'inactive', rate: 70, balance: 460, deposit: 500 }
            ];

            const tableBody = document.getElementById('customer-table-body');

            customers.forEach(customer => {
                const row = document.createElement('tr');

                row.innerHTML = `
            <td><input type="checkbox" class="select-row"></td>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.description}</td>
            <td><span class="status ${customer.status}">${customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}</span></td>
            <td>$${customer.rate.toFixed(2)} CAD</td>
            <td>${customer.balance < 0 ? `<span style="color:red;">$${customer.balance.toFixed(2)}</span>` : `<span style="color:green;">$${customer.balance.toFixed(2)}</span>`} CAD</td>
            <td>$${customer.deposit.toFixed(2)} CAD</td>
            <td>
                <div class="actions-dropdown">
                    <button class="dropbtn">⋮</button>
                    <div class="actions-dropdown-content">
                        <a href="#" class="view-customer">View</a>
                        <a href="#" class="edit-customer">Edit</a>
                        <a href="#" class="delete-customer">Delete</a>
                    </div>
                </div>
            </td>
        `;

                tableBody.appendChild(row);
            });

            document.getElementById('select-all').addEventListener('change', function () {
                const checkboxes = document.querySelectorAll('.select-row');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = this.checked;
                });
            });

            document.querySelectorAll('.delete-customer').forEach(button => {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    const row = this.closest('tr');
                    row.remove();
                });
            });

            document.querySelectorAll('.edit-customer').forEach(button => {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    const row = this.closest('tr');
                    const cells = row.querySelectorAll('td');
                    const customer = {
                        id: cells[1].innerText,
                        name: cells[2].innerText,
                        description: cells[3].innerText,
                        status: cells[4].innerText.toLowerCase(),
                        rate: parseFloat(cells[5].innerText.replace('$', '').replace(' CAD', '')),
                        balance: parseFloat(cells[6].innerText.replace('$', '').replace(' CAD', '')),
                        deposit: parseFloat(cells[7].innerText.replace('$', '').replace(' CAD', ''))
                    };
                    alert('Edit customer: ' + JSON.stringify(customer));
                    // Code to open a modal or form with customer details for editing
                });
            });

            document.querySelectorAll('.view-customer').forEach(button => {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    const row = this.closest('tr');
                    const cells = row.querySelectorAll('td');
                    const customer = {
                        id: cells[1].innerText,
                        name: cells[2].innerText,
                        description: cells[3].innerText,
                        status: cells[4].innerText.toLowerCase(),
                        rate: parseFloat(cells[5].innerText.replace('$', '').replace(' CAD', '')),
                        balance: parseFloat(cells[6].innerText.replace('$', '').replace(' CAD', '')),
                        deposit: parseFloat(cells[7].innerText.replace('$', '').replace(' CAD', ''))
                    };
                    alert('View customer: ' + JSON.stringify(customer));
                    // Code to view customer details in a modal or new page
                });
            });
        });

        const row = document.createElement('tr');

        row.innerHTML = `
            <td><input type="checkbox" class="select-row"></td>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.description}</td>
            <td><span class="status ${customer.status}">${customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}</span></td>
            <td>$${customer.rate.toFixed(2)} CAD</td>
            <td>${customer.balance < 0 ? `<span style="color:red;">${customer.balance.toFixed(2)}</span>` : `<span style="color:green;">${customer.balance.toFixed(2)}</span>`} CAD</td>
            <td>$${customer.deposit.toFixed(2)} CAD</td>
            <td>
                <button class="edit-customer">Edit</button>
                <button class="delete-customer">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    document.getElementById('select-all').addEventListener('change', function () {
        const checkboxes = document.querySelectorAll('.select-row');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    document.querySelectorAll('.delete-customer').forEach(button => {
        button.addEventListener('click', function () {
            const row = this.closest('tr');
            row.remove();
        });
    });

    document.querySelectorAll('.edit-customer').forEach(button => {
        button.addEventListener('click', function () {
            const row = this.closest('tr');
            const cells = row.querySelectorAll('td');
            const customer = {
                id: cells[1].innerText,
                name: cells[2].innerText,
                description: cells[3].innerText,
                status: cells[4].innerText.toLowerCase(),
                rate: parseFloat(cells[5].innerText.replace('$', '').replace(' CAD', '')),
                balance: parseFloat(cells[6].innerText.replace('$', '').replace(' CAD', '')),
                deposit: parseFloat(cells[7].innerText.replace('$', '').replace(' CAD', ''))
            };
            // Code to open a modal or form with customer details for editing
            // Update customer details in the table after editing
        });
    });
});
function editEmployee(element) {
    const row = element.closest('tr');
    const name = row.cells[1].textContent;
    const email = row.cells[2].textContent;
    const status = row.cells[3].textContent;
    const role = row.cells[4].textContent;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('status').value = status;
    document.getElementById('role').value = role;

    openForm();

    // Remove the row after opening the form
    row.parentNode.removeChild(row);
}
