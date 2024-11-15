function useGetDFSArr( fromX,fromY, toX,toY, DFSArr , rArr , Path , v  ){
   console.log(fromX,fromY, toX,toY, DFSArr , rArr , Path);
   if(fromX==toX && fromY==toY){
     rArr.push({x:toX,y:toY});
     if( Path.length>rArr.length || Path.length==0 ){
        Path=[...rArr];
     }
     return ;
   }
   if( !(fromX<50 && fromX>=0 && fromY>=0 && fromY<100) ) return;
   //////
   let directions = [ [0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[-1,1],[1,-1] ];
   directions.forEach( (dir)=>{
        let newX= Number(dir[0])+Number(fromX);
        let newY=Number(dir[1])+Number(fromY);
        if(newX<50 && newX>=0 && newY>=0 && newY<100 && !v[newX][newY] ){
            rArr.push({ x:newX , y:newY } );
            DFSArr.push({ x:newX , y:newY });
            v[newX][newY]=true;
            useGetDFSArr(newX,newY,toX,toY,DFSArr,rArr,Path,v);
            // v[newX][newY]=false;
            rArr.pop();
        }
   } )
}

export default useGetDFSArr;