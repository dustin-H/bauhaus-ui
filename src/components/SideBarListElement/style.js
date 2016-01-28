var style = {
	sideBarListElement: {
		position: 'relative',
		width: '100%',
		fontSize: '12px',
		textTransform: 'uppercase',
		fontWeight: 700,
		padding: '14px',
		boxSizing: 'border-box',
		color: '#ffffff',
		paddingLeft: '20px',
		cursor: 'pointer',
		letterSpacing: '1px',
		borderLeft: '2px solid transparent',
		':hover': {
			borderLeft: '2px solid #20C753',
		},
		':active': {
			borderLeft: '6px solid #20C753',
			fontWeight: 700,
			transition: 'ease-in-out 0.1s',
			paddingLeft: '30px'
		}
	},
	sideBarListElementTablet: {
		position: 'relative',
		width: '100%',
		fontSize: '12px',
		textTransform: 'uppercase',
		fontWeight: 700,
		padding: '14px',
		boxSizing: 'border-box',
		color: '#ffffff',
		paddingLeft: 0,
		paddingRight: 0,
		cursor: 'pointer',
		letterSpacing: '1px',
      textAlign: 'center',
		borderLeft: '2px solid transparent',
		borderRight: '2px solid transparent',
		':hover': {
			borderLeft: '2px solid #20C753',
		},
		':active': {
			borderLeft: '6px solid #20C753',
			fontWeight: 700,
			transition: 'ease-in-out 0.1s'
		}
	},
	menuIcon: {
		display: 'inline-block',
		width: '42px'
	},
	imageIcon: {
		width: '20px',
		verticalAlign: 'middle'
	}
};
export default style;
