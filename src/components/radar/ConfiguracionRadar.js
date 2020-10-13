var datosRadar = {
    labels: ['Comer', 'Beber', 'Dormir', 'Jugar', 'Trabajar', 'Bici', 'Correr'],
    datasets: [
      {
          label: 'Hombres',
          data: [65, 59, 90, 81, 56, 55, 40],
          backgroundColor: '#80c7d0',
          borderColor: 'lightblue',
          pointBackgroundColor: '#c2f0fb ',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#61dbfb'
      },               
      {
          label: 'Mujeres',
          data: [28, 48, 40, 19, 96, 27, 100],
          backgroundColor: 'rgb(231, 147, 167)',
          borderColor: 'rgb(231, 125, 167)',
          pointBackgroundColor: 'rgb(231, 147, 167)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
    ], 
    options:{
      legend: {
          display: true
    },
    responsive: true
  }
}

export default datosRadar;