<?php
if (is_category()) :
?>
<p class="category">
    Alles zu <?php echo single_cat_title(); ?>
</p>
<?php
elseif (is_author()) :
?>
<p class="category">
    Alles zu <?php echo get_the_author(); ?>
</p>
<?php
endif;
?>
