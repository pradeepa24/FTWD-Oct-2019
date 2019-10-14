let oneSrc = 'https://ctl.s6img.com/society6/img/9sHmZLZVgd1Il_KUxLEHQ_SpF8k/w_700/prints/~artwork/s6-0066/a/27439206_11445075/~~/cool-cat-k2t-prints.jpg?wait=0&attempt=0';
let otherSrc = 'https://images-na.ssl-images-amazon.com/images/I/51GfWevWFiL._SX425_.jpg';


window.onload = ()=>{


        console.log('connected')
        let btn = document.getElementById('theButton');

        
        btn.onclick = function(){
            let theImage = document.querySelector('img');
            if(theImage.getAttribute('src') === oneSrc){
                theImage.setAttribute('src', otherSrc)
            } else {
                theImage.setAttribute('src', oneSrc)
            }
        }

        document.getElementById('add-animal').onclick = function(){
            let newAnimal = document.getElementById('new-animal').value;
            // inputs do not have .innerHTML or .innerTEXT instead they have .value
            
            let list = document.querySelector('ul');
            let newThing = document.createElement('li');
            newThing.innerText = newAnimal;

            list.appendChild(newThing);

            document.getElementById('new-animal').value = "";

            newThing.onclick = turnRed;
        }

        let items = document.querySelectorAll('li');


        function turnRed(theEventObject){
            // e.currentTarget is the magical word that means the thing that you just clicked on 
            // it only works inside of event driven functions
            console.log(theEventObject.currentTarget);
            theEventObject.currentTarget.style.backgroundColor = 'tomato';
        }


    

        for(let i = 0; i < items.length; i++ ){
            items[i].onclick = turnRed;
        }

        
        
        
        
        
     


        




















}   //end window onload