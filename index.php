<?php
  session_start();

  if( isset( $_SESSION[ 'BBl_tipoUsuario' ] ) ){
  	  if ( $_SESSION['BBl_tipoUsuario'] == 'admin' ){
	    echo "<script>window.location.href = 'adminCatalog'</script>";
	  } else {
	    echo "<script>window.location.href = 'shop'</script>";
  	}
  } else {
  	echo "<script>window.location.href = 'shop'</script>";
  }

 ?>
