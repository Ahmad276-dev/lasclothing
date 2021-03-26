var main = document.getElementById('main');
    var ima = document.getElementById('back');
    main.onmouseover =function(){
        ima.style.display='block';
        

    }
    main.onmouseleave =function(){
        ima.style.display='none';

    }
    var men= document.getElementById('menu');
var bar = document.getElementById('bar');

var cls = document.getElementById('cls');
bar.onclick= function() {
    men.style.display='block';
    main.style.opacity=0.6;
    
}
cls.onclick= function() {
    men.style.display='none';
    main.style.opacity=1.0;
    
}
