import { useState } from "react"

export const useToggle = (state:boolean = false):[boolean, () => void] => {
  const [open, setOpen] = useState(state)

  const handleToggle = ():void => {
    setOpen(!open)
  }

  return [open, handleToggle]
}