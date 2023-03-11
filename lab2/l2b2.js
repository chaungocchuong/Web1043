var a,b,c;
a=parseInt(prompt("moi ban nhap vao a"));
b=parseInt(prompt("moi ban nhap vao b"));
c=parseInt(prompt("moi ban nhap vao c"));
if (a + b > c && b + c > a && c + a >b){
  if (a*a+b*b==c*c || b*b+c*c==a*a || c*c+a*a==b*b)
  {
    alert(`3 canh ${a}, ${b}, ${c} ban vua nhap la canh cua tam  giac vuong`);
    
  }
  else if (a==b && b==c && c==a){
     alert(`3 canh ${a}, ${b}, ${c} ban vua nhap la canh cua tam  giac deu`);
  }
  else{alert(`3 canh ${a}, ${b}, ${c} ban vua nhap la canh cua tam  giac`)}
} 
else {
    alert(`3 canh ${a}, ${b}, ${c} ban vua nhap khong phai la canh cua tam giac`);
}
