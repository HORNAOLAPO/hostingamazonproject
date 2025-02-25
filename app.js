function expand(){
 document.getElementById('menu').style.display = 'block';
 document.getElementById('opn').style.display = 'none';
 document.getElementById('cls').style.display = 'inline';
 
}
function collapse(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('opn').style.display = 'inline';
    document.getElementById('cls').style.display = 'none';
}

// Add to cart

let cart = 0;

function add(changeobject){
    if(changeobject === 'one'){
        let quantity = parseFloat(document.
            getElementById('value').value);

        cart = cart + quantity;
        document.getElementById('cartDisplay').innerText = cart;
    }else if(changeobject === 'Two'){
        let quantity = parseFloat(document.
            getElementById('value2').value);
    

    cart += quantity;
    
    document.getElementById
    ('cartDisplay').innerText = cart;

    }else if(changeobject === 'Three'){
        let quantity = parseFloat(document.getElementById('value3').value);
         
        cart += quantity;
    

    document.getElementById
    ('cartDisplay').innerText = cart;

    }else if(changeobject === 'Four'){
        let quantity = parseFloat(document.getElementById('value4').value);
         
        cart += quantity;
    

    document.getElementById
    ('cartDisplay').innerText = cart;

   }else if(changeobject === 'Five'){
    let quantity = parseFloat(document.getElementById('value5').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Six'){
    let quantity = parseFloat(document.getElementById('value6').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Seven'){
    let quantity = parseFloat(document.getElementById('value7').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Eight'){
    let quantity = parseFloat(document.getElementById('value8').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Nine'){
    let quantity = parseFloat(document.getElementById('value9').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Ten'){
    let quantity = parseFloat(document.getElementById('value10').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Eleven'){
    let quantity = parseFloat(document.getElementById('value11').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Twelve'){
    let quantity = parseFloat(document.getElementById('value12').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;

}else if(changeobject === 'Thirteen'){
    let quantity = parseFloat(document.getElementById('value13').value);
     
    cart += quantity;


document.getElementById
('cartDisplay').innerText = cart;
}
}
