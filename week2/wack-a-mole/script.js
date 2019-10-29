window.onload = function(){

    const theMole = document.createElement('div');
    theMole.id = 'mole';
    var score = 0;



    setInterval(()=>{

        let r = Math.random();
   

    if(r > 0.85){
       let cols = document.querySelectorAll(`.row > .col`);
       for(let i=0; i < cols.length; i++){
        console.log('dissappearing')
           cols[i].innerHTML = "";
       }
        return;
    }


        if(r > 0.5){
            return;
        }



        let randomRow = Math.floor(Math.random() * 3) + 1;

        let randomColumn = Math.floor(Math.random() * 3) + 1;


            document.querySelector(`.row${randomRow} > .col${randomColumn}`)
            .appendChild(theMole)
        
  
    },500)




    // 1000 miliseconds is 1 second so this funciton will happen once every second
let columns = document.getElementsByClassName('col');
console.log(columns);
for(let i=0;i<columns.length;i++){
    console.log(columns[i]);
    columns[i].onclick = crack;
}
function crack(event) {
    console.log(event.currentTarget);
    if(event.currentTarget.querySelector('#mole') !== null){
        score += 10;
    } else {
score -= 5;
    }
    document.getElementsByTagName('h3')[0].querySelector('span').innerText = score;
}

















} // end window onload