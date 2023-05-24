const newChallenge = React.createClass({
    propTypes: {
        top: React.PropTypes.number.isRequired,
        username: React.PropTypes.string.isRequired,
        lvlname: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.DOM.li({
            onClick: () => {
                window.location.href = './lvls/' + this.props.id + '.html';
                console.log('Redirect!');
            }
        }, 
            React.DOM.img({
                src: './img/lvls/' + this.props.id + '.png',
                alt: ''
            }), React.DOM.div({
                className: 'dl-item-txt'
            }, 
                React.DOM.h2(null, `#${this.props.top} - ${this.props.lvlname}`),
                React.DOM.p(null, `By ${this.props.username}`)
            )
        );
    }
});

ReactDOM.render(
    React.DOM.ul({
        className: 'dl-list'
    }, 
        //
        
        React.createElement(newChallenge, {
            top: 1,
            username: 'Aya',
            lvlname: 'ExoShere',
            src: './img/lvls/prev.png',
            id: 106
        }),
        React.createElement(newChallenge, {
            top: 2,
            username: 'Den4ik',
            lvlname: 'The silver',
            src: './img/lvls/98.png',
            id: 98
        }),

        //
    ), document.getElementById('dl-content')
);
