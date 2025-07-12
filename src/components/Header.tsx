import Elon from "../images/ElonMask.jpg";

type HeaderProps = {
  money: number;
  percentSpent: number;
};

function Header({ money, percentSpent }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header__banner">
          <div className="header__banner-inner container">
            <a className="header__banner-logo" href="/">
              <h1 className="header__banner-title">Spend $420.000.000.000</h1>
            </a>
          </div>
        </div>
        <div className="header__body">
          <img className='header__body-image' src={Elon} alt="Elon Mask" />
          <h2 className="header__body-title h3">Spend Elon Musk's Money</h2>
          <p className="header__body-description ">
            If Elon cashed out all of his stocks & assets today he would have
            approximately $420,000,000,000 (US Dollars) in his bank account
            (Forbes 2025).
          </p>
          <p className="header__body-description ">¿What would you spend it on?</p>
          <p className="header__body-description ">¡Have your receipt at the end!</p>
        </div>
      </header>
      <div className="header__progress">
        <div className="header__progress-inner container">
          <p className="header__progress-count">
            Remaining: $ {money.toLocaleString()}{" "}
          </p>
          <p className="header__progress-percentage">You spent: {percentSpent.toFixed(8) }%</p>
        </div>
      </div>
    </>
  );
}

export default Header;
