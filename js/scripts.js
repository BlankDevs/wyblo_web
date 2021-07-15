// Tel Number Picker


// Line Chart
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [43, 11, 67, 98, 52, 89, 77, 40, 80, 90, 65, 29],
          label: "University of Johannesburg",
          borderColor: "#FE1ACE",
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Overall satisfaction by month'
      }
    }
  });

//   Bar Chart
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#111",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#fece1a",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});

// Horizontal Bar Chart
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#CEFE1A", "#111","#FF33A5","#FECE1A","#FFC300"],
          data: [2478,5267,734,1784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});