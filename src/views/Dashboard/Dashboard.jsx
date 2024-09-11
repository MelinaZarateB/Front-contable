import './Dashboard.css';
import SideBar from '../../components/SideBar/SideBar';
import NavDashboard from '../../components/NavDashboard/NavDashboard';

const Dashboard = () => {
    return(
       <section className='container-dashboard'>
        <div className='container-sidebar'>
            <SideBar></SideBar>
        </div>
        <div>
            <NavDashboard></NavDashboard>
            <main>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore accusamus eius accusantium repudiandae a in quam illo ad nam ex possimus nihil veniam iure consequuntur, similique beatae quibusdam temporibus adipisci!</p>
            </main>
        </div>
       </section>
    );
}
export default Dashboard;