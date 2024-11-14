import { Button } from 'antd'
import React from 'react'

const RGButton = (props) => {
  const {label,onClick,disabled,loading,type} = props;
  
    return (
    <Button className='m-2'
        type={type}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
    >{label}</Button>
  )
}

export default RGButton
