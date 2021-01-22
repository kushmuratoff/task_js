var canvas = document.getElementById("canvas");
var polya = canvas.getContext("2d");
var yol_b_x;
var yol_b_y;
var yol_o_x;
var yol_o_y;
var tepaga_o = canvas.width * 0.01;
var oraliq = 25;
var ong_chap = 0;
var qadam = -5;
var muljal = false;
var yurish = false;
var za, zb, kx, bx;
var buyruq = 0;
var shar_rad = 25;
var chiz_nuq = tepaga_o * 30+10;
var yurish = 0,shar_tez=5,tez_joyi=0;

document.addEventListener("keydown", keylar);

function keylar(a) {
    // alert(a.keyCode);
    if (buyruq == 0) {
        if (a.keyCode == 37) {

            if (tepaga_o * 10 + oraliq + 5 < tepaga_o * 50 + ong_chap) {
                ong_chap -= 5;

            }
        }
        if (a.keyCode == 39) {

            if (tepaga_o * 90 - oraliq - 5 > tepaga_o * 50 + ong_chap) {
                ong_chap += 5;

            }
        }
        
    }

    if(a.keyCode==32)
    {
       // if (buyruq == 0)
        {
            if (buyruq==3) {
                
                    buyruq =0;
            }

           else if (buyruq==0) {
                buyruq = 2;
                muljal = false;
            }
            else if(buyruq==2){
               
                muljal = true;
                buyruq = 1;
            }
            else if(buyruq==1)
            {
               
                za = chiz_nuq - (tepaga_o * 50 + ong_chap);
                zb = oraliq - Number(canvas.height - oraliq);
                kx = zb / za;
                bx = oraliq - kx * chiz_nuq;
                yurish = true;
                buyruq = 3;
                var xi = canvas.height - oraliq - 10;
                var yi = (xi - bx) / kx;
               }
        }
        
    }
   
}
function fon()
{
    polya.beginPath();
    
    polya.rect(0, oraliq, canvas.width, canvas.height);
    polya.fillStyle = "skyblue";
    polya.fill();
    polya.closePath();
}
function fon_tepa()
{
    polya.beginPath();

    polya.rect(0, 0, canvas.width, oraliq);
    polya.fillStyle = "blue";
    polya.fill();
    polya.closePath();
}
function shar()
{
    polya.beginPath();
    polya.arc(tepaga_o*50+ong_chap, canvas.height-oraliq, shar_rad, 0, 3.14 *2);
    polya.fillStyle = "green";
    polya.fill();
    polya.closePath();

}
var ss=0;
function shar_yurishi()
{
   
    
    var xi= canvas.height - oraliq-ss;
   
    var yi = (xi-bx)/kx;
  
    polya.beginPath();
    polya.arc(yi, xi, shar_rad, 0, 3.14 * 2);
   // alert(yi); 
    polya.fillStyle = "green";
    polya.fill();
    
    polya.closePath();
    ss += 10; shar_rad -= 0.17;
    if (xi<25) {
        
        shar_rad = 25;
         buyruq = 0; ss = 0;
        za = chiz_nuq - tepaga_o * 50 + ong_chap;
        zb = oraliq - Number(canvas.height - oraliq);
        kx = zb / za;
        bx = oraliq - kx * chiz_nuq;
    }
   
}
function yol()
{
    polya.beginPath();
    polya.moveTo(tepaga_o*30, oraliq);
    polya.lineTo(tepaga_o * 10, canvas.height);
    polya.stroke();
    polya.moveTo(tepaga_o * 70, oraliq);
    polya.lineTo(tepaga_o * 90, canvas.height);
    polya.stroke();
    polya.closePath();
}
function urish_moljali()
{
    polya.beginPath();

    polya.rect(tepaga_o*30, 0, tepaga_o*40,oraliq);
    polya.fillStyle = "aqua";
    polya.fill();
    polya.closePath();
}
function nishonni_belgilash()
{
    chiz_nuq -= qadam;
    nishonni_chiq(chiz_nuq);

    if (chiz_nuq > tepaga_o * 30+10 && chiz_nuq < tepaga_o * 70-10) {
        qadam =qadam;

    }
    else {
        qadam = -qadam;
    }
  }
function nishonni_chiq(p1)
{
    polya.beginPath();
  
    polya.fillStyle = "red";
    polya.moveTo(p1, 0);
    polya.lineTo(p1-10, 0);
    polya.lineTo(p1 + 10, 0);
    polya.lineTo(p1, 25);
  polya.lineTo(p1 - 10, 0);


    polya.strokeStyle = "black";
    polya.stroke();

    polya.fill();
    polya.closePath();
}
function tezik()
{
    polya.beginPath();
    polya.rect(0, canvas.height-150, 30, 150);
    polya.fillStyle = "brown";
    polya.fill();
    polya.closePath();

    polya.beginPath();
    polya.rect(0, canvas.height-tez_joyi, 30, tez_joyi);
    polya.fillStyle = "red";
    polya.fill();
    polya.closePath();
    tez_joyi += shar_tez;
    //nishonni_chiq(chiz_nuq);

    if (tez_joyi > 0 && tez_joyi < 150) {
        shar_tez = shar_tez;

    }
    else {
        shar_tez = -shar_tez;
    }
}
function vaqt()
{
    
    fon_tepa();
    urish_moljali();
    fon();
    yol();
    if (buyruq==2) {
        
        nishonni_belgilash();
    }
    nishonni_chiq(chiz_nuq);
    if (buyruq == 1)
    {
        tezik();
    }
    
    
    if (buyruq==3)
    {
       
        shar_yurishi();
    }
    else {
        shar();
    }
}
setInterval(vaqt, 50);
//setInterval(nishonni_belgilash, 100);