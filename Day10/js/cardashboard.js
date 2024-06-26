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
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '80%'
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
                backgroundColor: ['#FFCE56', '#36A2EB'],
                hoverBackgroundColor: ['#FFCE56', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '80%'
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
                backgroundColor: ['#4BC0C0', '#36A2EB'],
                hoverBackgroundColor: ['#4BC0C0', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '80%'
        }
    });

    // Capacity Chart
    var capacityCtx = document.getElementById('capacityChart').getContext('2d');
    var capacityChart = new Chart(capacityCtx, {
        type: 'doughnut',
        data: {
            labels: ['Capacity Used', 'Remaining'],
            datasets: [{
                data: [25, 75],
                backgroundColor: ['#9966FF', '#36A2EB'],
                hoverBackgroundColor: ['#9966FF', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '80%'
        }
    });

    // Miles Chart
    var milesCtx = document.getElementById('milesChart').getContext('2d');
    var milesChart = new Chart(milesCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Miles',
                data: [50, 75, 150, 100, 200, 150, 300],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
        type: 'bar',
        data: {
            labels: ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5'],
            datasets: [{
                label: 'Number of Cars',
                data: [10, 5, 15, 20, 25],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
