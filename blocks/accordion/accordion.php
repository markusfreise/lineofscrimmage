<?php
/**
 * Plugin Name:       Gabi Akkordion
 * Description:       Ein Block für ein Akkordion
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Freise . Design . Digital
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       eaw
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_filter( 'block_categories_all', 'ff_cat', 10, 2);

if(!function_exists('ff_cat')) {
	function greco_cat( $categories, $post ) {
		
		array_unshift( $categories, array(
			'slug'	=> 'gp',
			'title' => 'Freise . Design . Digital',
		) );
	
		return $categories;
	}
}



function create_block_ff_accordion_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_ff_accordion_block_init' );