import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
