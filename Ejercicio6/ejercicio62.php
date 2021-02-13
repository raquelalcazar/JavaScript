<?php
$entrada=fopen('php://input','r');
    $datos= fgets($entrada);
    $datos= json_decode($datos, true);

    $resultado=(object)array("marca" => $datos["marcaSelect"], 
                            "electro" => $datos["electroSelect"], 
                            "ancho" => 0,
                            "alto" => 0, 
                            "fondo" => 0);

    switch($datos["marcaSelect"]){
        case "Bosch":
            switch($datos["electroSelect"]){
                case "lavadora":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=160;
                    break;
                
                case "lavavajillas":
                    $resultado->ancho=100;
                    $resultado->alto=100;
                    $resultado->fondo=110;
                    break;
                
                case "frigorifico":
                    $resultado->ancho=80;
                    $resultado->alto=180;
                    $resultado->fondo=80;
                    break;

                case "horno":
                    $resultado->ancho=120;
                    $resultado->alto=120;
                    $resultado->fondo=160;
                    break;

                case "microondas":
                    $resultado->ancho=60;
                    $resultado->alto=40;
                    $resultado->fondo=40;
                    break;

                case "placa":
                    $resultado->ancho=50;
                    $resultado->alto=50;
                    $resultado->fondo=0;
                    break;

                case "campana":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=100;
                    break;
            }

        break;

        case "Balay":
            switch($datos["electroSelect"]){
                case "lavadora":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=160;
                    break;
                
                case "lavavajillas":
                    $resultado->ancho=100;
                    $resultado->alto=100;
                    $resultado->fondo=110;
                    break;
                
                case "frigorifico":
                    $resultado->ancho=80;
                    $resultado->alto=180;
                    $resultado->fondo=80;
                    break;

                case "horno":
                    $resultado->ancho=120;
                    $resultado->alto=120;
                    $resultado->fondo=160;
                    break;

                case "microondas":
                    $resultado->ancho=60;
                    $resultado->alto=40;
                    $resultado->fondo=40;
                    break;

                case "placa":
                    $resultado->ancho=80;
                    $resultado->alto=70;
                    $resultado->fondo=0;
                    break;

                case "campana":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=100;
                    break;
            }

        break;

        case "Smeg":
            switch($datos["electroSelect"]){
                case "lavadora":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=160;
                    break;
                
                case "lavavajillas":
                    $resultado->ancho=100;
                    $resultado->alto=100;
                    $resultado->fondo=110;
                    break;
                
                case "frigorifico":
                    $resultado->ancho=80;
                    $resultado->alto=180;
                    $resultado->fondo=80;
                    break;

                case "horno":
                    $resultado->ancho=120;
                    $resultado->alto=120;
                    $resultado->fondo=160;
                    break;

                case "microondas":
                    $resultado->ancho=60;
                    $resultado->alto=40;
                    $resultado->fondo=40;
                    break;

                case "placa":
                    $resultado->ancho=80;
                    $resultado->alto=80;
                    $resultado->fondo=0;
                    break;

                case "campana":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=100;
                    break;
            }

        break;    

        case "LG":
            switch($datos["electroSelect"]){
                case "lavadora":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=160;
                    break;
                
                case "lavavajillas":
                    $resultado->ancho=100;
                    $resultado->alto=100;
                    $resultado->fondo=110;
                    break;
                
                case "frigorifico":
                    $resultado->ancho=80;
                    $resultado->alto=180;
                    $resultado->fondo=80;
                    break;

                case "horno":
                    $resultado->ancho=120;
                    $resultado->alto=120;
                    $resultado->fondo=160;
                    break;

                case "microondas":
                    $resultado->ancho=60;
                    $resultado->alto=40;
                    $resultado->fondo=40;
                    break;

                case "placa":
                    $resultado->ancho=75;
                    $resultado->alto=75;
                    $resultado->fondo=0;
                    break;

                case "campana":
                    $resultado->ancho=120;
                    $resultado->alto=160;
                    $resultado->fondo=100;
                    break;
            }

        break;
    }

    $respuesta = json_encode($resultado);

    echo $respuesta;

?>
