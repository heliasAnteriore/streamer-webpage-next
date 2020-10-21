import {checkSize} from '../helpers/components/componentProps.helper';

const Text = (props) => {
  const {
    children,
    className, 
    size
  } = props

  return (
    <p className={`text-${checkSize(size)} ${className}`}>
      {children}
    </p>
  ) 
}

export default Text;