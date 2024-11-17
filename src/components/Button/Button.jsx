import './Button.scss';
import { ReactComponent as ArrowIcon } from '../../assets/Icons/arrow_right.svg';

function Button({ label, variation }) {
  return (
    <>
      <button className={`button-line ${variation}`}>
        <span>{label}</span>
        <ArrowIcon/>
      </button>
    </>
  );
}

export default Button;
