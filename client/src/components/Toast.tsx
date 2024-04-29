import React from 'react'
import { ToastProps } from '../types'

const Toast: React.FC<ToastProps> = ({toastMessage, color}) => {
  return (
    <div className="toast">
        <div className={`${color} ${color}-info`}>
          <span>{toastMessage}</span>
        </div>
      </div>
  )
}

export default Toast