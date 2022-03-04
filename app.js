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
let index_easy=Math.floor(Math.random() * 3);
let index_hard=Math.floor(Math.random() * 6);
easy.addEventListener('click',function(e){
  // easy.style.display='none';
  // hard.style.display='none';
  if(!(hard.querySelector('a').style.color=='white' || easy.querySelector('a').style.color=='white') || (hard.querySelector('a').style.color=='white') && index_hard>2){
    console.log('hello')
    Array.from(colours)[index_easy].style.background=hex;
    console.log(Array.from(colours)[index_easy].style.background)

    console.log(index_easy)
    let r_color2=Math.floor(Math.random() * 255);
    let g_color2=Math.floor(Math.random() * 255);
    let b_color2=Math.floor(Math.random() * 255);
    while(index_easy==index_hard){
      index_hard=Math.floor(Math.random() * 6);
    }
    hex2=rgbToHex(r_color2,g_color2,b_color2);
    Array.from(colours)[index_hard].style.background=hex2;
  }
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
  console.log(index_hard);
  // easy.style.display='none';
  // hard.style.display='none';
  if(!(hard.querySelector('a').style.color=='white' || easy.querySelector('a').style.color=='white')){
    Array.from(colours)[index_hard].style.background=hex;
  }
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
    }
    if(easy.querySelector('a').style.color=='white' && sn11==3 ){
      win.textContent='You Loose';
    }
    let sn10=0;
    if(easy.querySelector('a').style.color=='white'){
      sn10=3;
    }
    else{
      sn10=6;
    }
    console.log(c.style.background,h2.textContent)
    if(c.style.background==h2.textContent){
        Array.from(colours).slice(0,sn10).forEach(function(sn1){
          sn1.style.background=hex;
          sn1.style.display='flex';
      })
      win.style.display='block';
      new_game.style.display='block';
    }
    else{
      c.style.background='rgb(26, 24, 38)';
    }
  })
})
new_game.addEventListener('click',function(e){
  location.reload();
})
