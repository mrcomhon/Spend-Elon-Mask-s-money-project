import Elon from "../images/ElonMask.jpg";

type HeaderProps = {
  money: number;
};

function Header({ money }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header__banner">
          <div className="header__banner-inner container">
            <a className="header__banner-logo" href="/">
              <h1 className="h2">Spend $420.000.000.000</h1>
            </a>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="header__body">
          <img src={Elon} alt="Elon Mask" />
          <h2 className="header__title h3">Spend Elon Musk's Money</h2>
          <p className="header__description ">
            If Elon cashed out all of his stocks & assets today he would have
            approximately $420,000,000,000 (US Dollars) in his bank account
            (Forbes 2025).
          </p>
          <p className="header__description ">¿What would you spend it on?</p>
          <p className="header__description ">¡Have your receipt at the end!</p>
        </div>
      </header>
      <div className="header__progress">
        <div className="header__progress-inner container">
          <p className="header__progress-count h2">
            Remaining: $ {money.toLocaleString()}{" "}
          </p>
          <p className="header__progress-percentage h2">You spent:</p>
        </div>
      </div>
    </>
  );
}

export default Header;
