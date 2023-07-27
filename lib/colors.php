<?php

$df_colors = array(
	array(
		'name' => 'Blau',
		'slug' => 'df-corporate',
		'color' => '#056083',
	),
	array(
		'name' => 'Blau hell',
		'slug' => 'df-light',
		'color' => '#29B5E4',
	),
	array(
		'name' => 'Blau subtil',
		'slug' => 'df-subtle',
		'color' => '#ecf5f8',
	),
	array(
		'name' => 'Copy',
		'slug' => 'df-copy',
		'color' => '#242424',
	),
	array(
		'name' => 'Akzent',
		'slug' => 'df-acccent',
		'color' => '#F59947',
	),
	array(
		'name' => 'Weiß',
		'slug' => 'df-weiss',
		'color' => '#ffffff',
	),
	array(
		'name' => 'Hellgrau',
		'slug' => 'df-grey',
		'color' => '#EDF5F8',
	),
);

function df_setup_colors()
{
	global $df_colors;

	//add_theme_support('editor-color-palette', $df_colors);
}

add_action('after_setup_theme', 'df_setup_colors');

function df_do_colors() {
	global $df_colors;

	echo '<style type="text/css">';
	foreach($df_colors as $c) { ?>
		.has-<?php echo $c["slug"];?>-background-color {
			background-color: <?php echo $c["color"];?>;
		}

		.has-<?php echo $c["slug"];?>-color {
			color: <?php echo $c["color"];?>;
		}
	<?php }
	echo '</style>';
}
add_action( 'wp_head', 'df_do_colors' );

add_action( 'acf/input/admin_footer', 'wd_acf_color_palette' );
function wd_acf_color_palette() { 
	global $df_colors; ?>
	<script type="text/javascript">
	(function($) {
		acf.add_filter('color_picker_args', function( args, $field ){
			// add the hexadecimal codes here for the colors you want to appear as swatches
			args.palettes = [<?php
				foreach($df_colors as $c) { 
					echo "'".$c["color"]."',";
				 }
			?>];
			return args;
		});
	})(jQuery);
	</script>
<?php }

function filter_theme_json_theme( $theme_json ){
	global $df_colors;
	$new_data = array(
		'version'  => 2,
		'settings' => array(
			'color' => array(
				'text'       => false,
				'palette'    => $df_colors,
			),
		),
	);

	return $theme_json->update_with( $new_data );
}
add_filter( 'wp_theme_json_data_theme', 'filter_theme_json_theme' );

/*******************************************/
/*
/*  Dump the property names in the code for easy copying
*/

$dump = 0;

if ($dump) {
    foreach ($df_colors as $c) { ?> 
		--c<?php echo str_replace("df", "", $c["slug"]);?>: <?php echo $c["color"]; ?>;
	<?php }
    foreach ($df_colors as $c) { ?> 
{
	"slug": "--<?php echo str_replace("dsf", "", $c["slug"]);?>",
	"color": "<?php echo $c["color"]; ?>",
	"name": "<?php echo $c["name"]; ?>"
},
<?php  };
};