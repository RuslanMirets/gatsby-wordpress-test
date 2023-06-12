import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const HomePage = () => {
	const data = useStaticQuery(graphql`
		query WpPosts {
			allWpPost(sort: { fields: [date], order: DESC }) {
				edges {
					previous {
						id
					}
					post: node {
						id
						uri
						title
					}
					next {
						id
					}
				}
			}
		}
	`);

	console.log(data);

	return (
		<Layout>
			<ul>
				{data.allWpPost.edges.map((item) => (
					<li key={item.post.id}>{item.post.title}</li>
				))}
			</ul>
		</Layout>
	);
};

export const Head = () => <Seo title="Главная" />;

export default HomePage;
