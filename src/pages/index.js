import * as React from "react";
import {graphql} from "gatsby";
import {RecipePreview} from "../components/RecipePreview";

const IndexPage = ({data}) => {
	const recipes = data.allMarkdownRemark.nodes;

	return (
		<main>
			<h1>Welcome to my English cooking blog!</h1>
			<h2>Written by Juan Diego Rodríguez</h2>
			{recipes.map(({frontmatter}) => {
				return <RecipePreview key={frontmatter.slug} data={frontmatter} />;
			})}
		</main>
	);
};

export const Head = () => <title>Welcome to my English cooking blog!</title>;

export const indexQuery = graphql`
	query IndexQuery {
		allMarkdownRemark {
			nodes {
				frontmatter {
					slug
					title
					date
					cover_image {
						image {
							childImageSharp {
								gatsbyImageData
							}
						}
						alt
					}
				}
			}
		}
	}
`;

export default IndexPage;
