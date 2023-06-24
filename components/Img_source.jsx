import { classNames } from '@/utils/Classname'
import Image from 'next/image'
import React from 'react'

export default function Img_source({src,customClass}) {
  return (
    <div><Image alt='Loading...' src={src} className={classNames(customClass,"h-5 w-5")} /></div>
  )
}
