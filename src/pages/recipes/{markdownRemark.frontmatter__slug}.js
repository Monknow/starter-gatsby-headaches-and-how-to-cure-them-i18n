import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {graphql} from "gatsby";

const RecipePage = ({data}) => {
	const {html, frontmatter} = data.markdownRemark;
	const {title, cover_image, date} = frontmatter;
	const cover_image_data = getImage(cover_image.image.childImageSharp.gatsbyImageData);

	return (
		<main>
			<h1>{title}</h1>
			<p>{date}</p>
			<GatsbyImage image={cover_image_data} alt={cover_image.alt} />
			<p dangerouslySetInnerHTML={{__html: html}}></p>
		</main>
	);
};

export const recipeQuery = graphql`
	query RecipeQuery($frontmatter__slug: String) {
		markdownRemark(frontmatter: {slug: {eq: $frontmatter__slug}}) {
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
			html
		}
	}
`;

export default RecipePage;

export const Head = ({data}) => <title>{data.markdownRemark.frontmatter.title}</title>;
