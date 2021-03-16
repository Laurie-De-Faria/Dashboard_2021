import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Body extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="page">
                <Navbar />
                <div className="page-content d-flex align-items-stretch">
                    <Sidebar />
                    <div className="content-inner">
                        <header className="page-header">
                            <Container fluid>
                                <h2 className="no-margin-bottom">Webpanel Template Header</h2>
                            </Container>
                        </header>
                        <section>
                            <Container fluid>
                                {children}
                            </Container>
                        </section>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
