function useGetBFSArr( fromX,fromY, toX,toY ){
   let arr=[];
   let q=[{x:fromX,y:fromY,path:[{x:fromX,y:fromY}]}];
   let dir = [ [1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1] ];
   let v=Array.from({ length: 50 }, () => Array(100).fill(false));
   v[fromX][fromY]=true;
   while(q.length!=0){
      let onNode = q.shift();
      arr.push(onNode);
      if(onNode.x==toX && onNode.y==toY  ) return arr;
      dir.map( (d)=>{
         const newX = Number(onNode.x) + d[0];
         const newY =  Number(onNode.y) + d[1];
            // Check boundaries and if the new node is not visited
            if (newX >= 0 && newX < 50 && newY >= 0 && newY < 100 && !v[newX][newY]) {
                let newPathArr=[...onNode.path];
                newPathArr.push({x: newX, y: newY});
                q.push({ x: newX, y: newY , path:newPathArr }); // Add new node to the queue
                v[newX][newY] = true; // Mark as visited
            }
      } );
   }
}
export default useGetBFSArr;


// ,[1,1],[-1,-1],[-1,1],[1,-1]