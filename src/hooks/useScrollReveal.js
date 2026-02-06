import { useEffect, useState, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px'
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if(!element) return

    const abserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIsVisible(true),
          abserver.unobserve(element)
        }
      },{
        threshold,
        rootMargin
      }
    );

    abserver.observe(element)

    return () => {
      if(element){
        abserver.unobserve(element)
      }
    }

  }, [threshold, rootMargin])

  return {ref, isVisible}
}