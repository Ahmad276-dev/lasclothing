
var men= document.getElementById('menu');
var bar = document.getElementById('bar');
var main = document.getElementById('main');
var cls = document.getElementById('cls');
bar.onclick= function() {
    men.style.display='block';
    main.style.opacity=0.6;
    
}
cls.onclick= function() {
    men.style.display='none';
    main.style.opacity=1.0;
    
}

    
    
    


