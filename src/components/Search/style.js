var style = {
	popup: {
		zIndex: 997,
		position: 'fixed',
		right: 0,
		bottom: 0,
		width: 320,
		top: 50,
		background: '#EFEFEF',
		boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.12)',
		transition: 'ease-in-out 0.2s',
		boxSizing: 'border-box',
		padding: 20,
		fontFamily: 'Open Sans'
			//right: -324,
	},
	input: {
		padding: '8px',
		paddingLeft: '16px',
		paddingRight: '16px',
		borderRadius: '50px', // 4px
		border: '1px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
		fooBar: 'none',
		outline: 'none',
		color: '#4E4E4E',
		fontSize: '14px',
		width: '100%',
		':focus': {
			border: '1px solid #20C753', // F96331 6E00FF
			color: '#000000'
		}
	},
   resultTitle: {
      fontSize: 18,
      fontWeight: 500,
      color: '#0056FF',
      cursor: 'pointer'
   },
   resultDescription: {
      fontSize: 14,
      fontWeight: 300,
      paddingTop: 2
   },
   resultFrame: {
      paddingTop: 24
   }
}

export default style;
