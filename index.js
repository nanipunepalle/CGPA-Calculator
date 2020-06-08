
function myfunc(){
    var x= parseFloat(document.getElementById("CAT1").value);
    var y= parseFloat(document.getElementById("CAT2").value);
    var z= parseFloat(document.getElementById("INTERNALS").value);
    var lab= parseFloat(document.getElementById("LAB").value);
    var p= parseFloat(document.getElementById("PROJECT").value);
    // var f= parseFloat(document.getElementById("FAT").value);
    var a= parseFloat(document.getElementById("ADD").value) || 0;
    var c1=x*0.3
    var c2=y*0.3
    var i=c1+c2+z+a;
    var i2 = c1+c2+z;
    var f1 = i2*2/3;
    var la = lab*2/3;
    var l = lab+lab*2/3;
    if(i>60)
    {
        theory=60+f1;
    }
    else
    {
        theory=i+f1;
    }
    if(l && !p)
         {
            l=parseInt(l)
            var total=theory*0.75 + l*0.25;
            TFat.innerHTML = "Final FAT Marks: "+f1.toPrecision(4);
            LFat.innerHTML = "Final LAB FAT Marks: "+la.toPrecision(4);
            Fat.innerHTML="Final Marks:"+total.toPrecision(4);
         }
         else if(!l && p)
         {
            p=parseInt(p)
            var total=theory*0.75+p*0.25;
            TFat.innerHTML = "Final FAT Marks: "+f1.toPrecision(4);
            Fat.innerHTML="Final Marks: "+total.toPrecision(4);
         }
        else if(l && p)
        {
            var total=theory*0.6 + l*0.2+ p*0.2;
            TFat.innerHTML = "Final FAT Marks"+f1.toPrecision(4);
            LFat.innerHTML = "Final LAB FAT Marks: "+la.toPrecision(4);
            Fat.innerHTML= "Final Marks: "+total.toPrecision(4);
        }
        else if(!l && !p)
        {
            var total=theory;
            TFat.innerHTML = "Final FAT Marks: "+f1.toPrecision(4);
            Fat.innerHTML="Final Marks: "+total.toPrecision(4);

        }
}







// function myfunc(){
//     //var c= parseFloat(document.getElementById("CREDITS").value);
//     var x= parseFloat(document.getElementById("CAT1").value);
//     var y= parseFloat(document.getElementById("CAT2").value);
//     var z= parseFloat(document.getElementById("INTERNALS").value);
//     var l= parseFloat(document.getElementById("LAB").value);
//     var p= parseFloat(document.getElementById("PROJECT").value);
//     var f= parseFloat(document.getElementById("FAT").value);
//     var a= parseFloat(document.getElementById("ADD").value) || 0;
//     // var z=parseInt(x)+parseInt(y);
//     var c1=x*0.3
//     var c2=y*0.3
//     var f1=f*(40/100);
//     var i=c1+c2+z+a;

// }


// if(i>60)
//     {
//         theory=60+f1;
//     }
//     else
//     {
//         theory=i+f1;
//     }

//     // final.innerHTML= c1+c2;
//         if(l && !p)
//          {
//             l=parseInt(l)
//             var total=theory*0.75 + l*0.25;
//             final.innerHTML=total.toPrecision(4);
//          }
//          else if(!l && p)
//          {
//             p=parseInt(p)
//             var total=theory*0.75+p*0.25;
//             final.innerHTML=total.toPrecision(4);
//          }
//         else if(l && p)
//         {
//             var total=theory*0.6 + l*0.2+ p*0.2;

//             final.innerHTML= total.toPrecision(4);
//         }
//         else if(!l && !p)
//         {
//             var total=theory;
//             final.innerHTML=total.toPrecision(4);

//         }