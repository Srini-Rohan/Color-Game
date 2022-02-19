function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let r_color=Math.floor(Math.random() * 255);
let g_color=Math.floor(Math.random() * 255);
let b_color=Math.floor(Math.random() * 255);

hex=rgbToHex(r_color,g_color,b_color);
a=document.querySelector('.a');
a.style.display='none';
b=document.querySelector('.b');
b.style.display='none';
c=document.querySelector('.c');
c.style.display='none';
d=document.querySelector('.d');
d.style.display='none';
e=document.querySelector('.e');
e.style.display='none';
f=document.querySelector('.f');
f.style.display='none';
h2=document.querySelector('h2');
let text="rgb(";
h2.textContent=text.concat(r_color.toString()).concat(', ').concat(g_color.toString()).concat(', ').concat(b_color.toString()).concat(")");
remove=document.querySelector('.remove');
eh=remove.querySelectorAll('a')
easy =document.querySelector('.Easy');
hard =document.querySelector('.Hard');

eh[0].addEventListener('click',function(e){
  easy.click();
});
eh[1].addEventListener('click',function(e){
  hard.click();
});
colours=document.querySelector('.color').children;
Array.from(colours).forEach(function(c){
  let r_color1=Math.floor(Math.random() * 255);
  let g_color1=Math.floor(Math.random() * 255);
  let b_color1=Math.floor(Math.random() * 255);
  hex1=rgbToHex(r_color1,g_color1,b_color1);
  c.style.background=hex1;
})
easy.addEventListener('click',function(e){
  easy.style.display='none';
  hard.style.display='none';
  let index=Math.floor(Math.random() * 2);
  Array.from(colours)[index].style.background=hex;

  remove.textContent='';
  easy.querySelector('a').style.color='white';
  hard.querySelector('a').style.color='black';
  a=document.querySelector('.a');
  a.style.display='flex';
  b=document.querySelector('.b');
  b.style.display='flex';
  c=document.querySelector('.c');
  c.style.display='flex';
  d=document.querySelector('.d');
  d.style.display='none';
  e=document.querySelector('.e');
  e.style.display='none';
  f=document.querySelector('.f');
  f.style.display='none';
});
hard.addEventListener('click',function(e){
  easy.style.display='none';
  hard.style.display='none';
  let index=Math.floor(Math.random() * 5);
  Array.from(colours)[index].style.background=hex;
  remove.textContent='';
  hard.querySelector('a').style.color='white';
  easy.querySelector('a').style.color='black';
  a=document.querySelector('.a');
  a.style.display='flex';
  b=document.querySelector('.b');
  b.style.display='flex';
  c=document.querySelector('.c');
  c.style.display='flex';
  d=document.querySelector('.d');
  d.style.display='flex';
  e=document.querySelector('.e');
  e.style.display='flex';
  f=document.querySelector('.f');
  f.style.display='flex';
});
new_colors=document.querySelector('.left');
new_colors.addEventListener('click',function(e){
  location.reload();
})
win=document.querySelector('.msg');
new_game=document.querySelector('.new_game');

let sn11=0;
Array.from(colours).forEach(function(c){
  sn=c.addEventListener('click',function(e){
    sn11+=1;
    if(hard.querySelector('a').style.color=='white' && sn11==6 ){
      win.textContent='You Loose';

      console.log(new_game);
    }
    if(easy.querySelector('a').style.color=='white' && sn11==3 ){
      win.textContent='You Loose';
    }
    if(c.style.background==h2.textContent){
        Array.from(colours).forEach(function(sn1){
          sn1.style.background=hex;
          sn1.style.display='flex';
      })
      win.style.display='block';
      new_game.style.display='block';
    }
    else{
      c.style.display='none';
    }
  })
})
new_game.addEventListener('click',function(e){
  location.reload();
})
