import './Great-customers.css';

function GreatCustomers() {
    return(
        <div>
             <section>
                <div className="container">
                    <div className="Great-Customers">
                        <h3 className="h6 section-name">Some of Our Great Customers</h3>
                        <h2 className="h3 section-title">Some of the companies we have worked with</h2>
                        <div className="Great-Customers__logo-wrapper">
                            <svg className="Great-Customers__logo">
                                <use href="#amazon"></use>
                            </svg>
                            <div className="Great-Customers__logo">
                               <img src="project-imgae/home-page-img/svg/Great Customers section img/jeep-7.png"/>
                            </div>
                            <svg className="Great-Customers__logo">
                                <use href="#careem"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#hubspot"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#jquery"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#canon"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#fedex"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#bitcoin"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#pirelli"></use>
                            </svg>
                            <svg className="Great-Customers__logo">
                                <use href="#philips"></use>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default GreatCustomers
