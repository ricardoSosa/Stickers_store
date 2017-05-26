<?php
/**
 *
 */
include ( '../adminDB/adminDB.php' );

class RegisterUser {

  private $adminDB;

  function __construct() {
    # code...
    $this->adminDB = new AdminDB();
  }

  public function register( $userData ) {
    $table = 'users';

    //$repeatUser = $this->verifyUserNotRepeated( $userData );

    //if ( $repeatUser ) {
      # code...
      //print_r( json_encode( array( 'complete' => false  ) ) );
    //} else {
      # code...
    session_start();
      $this->adminDB->insertar( $table, $userData );
      $_SESSION[ 'BBL_email' ] = $userData[ 'email' ];
      $_SESSION[ 'BBL_password' ] = $userData[ 'password' ];
      $_SESSION[ 'BBl_tipoUsuario' ] = $userData[ 'tipo' ];
      //print_r( json_encode( array( 'complete' => true  ) ) );
    }

      private function verifyUserNotRepeated( $userData ) {
    $repeatUser = false;

    $condition = [
      "name" => $userData['name']
    ];

    $responseUser = $this->adminDB->obtener_informacion( 'users', $condition );
    //validate
    if(!empty($responseUser)){
      $condition = [
        "email" => $userData['email']
      ];

      $responseEmail = $this->adminDB->obtener_informacion( 'users', $condition );

      if(!empty($responseEmail)){

      } else {
        $repeatUser = true;
      }
    } else {
      $repeatUser = true;
    }

     return $repeatUser;

  } 
  }

function Main() {
  $_POST = json_decode(file_get_contents('php://input'),true);
  print_r($_POST);
  $userName = $_POST[ 'name' ];
  $userEmail = $_POST[ 'email' ];
  $userPassword = $_POST[ 'password' ];

  $userData = array(
    'name' => $userName ,
    'email' => $userEmail,
    'password' => $userPassword,
    'tipo' => 'normal' 
  );

  $registerUser = new RegisterUser();
  $registerUser->register($userData);
}

Main()


 ?>
