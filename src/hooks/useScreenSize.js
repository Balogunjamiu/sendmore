import { useEffect, useState } from "react";

export default function useScreenSize() {
    const [viewHeight, setView ] = useState('')
    useEffect(()=>{
    setView(window.innerHeight +'px')
    },[])
  return viewHeight
}
