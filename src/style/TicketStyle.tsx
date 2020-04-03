import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "1%",
	},
	root: {
		width: '90%',
		margin: theme.spacing(1),
		color: "black",
		'border-radius': '15px',
	},
	ticketIcon: {
		display: "inline",
		fill: "black"
	},
	title: {
		fontSize: 16,
		color: "black",
	  	alignItems: "center",
	  	display: "inline",
		verticalAlign: "top",
		paddingLeft: "4px"
	},
	location: {
		fontSize: 16,
		color: "black",
		align: "right",
		display: "inline",
		verticalAlign: "top",
		paddingLeft: "30%"
	},
	columnright: {
		flexBasis: '100px',
	},
	columnleft: {
		flexBasis: '85.0%',
	}
}));

export default {useStyles};