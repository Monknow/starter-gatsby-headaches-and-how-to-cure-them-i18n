import * as React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export const RecipePreview = ({data}) => {
	const {cover_image, title, slug} = data;
	const cover_image_data = getImage(cover_image.image.childImageSharp.gatsbyImageData);

	return (
		<Link to={`/recipes/${slug}`}>
			<h1>{title}</h1>
			<GatsbyImage image={cover_image_data} alt={cover_image.alt} />
		</Link>
	);
};
