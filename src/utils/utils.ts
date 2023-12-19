import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SortProps = {
arr:{
  title:string
}[],
title:string
};

export function sortTag({arr,title}:SortProps){
  return arr.find((item)=> item.title === title)
}