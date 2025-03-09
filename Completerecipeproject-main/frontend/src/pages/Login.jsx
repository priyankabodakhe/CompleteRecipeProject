import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("username", res.data.username);
            setIsLoggedIn(true);
            navigate("/home");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleLogin} style={styles.button}>Login</button>
                <p style={styles.text}>
                    New user? <Link to="/register" style={styles.link}>Register</Link>
                </p>
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    body: {
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('img2.jpg')",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    container: {
        background: "white",
        padding: "20px",
        width: "320px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        color: "#333",
        marginBottom: "20px",
    },
    input: {
        width: "90%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
    },
    button: {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "red",
        cursor: "pointer",
        transition: "0.3s",
    },
    text: {
        marginTop: "15px",
        fontSize: "14px",
        color: "#666",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
    }
};
export default Login;
