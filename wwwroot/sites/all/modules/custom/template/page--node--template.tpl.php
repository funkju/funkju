<?php
	//Template Type Taxonomy
	if(isset($node->field_template_type[LANGUAGE_NONE][0])){
		$tid = $node->field_template_type[LANGUAGE_NONE][0]['tid'];
	} else {
		$tid = 1;
	}
?>

<div id='node_template'>
  <div id='template_sidebar'>
	<h2>Sections Are Here</h2>
  </div>
  <div id='template_editor' class='template_type_<?php echo $tid; ?>'>
	<div id='template_holder'>
		<div class='prev'></div>
		<?php 		
			//Single Panel
			if($tid == 1){
		?>
		<div class='panel panel1 active'>
			<div class='col col1'><img src='/sites/default/files/newheightslogo.png' style='width: 50%' /></div>
		</div>
		<div class='panel panel2'>
			<div class='col col1'></div>
		</div>

		<?php
			//Bifold
			} else if($tid == 2){
		?>
		<div class='panel panel1 active'>
			<div class='col col1'><img src='/sites/default/files/newheightslogo.png' style='width: 50%' /></div>
		</div>
		<div class='panel panel2'>
			<div class='col col1'></div>
			<div class='vert'></div>
			<div class='col col2'></div>
		</div>
		<div class='panel panel3'>
			<div class='col col1'></div>
		</div>
		<?php
			//Trifold
			} else if($tid == 3){
		?>
		<div class='panel panel1 active'>
			<div class='col col1'><img src='/sites/default/files/newheightslogo.png' style='width: 50%' /></div>
		</div>
		<div class='panel panel2'>
			<div class='col col1'></div>
			<div class='vert'></div>
			<div class='col col2'></div>
		</div>
		<div class='panel panel3'>
			<div class='col col1'></div>
			<div class='vert first'></div>
			<div class='col col2'></div>
			<div class='vert'></div>
			<div class='col col3'></div>
		</div>
		<div class='panel panel4'>
			<div class='col col1'></div>
		</div>
		<?php
			}
		?>
		<div class='next'></div>
	</div>
  </div>
</div>
