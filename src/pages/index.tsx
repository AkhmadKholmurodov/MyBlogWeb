import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Content, Hero, Sidebar } from '../components';
import { BlogsType } from '../interfaces/blogs.interface';
import { CategoryType } from '../interfaces/categories.interface';
import Layout from '../layout/layout';
import SEO from '../layout/seo/seo';
import { BlogsService } from '../services/blog.service';

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
	return (
		<SEO>
			<Layout>
				<Hero blogs={blogs.slice(0, 3)} />
				<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
					<Sidebar latestBlogs={latestBlogs} categories={categories} />
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	);
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogsService.getAllBLogs();
	const latestBlogs = await BlogsService.getLatestBlog();
	const categories = await BlogsService.getCategories();

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	};
};

interface HomePageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
