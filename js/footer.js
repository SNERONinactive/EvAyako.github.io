const Footer = React.createClass({
    render: function() {
        return React.DOM.hr(null),
        React.DOM.div({
            className: 'footer-row'
        }, React.DOM.div({
            className: 'footer-links'
        }, React.DOM.div(null, 
            React.DOM.h2(null, 'Общее'),
            React.DOM.ul(null, 
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://discord.gg/MVADgDXFVe'
                    }, 'Discord'),
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://gofruit.space/gdps/00Wy'
                    }, 'Download')),
            ))
        ), React.DOM.div(null, 
            React.DOM.h2(null, 'Разработчик'),
            React.DOM.ul(null, 
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://github.com/EvAyako'
                    }, 'GitHub'),
                )    
            ) 
        )), React.DOM.div({
            className: 'copyright'
        }, '© NrPs 2023'));
    }
});

ReactDOM.render(
    React.createElement(Footer),
    document.getElementById('footer')
);