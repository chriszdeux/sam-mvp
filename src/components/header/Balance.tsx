import { useAutoCounter } from "@/hooks/useAutoCounter.hook";
import { RootState } from "@/store/store";
import { animations } from "@/styles/animations";
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";

interface Props {
  mobile?: boolean
}

export const Balance = ({mobile = false}: Props) => {
  const { user, isLogin } = useSelector((state: RootState) => state.auth);
  const {counter, animation} = useAutoCounter(user?.balance)
  if (!isLogin) return null
  return (<Typography variant={ mobile ? 'body2' : 'body1' } color="primary.main" className={animation}>Mi Balance: {counter} CR</Typography>)
}