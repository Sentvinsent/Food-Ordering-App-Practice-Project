//Assets
import mealsImg from "../assets/meals.jpg";

//Styling
import classes from "../Layout/Header.module.scss";

//Components
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Ordering</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table full of food" />
      </div>
    </>
  );
};

export default Header;