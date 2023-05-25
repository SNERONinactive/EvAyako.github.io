const newImposible = React.createClass({
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
        
     React.createElement(newImposible, {
            top: 1,
            username: 'dd',
            lvlname: 'dd',
            src: '',
            id: 0
        }),

        //
    ), document.getElementById('dl-content')
);