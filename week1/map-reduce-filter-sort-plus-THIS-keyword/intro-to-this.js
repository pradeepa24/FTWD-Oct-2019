
let nicksCar = {
    color: 'black', 
    brand: 'honda', 
    running: false,
    sunroofOpen: false,
    wheels: 4,
    windowsOpen: false,
  }
  
  
  let jessCar = {
    color: 'red', 
    brand: 'Mazda', 
    running: false,
    sunroofOpen: false,
    wheels: 4,
    windowsOpen: false,
  }
  
  
  function toggleRoof(){
    this.sunroofOpen = !this.sunroofOpen;
  }
  
  jessCar.changeTheRoofSituation = toggleRoof;
  
   
  
  console.log();
  console.log(jessCar);
  
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  
  jessCar.changeTheRoofSituation();
  
  console.log(jessCar);
  console.log();
  
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  
  jessCar.changeTheRoofSituation();
  
  console.log(jessCar);
  console.log();
  
  