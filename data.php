<?php

exec("gpio -g read 18", $lectura);

echo json_encode( array( "estado"=>$lectura[0] ) );

?>