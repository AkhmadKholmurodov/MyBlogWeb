import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { format } from 'date-fns';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<Box
			padding={'20px'}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: '#141414',
				color: 'white',
			}}
			borderTop={'1px solid rgba(255, 255, 255, .5)'}
		>
			<Typography>© {format(new Date(), 'yyyy')} Akhmad. Created 2023 .</Typography>
			<Box sx={{ display: 'flex', gap: '15px' }}>
				<a style={{color: "#fff"}} href="https://telegram.org/AkhmadKholmurodov"><TelegramIcon href="" sx={{ cursor: 'pointer' }} /></a>
				<a style={{color: "#fff"}} href="https://instagram.com/joseehyuk"><InstagramIcon sx={{ cursor: 'pointer' }} /></a>
				<a style={{color: "#fff"}} href="https://youtube.com"><YouTubeIcon sx={{ cursor: 'pointer' }} /></a>
				<a style={{color: "#fff"}} href="https://kr.linkedin.com/in/akhmad-kholmurodov-5a97a4216"><LinkedInIcon sx={{ cursor: "pointer"}}/></a>
			</Box>
		</Box>
	);
};

export default Footer;
