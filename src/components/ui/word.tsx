'use client'
import React,{useEffect, useRef} from 'react';
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';

type Word = {
  value: string
}
export default function Paragraph({value}: Word) {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target:element,
    offset:['start 0.8', 'start 0.3']
  })
  const sentence = value
  const characters = [...sentence];
  const words = value.split(/(?<!\p{Script=Han})(?=\p{Script=Han})|(?<=\p{Script=Han})(?!\p{Script=Han})/u);  
  return (
    <p ref={element}>
      {
      characters.map((word,index) => {
        const start = index /characters.length;
        const end = start + (1/characters.length)*0.4
        return <Word key={index} range={[start,end]} progress={scrollYProgress}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children,range,progress}: { children: React.ReactNode ,range:number[],progress: MotionValue<number>}) =>{
  const opacity = useTransform(progress,range,[0,1])
  return (
    <span className='text-[1.5rem] leading-[20px] tracking-[10px]'>
    <motion.span style={{opacity}} transition={{ ease: "easeIn" , duration:1.2}}>{children}</motion.span>
    </span>
  )
}