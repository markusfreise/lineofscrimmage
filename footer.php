	</section> <!-- content -->
	</div>
	<footer>
		<div id="contact">
			<div class="address ty">
				<p><img src="<?php echo get_template_directory_uri();?>/images/Salubris-Bielefeld.png" alt=""><p>
				<?php the_field("contact_footer","option"); ?>
			</div>
			<div class="form ty">
				<h2>Wir freuen uns darauf, Sie und Ihr Team kennenzulernen!</h2>
				<?php 
					gravity_form( 1, false, false, false, '', true, 12 );
				?>
			</div>
		</div>
		<nav id="footer">
			<div class="wrap">
				<?php wp_nav_menu(array("theme_location"=>"footer")); ?>
				<span>© <?php echo date("Y"); ?> Salubris GmbH</span>
			</div>
		</nav>
	</footer>
	</div>
	<?php wp_footer(); ?>
	</body>

	</html>
