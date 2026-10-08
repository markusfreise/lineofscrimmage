/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
    const blockProps = useBlockProps.save({ className: 'wp-block '+(attributes.reverse ? 'reverse' : '') });
	return (
		<div { ...blockProps }>
			<div className={ "bild " + (attributes.cropimage && "cropimage")}>
				<div className="bild__image">
					{ attributes.media && attributes.media.url && (<img src={attributes.media.url} alt={attributes.media.alt} />) }
					{ !attributes.media && !attributes.media.url && (<img src="https://via.placeholder.com/2048x1280?text=Breite%202048" alt="" /> )}
					{ attributes.label != '' && 
					<div className="label"> <RichText.Content tagName="p" value={ attributes.label } />
					</div>}
				</div>
				<div></div>
			</div>
			<div className="text">
				{ attributes.eyebrow && <RichText.Content className="eyebrow" tagName="p" value={attributes.eyebrow} /> }
				{ attributes.headline && <RichText.Content className="headline" tagName="h2" value={attributes.headline} /> }
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
