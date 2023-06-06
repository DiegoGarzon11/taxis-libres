import {useState} from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
	const {expand, ...other} = props;
	return <IconButton {...other} />;
})(({theme, expand}) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export function RecipeReviewCard({imagen, info, texto}) {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{maxWidth: 345, height: 'auto', backgroundColor: '#f5f5f5'}}>
			<CardMedia component='img' height='194' image={imagen} alt='Paella dish' />
			<CardContent>
				<Typography variant='body2' color='black' sx={{fontSize: '22px'}}>
					{info}
				</Typography>
			</CardContent>

			<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
				<ExpandMoreIcon />
			</ExpandMore>

			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph color='black'>
						{texto}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
