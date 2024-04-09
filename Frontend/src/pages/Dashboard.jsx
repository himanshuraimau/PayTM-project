import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Appbar } from '../components/Appbar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming 'authToken' is the key for your authorization token in localStorage
                if (!token) {
                    console.error('Authorization token not found.');
                    return;
                }
                
                const response = await axios.get('http://localhost:3000/api/v1/accounts/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                console.log('Response:', response.data); // Log response data
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };
    
        fetchBalance();
    }, []);
     // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p>Loading balance...</p>
                )}
                <Users />
            </div>
        </div>
    );
};
