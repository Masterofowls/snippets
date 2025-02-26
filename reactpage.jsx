import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>Welcome to My React Page</h1>
                <nav></nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            
            <main className="main-content">
                <section id="home">
                    <h2>Home Section</h2>
                    <p>Welcome to our full-page React application!</p>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2023 React Full Page</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Add this CSS to a separate styles.css file
/*
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background: #333;
    color: white;
    padding: 1rem;
}

.header nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.header nav a {
    color: white;
    text-decoration: none;
}

.main-content {
    flex: 1;
    padding: 2rem;
}

.footer {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}
*/
