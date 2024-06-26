document.addEventListener('DOMContentLoaded', function () {
    // Energy Chart
    var energyCtx = document.getElementById('energyChart').getContext('2d');
    var energyChart = new Chart(energyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Energy Used', 'Remaining'],
            datasets: [{
                data: [45, 55],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Usage Chart
    var usageCtx = document.getElementById('usageChart').getContext('2d');
    var usageChart = new Chart(usageCtx, {
        type: 'doughnut',
        data: {
            labels: ['Usage', 'Remaining'],
            datasets: [{
                data: [157, 43],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Efficiency Chart
    var efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
    var efficiencyChart = new Chart(efficiencyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Efficiency', 'Remaining'],
            datasets: [{
                data: [9, 91],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Capacity Chart
    var capacityCtx = document.getElementById('capacityChart').getContext('2d');
    var capacityChart = new Chart(capacityCtx, {
        type: 'doughnut',
        data: {
            labels: ['Capacity', 'Remaining'],
            datasets: [{
                data: [25, 75],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Miles Chart
    var milesCtx = document.getElementById('milesChart').getContext('2d');
    var milesChart = new Chart(milesCtx, {
        type: 'bar',
        data: {
            labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
            datasets: [{
                label: 'Miles',
                data: [100, 120, 150, 180, 130, 170],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Car Chart
    var carCtx = document.getElementById('carChart').getContext('2d');
    var carChart = new Chart(carCtx, {
        type: 'line',
        data: {
            labels: ['9 AM', '11 AM', '1 PM', '3 PM', '5 PM', '7 PM'],
            datasets: [{
                label: 'Car Usage',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
