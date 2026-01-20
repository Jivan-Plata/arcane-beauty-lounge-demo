function toggleMapDisplay() {
    var mapDimasalang = document.getElementById('mapDimasalang');
    if (mapDimasalang.style.display === 'none' || mapDimasalang.style.display === '') {
        mapDimasalang.style.display = 'flex';
    } else {
        mapDimasalang.style.display = 'none';
    }
}

function toggleMapDisplay1() {
    var mapDasmarinas = document.getElementById('mapDasmarinas');
    if (mapDasmarinas.style.display === 'none' || mapDasmarinas.style.display === '') {
        mapDasmarinas.style.display = 'flex';
    } else {
        mapDasmarinas.style.display = 'none';
    }
}

window.addEventListener('mouseup',function(event){
    var mapDimasalang = document.getElementById('mapDimasalang');
    if(event.target != mapDimasalang && event.target.parentNode != mapDimasalang){
        mapDimasalang.style.display = 'none';
    }
});  

window.addEventListener('mouseup',function(event){
    var mapDasmarinas = document.getElementById('mapDasmarinas');
    if(event.target != mapDasmarinas && event.target.parentNode != mapDasmarinas){
        mapDasmarinas.style.display = 'none';
    }
}); 
