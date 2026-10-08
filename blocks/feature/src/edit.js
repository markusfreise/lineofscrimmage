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
import { __experimentalLinkControl as LinkControl, InnerBlocks, useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import {  InspectorControls, BlockControls } from '@wordpress/block-editor';
import {   Button, DropdownMenu, PanelBody, PanelRow, FormToggle } from '@wordpress/components';

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
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps({ className: 'wp-block '+(attributes.reverse ? 'reverse' : '')}) }>
			{
				<InspectorControls>
						<PanelBody title="Darstellung" initialOpen={ true }>
						<PanelRow>
							<FormToggle
								checked={ attributes.reverse }
								onChange={() => setAttributes({ reverse: !attributes.reverse })}
							/>
							<label>Bild rechts</label>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			}
			<BlockControls>
			<DropdownMenu
				className="components-dropdown-menu comp-df"
				icon="admin-links"
				label="Options"
			>
				{ ( { onClose } ) => (
                        <LinkControl
                            value={attributes.link}
                            onChange={(link) => setAttributes({ link })}
                            settings={[ ]}
                        />

				) }
			</DropdownMenu>
				<Button
					className="comp-df"
					icon="editor-unlink"
					label="Remove link"
					onClick={ () => setAttributes( { link: '' } ) }
				/>
			</BlockControls>
			<div className="head">
				<RichText className="eyebrow" tagName="p" value={ attributes.eyebrow } onChange={ ( eyebrow ) => setAttributes( {eyebrow: eyebrow}  ) } placeholder="Eyebrow" />
				<RichText className="headline" tagName="h2" value={ attributes.headline } onChange={ ( headline ) => setAttributes( {headline: headline}  ) } placeholder="Überschrift" />
			</div>
			<div className={ "bild upload " + (attributes.cropimage && "cropimage")}>
				<div className="bild__image">
					{ attributes.media && (<img src={attributes.media.url} alt={attributes.media.alt} />) }
					{ !attributes.media && (<img src="https://placehold.co/2048x2048" alt="" /> )}
			{ !attributes.media && <MediaUploadCheck>
			<MediaUpload
				allowedTypes={ [ 'image' ] }
				onSelect={ ( media ) => setAttributes( { media: media } ) }
				value={ attributes.media }
				render={ ( { open } ) => (
					<Button onClick={ open }>Bild einfügen</Button>
				) }
				/>
			</MediaUploadCheck>}
			{ attributes.media && <Button onClick={ () => setAttributes( { media: null } ) }>Bild entfernen</Button> }
				</div>
			<div className="bild__text">
			<RichText className="text" tagName="p" value={ attributes.text } onChange={ ( text ) => setAttributes( {text: text}  ) } placeholder="Text/Inhalt …" />
				<span className="link"><span></span><span><RichText className="text" tagName="p" value={attributes?.link?.title} onChange={ ( text ) => setAttributes( { link: { title: text } } ) } placeholder="Linktext" /></span></span>
			</div>
		</div>
		</div>
	);
}
