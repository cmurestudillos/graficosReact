var datosBarra = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
          label: 'Chocolate',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#80c7d0',
          borderColor: 'lightblue',
          pointBackgroundColor: '#c2f0fb ',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#61dbfb'
      },               
      {
          label: 'Azucar',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
    ],
    scales:{yAxes: [{}],xAxes: [{}]},
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false
}

export default datosBarra;