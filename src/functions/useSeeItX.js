function useSeeItX(Arr,matrix,setMatrix,X){
    console.log(X);
    let newMatrix=[...matrix];
    let lastElement=Arr[Arr.length-1];
    for(let i=0;i<X && i<Arr.length;i++){
        if(Arr[i].x<0) return;
        newMatrix[Arr[i].x][Arr[i].y] = 1;
    }
    for(let i=0;i<X && i<Arr.length;i++){
        Arr.shift();
    }
    if(Arr.length==0) {
        setTimeout(()=>{
            let newOne=Array.from({ length: 50 }, () => Array(100).fill(0));
            useSeeItX(lastElement.path,newOne,setMatrix,10000);
        },1)
    }
    setMatrix(newMatrix);
}

export default useSeeItX;