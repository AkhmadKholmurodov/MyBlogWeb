import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { CategoryType } from '../../interfaces/categories.interface';
import Layout from '../../layout/layout';
import SEO from '../../layout/seo/seo';
import { BlogsService } from '../../services/blog.service';
import CodeRain from "./CodeRain"


const CategoryPage = ({ categories }: CategoryPageProps) => {
	const rotuer = useRouter();

	return (
		<SEO metaTitle='All Categories'>
			{/* <CodeRain /> */}
				<Layout>
					<Box
						width={ '80%' }
						marginX={'auto'}
						marginTop={'10vh'}
						borderRadius={'8px'}
						height={{ xs: '30vh', md: '50vh' }}
						sx={{
							backgroundColor: 'black',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							rowGap: '10px',
							bgcolor: "#222"
						}}
					>
						<Typography variant='h3' fontFamily={'cursive'} mb={10}>
							All Categories
						</Typography>
						<ButtonGroup variant='contained' aria-label='primary button'>
							{categories.map(item => (
								<Button sx={{ color: "#fff", background:"none",p:2, fontSize:"middle",  px: 6, width:"70%", borderRadius: "12px",'&:hover': {bgcolor: 'rgba(86,64,31, .6)'}, fontFamily:"roboto", bgcolor:"#333" }} onClick={() => rotuer.push(`/category/${item.slug}`)} key={item.slug}>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</Box>
					

				</Layout>
			
		</SEO>
	);
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
	const categories = await BlogsService.getCategories();

	return {
		props: {
			categories,
		},
	};
};

interface CategoryPageProps {
	categories: CategoryType[];
}
