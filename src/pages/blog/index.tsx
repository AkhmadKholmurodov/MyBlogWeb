import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { Content } from '../../components';
import { BlogsType } from '../../interfaces/blogs.interface';
import Layout from '../../layout/layout';
import SEO from '../../layout/seo/seo';
import { BlogsService } from '../../services/blog.service';

const BlogPage = ({ blogs }: BLogPageProps) => {
	return (
		<SEO metaTitle='All blogs'>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
						justifyContent: 'center',
					}}
				>
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	);
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BLogPageProps> = async () => {
	const blogs = await BlogsService.getAllBLogs();

	return {
		props: { blogs },
	};
};

interface BLogPageProps {
	blogs: BlogsType[];
}
