export class Init {
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No markers found...creating...');

      var markers = [
        {
          name:'ukraine place 1',
          lat: 50.395647,
          lng: 30.3898047,
          draggable: true
        },
        {
          name:'ukraine place 2',
          lat: 50.2979339,
          lng: 30.4310034,
          draggable: true
        },
        {
          name:'ukraine place 3',
          lat: 50.2961794,
          lng: 30.2984808,
          draggable: false
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers...');
    }
  }
}
