function useSetFromAndTo(x,y,fromTo,setFromTo){
    if( fromTo.f.x!=-1 && fromTo.t.x!=-1) return false;
    else if(fromTo.f.x!=-1 && fromTo.t.x==-1){
        setFromTo ( {f:{x:fromTo.f.x,y:fromTo.f.y},t:{x:x,y:y}} );
        return true;
    }
    else{
        setFromTo ( {f:{x:x,y:y},t:{x:-1,y:-1}} );
        return false;
    }
}
export default useSetFromAndTo;