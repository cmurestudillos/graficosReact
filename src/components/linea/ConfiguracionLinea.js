var datosLinea = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], 
    datasets: [
        {
            label: 'Pizza',
            data: [650, 590, 800, 810, 560, 550, 400],
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            label: 'Spaguetti',
            data: [280, 480, 400, 190, 860, 270, 900],
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            label: 'Macarrones',
            data: [180, 480, 770, 90, 1000, 270, 400],
            backgroundColor: '#80c7d0',
            borderColor: 'lightblue',
            pointBackgroundColor: '#c2f0fb ',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#61dbfb'
        }         
    ],
    scales: {
        xAxes: [{}],
        yAxes: [{
          id: 'y-axis-0',
          position: 'left',
      },
      {
      id: 'y-axis-1',
      position: 'right',
          gridLines: {
              color: '#61dbfb ',
          },
          ticks: {
              fontColor: '#61dbfb ',
          }
      }],
      },
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false                          
}

export default datosLinea;