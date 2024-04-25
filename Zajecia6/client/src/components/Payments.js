import React, {useState, useEffect} from "react";
import axios from "axios";
import "../stylesheets/Payments.css";
import { Link } from "react-router-dom";

const Payment = () => {
    const [payment, setPayment] = useState([]);

    const handlePayment = () => {
        axios.post("http://localhost:3001/payments", JSON.stringify(payment), {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.error(err));
    };
    return (
            <div className="payments-cont">
                <h1>Payment</h1>
                <h2>Make Payment</h2>
                <input type="text" placeholder="Card number" onChange={e => setPayment({...payment, cardNumber: e.target.value})} />
                <input type="text" placeholder="Name on card" onChange={e => setPayment({...payment, nameOnCard: e.target.value})} />
                <input type="text" placeholder="Expiry date" onChange={e => setPayment({...payment, expiryDate: e.target.value})} />
                <input type="text" placeholder="CVV" onChange={e => setPayment({...payment, cvv: e.target.value})} />
                <button className="payment-button" onClick={handlePayment}>Pay</button>
                <Link to="/cart">
                    <button className="payment-button">Back to Cart</button>
                </Link>
            </div>
    );
};

export default Payment;