import React, { useState, useEffect } from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortUrl: ''
        }
    }
    componentDidMount() {
        this.handleAPi();
    }


    handleAPi = async () => {
        await fetch('/getallurls', {
            method: 'GET'
        })
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }
    render() {
        let { shortUrl } = this.state;
        return (
            <div className="container mt-5">
                <h1>Welcome to Short.com</h1>
                <p>Please enter your URL here</p>
                <section>
                    <form method="POST" className="my-4 form-inline">
                        <label for="fullUrl" className="sr-only">Url</label>
                        <input placeholder="Url" type="url" name="full_url" className="form-control col mr-2" />
                        <button type="button" className="btn btn-success">SHORTEN</button>
                    </form>
                </section>
                {shortUrl && <section className="mt-5">
                    <p>Here's your short URL!</p>
                    <h2>{`http://short.com/${shortUrl}`}</h2>
                </section>}
            </div>
        );
    }
};

export default Home;