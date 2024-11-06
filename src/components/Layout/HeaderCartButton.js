//Components
import CartIcon from "../Cart/CartIcon";

//State management
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

//Styles
import classes from "../Layout/HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [highlighted, setHighlighted] = useState(false);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${highlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlighted(true);

    const timer = setTimeout(() => {
      setHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes["button-text"]}>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
