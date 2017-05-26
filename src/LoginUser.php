<?php

/**
 *
 */

include ( '../adminDB/adminDB.php' );

class LoginUser {

  private $adminDB;

  function __construct() {
    # code...
    $this->adminDB = new AdminDB();
  }

  public function login( $userData ) {

    $userValid = $this->verifyUser( $userData );

    if ($userValid) {
      # code...
      session_start();
      $_SESSION[ 'BBL_email' ] = $userData[ 'email' ];
      $_SESSION[ 'BBL_password' ] = $userData[ 'password' ];
      //$_SESSION[ 'BBl_tipoUsuario' ] = $userData[ 'tipo' ];

      print_r( json_encode( array( 'complete' => true, 'user' => $_SESSION['BBL_email'] ) ) );
    } else {

      print_r( json_encode( array( 'complete' => false ) ) );

    }

  }

  private function verifyUser( $userData ) {
    $condition = [
      "email" => $userData['email'],
      "password" => $userData['password']
    ];

    $response = $this->adminDB->obtener_informacion( 'users', $condition );
    $userValid = false;

    if ($response == null) {
      # code...
      $userValid = true;
      $_SESSION[ 'BBl_tipoUsuario' ] = $response['tipo'];
    } else {
      # code...
      $userValid = false;
    }

    return $userValid;
  }
 
  function obtain($userData){
    $res = $this->adminDB->obtener_info('users', $userData);
    if (count($res) == 0){

    } else {
      session_start();
      $_SESSION[ 'BBL_email' ] = $userData[ 'email' ];
      $_SESSION[ 'BBL_password' ] = $userData[ 'password' ];
      $_SESSION[ 'BBl_tipoUsuario' ] = $res[0][4];
      $this->adminDB->obtener_informacion('users', $userData);
    }
}

}

function Main() {
  $_POST = json_decode(file_get_contents('php://input'),true);

  $userEmail = $_POST[ 'email' ];
  $userPassword = $_POST[ 'password' ];

  $userData = array(  'email' => $userEmail ,
                      'password' => $userPassword );

  $loginUser = new LoginUser();
  $loginUser->obtain( $userData );
}


Main()


 ?>
