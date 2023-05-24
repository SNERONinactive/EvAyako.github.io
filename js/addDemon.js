const newDemon = React.createClass({
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
        
        React.createElement(newDemon, {
            top: 1,
            username: 'r1val',
            lvlname: 'Sakupen Hell v2',
            id: 99
        }),
        React.createElement(newDemon, {
            top: 2,
            username: 'Vitek08',
            lvlname: 'Lout',
            id: 69
        }),
        React.createElement(newDemon, {
            top: 3,
            username: 'Vitek08',
            lvlname: 'Six Cubes',
            id: 61
	  }),
        React.createElement(newDemon, {
            top: 4,
            username: 'Elytra Clutch',
            lvlname: 'Slow Motion',
            id: 88
        }),

        //
    ), document.getElementById('dl-content')
);
