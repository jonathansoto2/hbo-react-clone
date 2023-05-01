/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal";



const Header = (props) =>{
    return(
        <>
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="fas fa-bars"/>
                </div>
                <div className="top-header__search-btn">
                    <i className="fas fa-search"/>
                </div>
            </div>
            <div className="top-header__logo">

            </div>
            <div className="top-header__account">
                <img className="top-header__user-img" src='https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490'/>
                <div className="top-header__user-name">
                    Bryan
                </div>
            </div>
            <Account/>
            <SearchModal/>
        </header>
        </>
    )
} 

export default Header;