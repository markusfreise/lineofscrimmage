/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

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
    const blockProps = useBlockProps.save({ className: 'section wp-block '+(attributes.rightToLeft ? 'reverse' : '') + (attributes.imageSize ? ' '+attributes.imageSize : '') });
	return (
		<section { ...blockProps }>
			<div className="wrapper">
				<div className="accordion_head">
					<span className="trigger">
						<span>{ attributes.nr && attributes.nr }{ !attributes.nr && <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L14 14L2 26" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/></svg>}</span>
					</span>
					<div>
						<RichText.Content tagName="h2" className="title" value={ attributes.title } />
						<RichText.Content tagName="p" className="subtitle" value={ attributes.subtitle } />
					</div>
				</div>
				<div className="inner">
					<div>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</section>
	);
}
