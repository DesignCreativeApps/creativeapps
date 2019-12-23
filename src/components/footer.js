import React from 'react';

const Footer = () => {
    return (
        <section>
            <div style={{display: 'flex', fontSize: 16, height: 150}}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/images/envelope.svg' width="20" style={{ marginRight: 15 }} />
                        <span>info@creativeapps.design</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/images/github.svg' width="20" style={{ marginRight: 15 }} />
                        <span>Github</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/images/bitbucket.svg' width="20" style={{ marginRight: 15 }} />
                        <span>Bitbucket</span>
                    </div>
                </div>
                <div style={{flex: 1}}>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                        <img src='/images/logo-designcode.svg' width="20" style={{ marginRight: 15 }} />
                        <span>CREATIVE APPS</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Trento (TN), Italy</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Partita Iva IT20XXXXXX</span>
                    </div>
                </div>
            </div>
            <p style={{textAlign: 'center', fontSize: 16}}>© 2019 Creative Apps</p>
        </section>
    )
}

export default Footer;