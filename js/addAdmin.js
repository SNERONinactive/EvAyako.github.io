const newAdmin = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        role: React.PropTypes.string.isRequired,
        src: React.PropTypes.string.isRequired,
        discord: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.DOM.li(null, 
            React.DOM.img({
                src: this.props.src,
                alt: ''
            }),
            React.DOM.div(null, 
                React.DOM.h2(null, `${this.props.username} - ${this.props.role}`),
                React.DOM.p(null, `Discord: ${this.props.discord}`)
            )
        );
    }
});

ReactDOM.render(
    React.DOM.ul({
        className: 'contacts-items contacts-container',
    }, 
        React.createElement(newAdmin, {
            username: '私はあなたのお母さんを愛しています',
            role: 'GDPS Owner',
            src: './img/devs/sasha.png',
            discord: '私はあなたのお母さんを愛しています#6603'
        }),
        React.createElement(newAdmin, {
            username: 'r1val',
            role: 'Demonlist Owner',
            src: './img/devs/rival.png',
            discord: 'r1val#3333'
        }),
        React.createElement(newAdmin, {
            username: 'Cross!Sans',
            role: 'Challengelist Owner',
            src: './img/devs/sans.png',
            discord: 'Cross!Sans (X Chara)#2904'
        }),
        React.createElement(newAdmin, {
            username: 'Once',
            role: 'Site Developer',
            src: './img/devs/main.png',
            discord: 'Once#7474'
        }),
    ), document.getElementById('adms')
);