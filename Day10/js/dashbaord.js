document.addEventListener('DOMContentLoaded', () => {
    const orderCtx = document.getElementById('orderChart').getContext('2d');
    const orderChart = new Chart(orderCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Orders',
                data: [10, 50, 70, 20, 60, 90, 120],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Online Sales',
                    data: [10000, 15000, 5000, 8000, 12000, 11000, 18000],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Offline Sales',
                    data: [12000, 13000, 20000, 7000, 13000, 15000, 15000],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25000
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10
                    }
                }
            }
        }
    });

    // const pieCtx = document.getElementById('pieChart').getContext('2d');
    // const pieChart = new Chart(pieCtx, {
    //     type: 'doughnut',
    //     data: {
    //         labels: ['Product A', 'Product B', 'Product C'],
    //         datasets: [{
    //             data: [300, 50, 100],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.6)',
    //                 'rgba(54, 162, 235, 0.6)',
    //                 'rgba(255, 206, 86, 0.6)'
    //             ],
    //             borderWidth: 8
    //         }]
    //     },
    //     options: {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 position: 'top'
    //             }
    //         }
    //     }
    // });

    const targetCtx = document.getElementById('targetChart').getContext('2d');
    const targetChart = new Chart(targetCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Reality Sales',
                    data: [5000, 6000, 7000, 8000, 9000, 10000, 11000],
                    backgroundColor: '#33C38E', // Reality Sales Color
                    borderColor: '#33C38E',
                    borderWidth: 1
                },
                {
                    label: 'Target Sales',
                    data: [7000, 8000, 9000, 10000, 11000, 12000, 13000],
                    backgroundColor: '#FEC600', // Target Sales Color
                    borderColor: '#FEC600',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 2000
                    },
                    grid: {
                        display: true,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });

    const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
    const satisfactionChart = new Chart(satisfactionCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Last Month',
                    data: [3004, 2500, 3200, 3100, 2900, 2700, 3004],
                    borderColor: '#2979ff',
                    backgroundColor: 'rgba(41, 121, 255, 0.1)',
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: 'This Month',
                    data: [3500, 3400, 3700, 3900, 3600, 4000, 4504],
                    borderColor: '#00e676',
                    backgroundColor: 'rgba(0, 230, 118, 0.1)',
                    fill: true,
                    tension: 0.4,
                }
            ]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: false
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 5,
                    backgroundColor: '#fff',
                    borderWidth: 2
                }
            }
        }
    });

    // document.addEventListener('DOMContentLoaded', () => {
    // Other chart initializations...

    const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
    const topProductsChart = new Chart(topProductsCtx, {
        type: 'bar',
        data: {
            labels: ['Home Decor Range', 'Disney Princess Pink Bag 18\'', 'Bathroom Essentials', 'Apple Smartwatches'],
            datasets: [{
                label: 'Popularity',
                data: [45, 29, 18, 25],
                backgroundColor: '#5AC53B',
                borderColor: '#5AC53B',
                borderWidth: 1,
                barPercentage: 0.6,
                categoryPercentage: 0.6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 50,
                    grid: {
                        display: true,
                        drawBorder: false,
                        color: '#e9ecef'
                    },
                    ticks: {
                        stepSize: 10,
                        color: '#6c757d',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6c757d',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#000',
                    bodyColor: '#000',
                    borderColor: '#d3d3d3',
                    borderWidth: 1,
                    bodyFont: {
                        size: 14
                    },
                    titleFont: {
                        size: 16
                    },
                    displayColors: false,
                    padding: 10
                }
            },
            elements: {
                bar: {
                    borderRadius: 5
                }
            }
        }
    });
    const totalOrderCtx = document.getElementById('totalOrderChart').getContext('2d');
    const totalOrderChart = new Chart(totalOrderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [81, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderWidth: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    const customerGrowthCtx = document.getElementById('customerGrowthChart').getContext('2d');
    const customerGrowthChart = new Chart(customerGrowthCtx, {
        type: 'doughnut',
        data: {
            labels: ['New', 'Returning'],
            datasets: [{
                data: [22, 78],
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderWidth: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    const totalRevenueCtx = document.getElementById('totalRevenueChart').getContext('2d');
    const totalRevenueChart = new Chart(totalRevenueCtx, {
        type: 'doughnut',
        data: {
            labels: ['Achieved', 'Remaining'],
            datasets: [{
                data: [62, 38],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderWidth: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
