import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "antd";
import { calledMe } from "../functions/useCalledMe";
import useSeeItX from "../functions/useSeeItX";
import { Flex, Input } from 'antd';
import { Radio } from 'antd';
import useGetDFSArr from "../functions/useGetDFSArr";



function Box(){
 
    const rows = 50;
    const cols = 100;
    const [matrix,setMatrix] = useState( Array.from({ length: rows }, () => Array(cols).fill(0)) );
    let [fromX,setFromX]=useState(20);
    let [fromY,setFromY]=useState(20);
    let [toX,setToX]=useState(30);
    let [toY,setToY]=useState(30);
    function pointStartAndEnd(){
        useSeeItX([{x:fromX,y:fromY}], matrix, setMatrix,1);
        useSeeItX([{x:toX,y:toY}], matrix, setMatrix,1);
    }
    // let FinalArr =[];
    // useGetDFSArr(fromX,fromY,toX,toY,[],[],FinalArr,Array.from({ length: rows }, () => Array(cols).fill(false)));
    // console.log("dd");
    
    
    
    ///

    return (<>
    <div className="OuterBox" >
        { matrix.map((arr,r)=>{
          return  arr.map( (val,c)=> <div key={(r+10)*(c+210)}  row={r} coll={c} matrix={matrix} setMatrix={setMatrix}  className="Box" style={ { "backgroundColor":val==1 ? "Red" : "" }   } ></div> )
        } ) }
    </div>
    <div className="BottomBox" >
    <Radio.Group className="radioGrp"  >
    {/* <Radio value={1}>DFS</Radio> */}
    <Radio value={2}>BFS</Radio>  
    </Radio.Group>
    <Flex vertical gap={12} >
    <Flex horizontal gap={12} >
    <Input onChange={(e)=>{ setFromX(e.target.value) }} placeholder="From X" />
    <Input onChange={(e)=>{ setFromY(e.target.value) }} placeholder="From Y" />
    </Flex>
    <Flex horizontal gap={12} >
    <Input onChange={(e)=>{ setToX(e.target.value) }} placeholder="To X" />
    <Input onChange={(e)=>{ setToY(e.target.value) }} placeholder="To Y" />
    </Flex>
    <Flex horizontal gap={12} >
    <Button onClick={pointStartAndEnd} >Mark Points</Button>
    <Button onClick={()=>{calledMe({f:{x:fromX,y:fromY},t:{x:toX,y:toY}},matrix,setMatrix);}} >Map It</Button>
    </Flex>
    </Flex>
    </div>
    </>)
}

export default Box;