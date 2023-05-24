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
            username: 'NEGATIV',
            lvlname: 'iron heart',
            src: '',
            id: 49
        }),
        React.createElement(newDemon, {
            top: 2,
            username: 'NEGATIV',
            lvlname: 'BLACKOUT',
            src: '',
            id: 37
        }),
        React.createElement(newDemon, {
            top: 3,
            username: 'r1val',
            lvlname: 'sakupen hell v2',
            src: '',
            id: 99
        }),
        React.createElement(newDemon, {
            top: 4,
            username: 'WerTaZ',
            lvlname: 'Override',
            src: '',
            id: 93
        }),
        React.createElement(newDemon, {
            top: 5,
            username: 'vitek8',
            lvlname: 'Lout',
            src: '',
            id: 69
        }),
        React.createElement(newDemon, {
            top: 6,
            username: 'viteck8',
            lvlname: 'Six Cubes',
            src: '',
            id: 61
        }),
        React.createElement(newDemon, {
            top: 7,
            username: 'Elytra Clutch',
            lvlname: 'Slow Motion',
            src: './img/lvls/88.png',
            id: 88
        }),

        //
    ), document.getElementById('dl-content')
);
