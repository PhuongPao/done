function bellClick (){
    let bellElement = document.getElementById( 'bell') 
    bellElement.classList.toggle('active')
}

document.addEventListener('click', function (e) {
    if( !document.getElementById('bell').contains( e.target&& !document.getElementById('bellIcon').contains( e.target))){
        
        //    alert ('hello') 
            let  bellElement = document.getElementById('bell') 
           if ( bellElement.matches('.active')){
            console.log(bellElement);
            bellElement.classList.remove('active')
            bellClick()
           }

        
           
        }
    }
)