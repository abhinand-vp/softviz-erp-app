import { useNavigate } from "react-router-dom";

const SubscribedCards = () => {
    const navigate = useNavigate();
    const navigateToDetailsPage = () => {
        navigate('/dashboard/subscribedapps/detailPage')
    }
    return (
        <div className='subscribed_card' onClick={navigateToDetailsPage}>
            <div className='subscribed_card_top'>
                <div>
                    <img src="/public/image/azutine 1.png" alt="" />
                    <h1>ERP</h1>
                </div>
                <p>Subscribed</p>
            </div>
            <div className='subscribed_card_bottom'>
                <p>Renew App</p>
            </div>
        </div>
    )
}

export default SubscribedCards