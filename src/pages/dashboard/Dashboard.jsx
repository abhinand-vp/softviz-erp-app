import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard_page">
            <div className="dashboard_page_left">
                <div className='dashboard_page_left_profile'>
                    <img src="/public/image/avatar-41.png" alt="" />
                    <h3>Vishnu Raj</h3>
                    <p>vinesh@alphatechind.com</p>
                    <button>View Profile</button>
                </div>
            </div>
            <div className="dashboard_page_right">
                <div className='dashboard_page_right_navbar'>
                    <div>
                    <h3>Dashboard</h3>
                    </div>
                    <div>
                        <img src="/public/image/Do not Disturb iOS.png" alt="" />
                        <img src="/public/image/Fast Cart.png" alt="" />
                        <img src="/public/image/Language.png" alt="" />
                        <input type="Search" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard