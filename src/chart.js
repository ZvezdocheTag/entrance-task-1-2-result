import { Chart } from 'chart.js';

function getColor(isActive, alpha = 1) {
  return isActive
    ? `rgba(54, 162, 235, ${alpha})`
    : `rgba(255, 99, 132, ${alpha})`;
}

function getLabel(i, data) {
  const x = new Date();
  x.setHours(x.getHours() - data.length + i);
  x.setMinutes(0);
  x.setSeconds(0);
  x.setMilliseconds(0);
  return x.toString();
}

export function createChart(container, data, isActive) {
  const ctx = container.getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(getLabel),
      datasets: [
        {
          data,

          borderColor: getColor(isActive),
          backgroundColor: getColor(isActive, 0.5),
          borderWidth: 1,
        }
      ]
    },
    options: {
        legend: { 
            display: false
        },
        scales: {
            xAxes: [{ ticks: { display: false } }],
            yAxes: [{ ticks: { beginAtZero: true, max: 0 } }]
        }
    }
  });

  return chart;
}
