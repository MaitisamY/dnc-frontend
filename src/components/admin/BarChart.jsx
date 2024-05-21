import { Bar } from 'react-chartjs-2';

// Import necessary components and hooks from Chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register components to Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    // Define data and options for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Scrubbed Files',
                data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
                backgroundColor: 'rgba(104, 102, 210, 0.2)',
                borderColor: 'rgba(104, 102, 210, 1)',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: 'Sales',
                data: [2800, 4800, 4000, 1900, 8600, 2700, 9000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: 'Coins Spent',
                data: [5850, 9000, 2040, 8120, 8640, 1550, 2700],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Detailed bar chart for Scrubbed files, Sales and Coins spent',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `$ ${context.parsed.y}`;
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return `$${value}`;
                    }
                }
            }
        }
    };

    return (
        <div className="bar-chart">
            <Bar data={data} options={options} />
        </div>
    ) 
};

export default BarChart;
