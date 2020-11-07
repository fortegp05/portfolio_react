import { useEffect, useState } from 'react';

const useGetElements = (): any => {
  const [elements, setElements] = useState([] as any)
  useEffect(() => {
    const contentsList = document.querySelectorAll('H1, H2, H3')
    const elements: Element[] = []
    Array.from(contentsList, e => 
      elements.push(e)
    )
    setElements(elements)
  }, [])

  return elements;
}

export default useGetElements;