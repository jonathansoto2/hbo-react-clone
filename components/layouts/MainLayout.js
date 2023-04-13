import FeaturedMedia from '../UI/FeaturedMedia/FeaturedMedia';
import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav';

const MainLayout = (props) => {
    return(<div style={{
        background:'red',
        minHeight: '100vh'
    }}>
    <section className="content-container">
        <Header/>
        <SideNav/>
        {props.children}
    </section>
    </div>)
}

export default MainLayout;