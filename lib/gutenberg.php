<?php

function enqueue_custom_block_editor_assets() {
    wp_enqueue_script(
        'custom-gutenberg-extensions',
        get_template_directory_uri() . '/js/headline-classes.js',
        array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
        filemtime( get_template_directory() . '/js/headline-classes.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'enqueue_custom_block_editor_assets' );

function register_custom_blocks() {
    $blocks = scandir( get_template_directory() . '/blocks' );
    foreach ( $blocks as $block ) {
        if ( is_dir( get_template_directory() . '/blocks/' . $block ) && $block !== '.' && $block !== '..' ) {
            register_block_type( get_template_directory() . '/blocks/' . $block . '/build' );
            if ( ! file_exists( get_template_directory() . '/resources/scss/blocks/' . $block . '.scss' ) ) {
                $scss_file = fopen( get_template_directory() . '/resources/scss/blocks/' . $block . '.scss', 'w' );
                fwrite( $scss_file, '' );
                fclose( $scss_file );
                $scss_imports = fopen( get_template_directory() . '/resources/scss/blocks.scss', 'a' );
                fwrite( $scss_imports, "@import 'blocks/$block';\n" );
                fclose( $scss_imports );
            }
        }
    }
}

add_action( 'init', 'register_custom_blocks' );
