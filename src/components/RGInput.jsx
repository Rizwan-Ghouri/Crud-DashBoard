import { Input } from 'antd'
import React from 'react'

const RGInput = (props) => {
    const {label,onChange,disabled,type } = props;
    return (
   <Input className='m-2 placeholder:text-gray-600'
        placeholder={label}
        onChange={onChange}
        disabled={disabled}
        type={type}
   />
  )
}

export default RGInput
