import useGetBFSArr from "../functions/useGetBFSArr";
import useSeeItX from "./useSeeItX";
export function calledMe(fromTo,matrix,setMatrix) {
    let Arr = useGetBFSArr(fromTo.f.x, fromTo.f.y, fromTo.t.x, fromTo.t.y);
    console.log(Arr);
    if (Arr.length === 0) {
        clearTimeout(calledMe);
        return;
    }
    const visualizeStep = () => {
        if (Arr.length === 0) return;
        useSeeItX(Arr,matrix,setMatrix,100);
        setTimeout(visualizeStep, 1);
    };
    visualizeStep();
 }
