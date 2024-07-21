function printText() {
    console.log("Hellooo");
}
// wwwroot/js/chartJsInterop.js chart.js
function destroyChart(chart) {
    if (chart) {
        chart.destroy();
    }
}

function createChart(canvasId, chartType, labels, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Labels'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }

            }
        }
    });
}
function createChartWitRegression(canvasId, chartType, labels, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');

    // Calculate the regression line data points
    var regressionData = calculateRegressionData(labels, data);

    return new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Regression Line',
                data: regressionData,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                borderDash: [5, 5],
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Labels'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        }
    });
}

    function createChartWithDots(dotNetObjectReference) {
        dotNetObjectReference.invokeMethodAsync('InstanceMethod');
    }

function createChartWithDots(canvasId, chartType, labels, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');

    // Calculate the regression line data points
    var regressionData = calculateRegressionData(labels, data);

    return new Chart(ctx, {
        type: 'scatter', // Use 'scatter' for showing only dots
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: data.map((value, index) => ({ x: index, y: value })), // Mapping data to scatter format
                backgroundColor: 'rgb(75, 192, 192)',
                showLine: false, // This ensures only dots are shown
            },
            {
                label: 'Regression Line',
                data: regressionData.map((value, index) => ({ x: index, y: value })), // Mapping regression data to scatter format
                type: 'line', // This will draw the regression line
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                borderDash: [5, 5],
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allows you to control aspect ratio
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Labels'
                    },
                    type: 'linear', // Set x-axis to linear for scatter plot
                    position: 'bottom'
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        }
    });
}

function calculateRegressionData(labels, data) {
    var n = data.length;
    var sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    for (var i = 0; i < n; i++) {
        sumX += i;
        sumY += data[i];
        sumXY += i * data[i];
        sumXX += i * i;
    }
    var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    var regressionData = [];
    for (var i = 0; i < n; i++) {
        regressionData.push(slope * i + intercept);
    }

    return regressionData;
}
