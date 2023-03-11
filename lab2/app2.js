let a;
a=parseInt(prompt("moi nhap vao a"));
let b;
b=parseInt(prompt("moi nhap vao b"));
let c;
c=parseInt(prompt("moi nhap vao c"));
let delta =b*b-4*a*c;
let x1, x2;
if(delta ==0){
    x1=x2 = -b/(2 * a);
    alert(`phuong trinh co nghiem la ${x1}`);
}
else if (delta < 0){
    alert("phuong trinh vo nghiem"); 
}
else {
    x1 = (-b + Math.sqrt(delta))/(2 * a);
    x2 = (-b - Math.sqrt(delta))/(2 * a);
    alert(`phuong trinh co 2 nghiem x1 = ${x1} x2 = ${x2}`);
}