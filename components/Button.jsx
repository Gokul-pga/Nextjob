import { classNames } from '@/utils/Classname'
import React from 'react'

export default function Button({name,customClass,onclick}) {
  return (
    <button onClick={onclick} className={classNames(customClass?customClass:' bg-[#FE5BAC] text-[#fff] font-medium rounded-lg')}>
        {name}
    </button>
  )
}
