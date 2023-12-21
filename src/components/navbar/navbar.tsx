import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { navItems } from '../../config/constants';
import CloseIcon from '@mui/icons-material/Close';
// import AdjustIcon from '@mui/icons-material/Adjust';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { color } from '@mui/system';
// import Image from 'next/image';

var itemIcons = [
	HomeIcon,
	CategoryIcon,
	AccountBalanceWalletIcon
]

interface Props {
	window?: () => Window;
}

const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const router = useRouter();

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<Box sx={{ textAlign: 'center', color:'#333' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: '20px' }}>
				<Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
					{/* <Image src={'/favicon.svg'} alt={'logo'} width={50} height={50} /> */}
					<Typography paddingTop={'7px'} variant='h4' fontFamily={'fantasy'} component='div'>
						Akhmad 
					</Typography>
				</Box>
				<CloseIcon onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }} />
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box height={'9vh'} sx={{ display: 'flex' }}>
      		<AppBar sx={{ pl: '30px', backgroundColor: `rgba(0, 0, 0, 0.8)`, color: '#fff', boxShadow: 12 }} component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						onClick={() => router.push('/')}
						sx={{ my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: 'flex', cursor: 'pointer' }}
					>
						{/* <Image src={'/favicon.svg'} alt={'logo'} width={50} height={50} /> */}
						<Typography paddingTop={'7px'}  variant='h4' fontFamily={'fantasy'} component='div'>
							Akhmad
						</Typography>
						<Box sx={{ display: 'flex', gap: '15px', ml: 54 }}>
							<a style={{color: "#fff",}} href="https://telegram.org/AkhmadKholmurodov"><TelegramIcon href="" sx={{transition: "0.3s ease-in-out", mx:"4px", fontSize: "1.8rem", cursor: 'pointer', '&:hover': {color: '#EEDC82',fontSize: "2rem"} }} /></a>
							<a style={{color: "#fff"}} href="https://instagram.com/joseehyuk"><InstagramIcon sx={{ cursor: 'pointer', fontSize: "1.8rem", mx:"4px", '&:hover': {transition: "0.3s ease-in-out",color: '#EEDC82',fontSize: "2rem"}}} /></a>
							<a style={{color: "#fff"}} href="https://youtube.com"><YouTubeIcon sx={{ cursor: 'pointer', fontSize: "1.8rem", mx:"4px", '&:hover': {transition: "0.3s ease-in-out", color: '#EEDC82',fontSize: "2rem"} }} /></a>
							<a style={{color: "#fff"}} href="https://kr.linkedin.com/in/akhmad-kholmurodov-5a97a4216"><LinkedInIcon sx={{transition: "0.3s ease-in-out", fontSize: "1.8rem", mx:"4px", cursor: 'pointer', '&:hover': {color: '#EEDC82', fontSize: "2rem"}}}/></a>
						</Box>
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' }, pr: "100px", }}>
						{navItems.map(item => (
							<Button 
							onClick={() => router.push(item.route)} key={item.route} 
							sx={{  color: '#fff', pr: "40px", fontSize: 17, fontFamily: "roboto", alignItems: "center", justifyContent: "center",'&:hover': {backgroundColor: 'rgba(86,64,31, .6)',}
							}}>
								{/* {itemIcons.map(itemIcon=>(itemIcons))} */}
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;
