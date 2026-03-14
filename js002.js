let n=5
for (let i=n;i>=1;i--){
  let r =""
  for (let s=0;s<n-i;s++){
    r+=" "
  }
  let num=1
  for(let j=0;j<i;j++){
    r+=num + " ";
    num=num*(i-j-1)/(j+1)
  }
  console.log(r)
}
