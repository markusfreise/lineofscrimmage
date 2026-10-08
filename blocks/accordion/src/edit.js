/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	return (
		<section { ...useBlockProps({ className: 'section wp-block '+(attributes.rightToLeft ? 'reverse' : '')+(attributes.imageSize ? ' '+attributes.imageSize : '') }) }>
			<div className="wrapper flex">
				<div className="accordion_head">
					<span className="trigger">
						<RichText tagName="span" className="nr" value={ attributes.nr } onChange={ ( nr ) => setAttributes( { nr } ) } placeholder={ __( '0', '' ) } />
					</span>
					<div>
						<RichText tagName="h2" className="title" value={ attributes.title } onChange={ ( title ) => setAttributes( { title } ) } placeholder={ __( 'Title', 'b-accordion' ) } />
						<RichText tagName="p" className="subtitle" value={ attributes.subtitle } onChange={ ( subtitle ) => setAttributes( { subtitle } ) } placeholder={ __( 'Subtitle', 'b-accordion' ) } />
					</div>
				</div>
				<div className="inner">
					<div className="keepopen">
						<InnerBlocks />
					</div>
				</div>
			</div>
		</section>
	);
}
