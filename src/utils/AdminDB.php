<?php
	class AdminDB {

        const BASE_DATOS = 'mysql:host=localhost:3306; dbname=tienda_stickers';
        const USUARIO = 'root';
        const CONTRASENA = 'root';
        private $conexion;

        function __construct(){
	        $this->realizar_conexion();

	        $consulta_utf8 = 'SET CHARACTER SET utf8';
	        $this->conexion->exec( $consulta_utf8 );
	        $this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        }

        private function realizar_conexion() {
            try {
                $this->conexion = new PDO( self::BASE_DATOS, self::USUARIO, self::CONTRASENA );
            } catch ( Exception $e ) {
                die( 'Error: ' . $e->getMessage());
            }
        }

        public function insertar( $nombre_tabla, $datos ) {
            $consulta = $this->obtener_consulta_insercion( $nombre_tabla, $datos );
            $this->conexion->query( $consulta );
        }

        private function obtener_columnas( $nombre_tabla ) {
            $consulta_atributos = "DESCRIBE $nombre_tabla;";
            $columnas = $this->conexion->query( $consulta_atributos );
            return $columnas;
        }

        private function obtener_nombres_columnas( $columnas ) {
            $indice = 0;
            while( $columnas_provisional = $columnas->fetch( PDO::FETCH_ASSOC ) ) {
                $nombres_columnas[ $indice ] = $columnas_provisional[ 'Field' ];
                $indice++;
            }
            $columnas->closeCursor();
            return $nombres_columnas;
        }

        private function obtener_consulta_insercion( $nombre_tabla, $datos ) {
            $columnas = $this->obtener_columnas( $nombre_tabla );
            $nombres_columnas = $this->obtener_nombres_columnas( $columnas );
            $cadena_atributos = '';
            $cadena_valores = '';
            foreach( $nombres_columnas as $key=>$atributo ) {
                if( $key == 0 ) {
                    $cadena_atributos = "( $atributo";
                    $cadena_valores = '( "' . $datos[$atributo] . '"';
                } else {
                    $cadena_atributos = $cadena_atributos . ', ' . $atributo;
                    $cadena_valores = $cadena_valores . ', "' . $datos[$atributo] . '"';
                }
            } //foreach
            $cadena_atributos = "$cadena_atributos )";
            $cadena_valores = "$cadena_valores )";
            $consulta = "INSERT INTO $nombre_tabla $cadena_atributos VALUES $cadena_valores";
            return $consulta;
        }

        public function obtener_elemento( $nombre_tabla, $condicion ) {
          $consulta = "SELECT * FROM $nombre_tabla WHERE $condicion";
          $resultado = $this->conexion->query( $consulta );

          $elemento = $resultado->fetchAll();
          return $elemento;
        }
	}
?>
