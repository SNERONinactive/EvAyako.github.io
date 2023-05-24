const newDemon = React.createClass({
    propTypes: {
        top: React.PropTypes.number.isRequired,
        username: React.PropTypes.string.isRequired,
        lvlname: React.PropTypes.string.isRequired,
        src: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.DOM.li({
            onClick: () => {
                window.location.href = './lvls/' + this.props.id + '.html';
            }
        }, 
            React.DOM.img({
                src: this.props.src,
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
            src: './img/lvls/99.png',
            id: 99
        }),
        React.createElement(newDemon, {
            top: 2,
            username: 'Vitek08',
            lvlname: 'Lout',
            src: './img/lvls/69.png',
            id: 69
        }),
        React.createElement(newDemon, {
            top: 3,
            username: 'Vitek08',
            lvlname: 'Six Cubes',
            src: './img/lvls/61.png',
            id: 61
	  }),
        React.createElement(newDemon, {
            top: 4,
            username: 'Elytra Clutch',
            lvlname: 'Slow Motion',
            src: './img/lvls/88.png',
            id: 88
        }),

        //
    ), document.getElementById('dl-content')
);