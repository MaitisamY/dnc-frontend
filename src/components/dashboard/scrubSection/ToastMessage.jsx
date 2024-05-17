import { Link } from 'react-router-dom'

const ToastMessage = ({ message }) => (
    <div>
        {message} <Link className="popup-button" to="/purchase-coins">Purchase Coins</Link>
    </div>
);

export default ToastMessage;