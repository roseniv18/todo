import { useDispatch, useSelector } from "react-redux"
import {
    handleChange,
    register,
    handleIsRegistering
} from "../slices/userSlice"

const Register = () => {
    const {email, confirmEmail, password, confirmPassword} = useSelector(store => store.user)
    const dispatch = useDispatch()

    const onChange = (e) => {
        const {name, value} = e.target
        dispatch(handleChange({name, value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register())
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
          type="email"
          name="email"
          placeholder="email"
          onChange={onChange}
          value={email}
        />

        <input 
          type="email"
          name="confirmEmail"
          placeholder="confirm email"
          onChange={onChange}
          value={confirmEmail}
        />

        <input 
          type="password"
          name="password"
          placeholder="password"
          onChange={onChange}
          value={password}
        />

        <input 
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          onChange={onChange}
          value={confirmPassword}
        />
        <button type="submit">register</button>
        <button type="button" onClick={() => dispatch(handleIsRegistering())}>already have an account?</button>
      </form>
    </div>
  )
}

export default Register