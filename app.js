function game(){

    swal
    ("Wellcome To ", "TIC TAC TOE GAME!");
}


var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');
var box9 = document.getElementById('box-9');


  
function startGame(){
    

    var startgame = document.getElementById('startgame').innerHTML = 'Game Started'
    
    swal("Your Game", "START NOW!");
    
    

        box1.addEventListener('click',function(){
            box1.innerHTML = 'X'
            
            
        })
        
        box1.addEventListener('dblclick',function(){
            box1.innerHTML = '0'
            
        })
        
        box2.addEventListener('click',function(){
            box2.innerHTML = 'X'
            
        })
        
        box2.addEventListener('dblclick',function(){
            box2.innerHTML = '0'
            

        })
        
        box3.addEventListener('click',function(){
            box3.innerHTML = 'X'

        })
        
        box3.addEventListener('dblclick',function(){
            box3.innerHTML = '0'

        })
        
        box4.addEventListener('click',function(){
            box4.innerHTML = 'X'
            
        })
        
        box4.addEventListener('dblclick',function(){
            box4.innerHTML = '0'
            })
        
        box5.addEventListener('click',function(){
            box5.innerHTML = 'X'
            
        })
        
        box5.addEventListener('dblclick',function(){
            box5.innerHTML = '0'
            
        })
        
        box6.addEventListener('click',function(){
            box6.innerHTML = 'X'
            
        })
        
        box6.addEventListener('dblclick',function(){
            box6.innerHTML = '0'
            
        })
        
        box7.addEventListener('click',function(){
            box7.innerHTML = 'X'
            count++
        })
        
        box7.addEventListener('dblclick',function(){
            box7.innerHTML = '0'
            count++
        })
        
        box8.addEventListener('click',function(){
            box8.innerHTML = 'X'
            count++
        })
        
        
        box8.addEventListener('dblclick',function(){
            box8.innerHTML = '0'
            count++
        })
        
        box9.addEventListener('click',function(){
            box9.innerHTML = 'X'
            count++
                    })
        
        box9.addEventListener('dblclick',function(){
            box9.innerHTML = '0'
            
        
        })
        
        
}




function resetGame(){
    var td = document.getElementById('box-1').innerHTML = ''
    var td = document.getElementById('box-2').innerHTML = ''
    var td = document.getElementById('box-3').innerHTML = ''
    var td = document.getElementById('box-4').innerHTML = ''
    var td = document.getElementById('box-5').innerHTML = ''
    var td = document.getElementById('box-6').innerHTML = ''
    var td = document.getElementById('box-7').innerHTML = ''
    var td = document.getElementById('box-8').innerHTML = ''
    var td = document.getElementById('box-9').innerHTML = ''

}