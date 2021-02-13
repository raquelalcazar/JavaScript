<?php
    $fichero = fopen("php://input", "r");
    $datos = fgets($fichero);

    $cadenaXML = simplexml_load_string($datos);

    $marca = $cadenaXML->teles[0]->marca;
    $dimension = $cadenaXML->teles[0]->dimension;

    $precios = array("482", "653", "790", "1005", "352", "490", "613", "899", "563", "804", "1180", "1302", "445", "605", "799", "999");
    
    switch($marca){
        case "Sony":
            switch($dimension){
                case "32":
                    $precio = $precios[0];
                    break;
                
                case "40":
                    $precio =  $precios[1];
                    break;
                
                case "50":
                    $precio = $precios[2];
                    break;

                case "65":
                    $precio = $precios[3];
                    break;
            }

        break;

        case "Panasonic":
            switch($dimension){
                case "32":
                    $precio = $precios[4];
                    break;
                    
                case "40":
                    $precio = $precios[5];
                    break;
                    
                case "50":
                    $precio = $precios[6];
                    break;
    
                case "65":
                    $precio = $precios[7];
                    break;
            }

        break;

        case "LG":
            switch($dimension){
                case "32":
                    $precio = $precios[8];
                    break;
                        
                case "40":
                    $precio = $precios[9];
                    break;
                        
                case "50":
                    $precio = $precios[10];
                    break;
        
                case "65":
                    $precio = $precios[11];
                    break;
            }

        break;    

        case "Samsung":
            switch($dimension){
                case "32":
                    $precio = $precios[12];
                    break;
                            
                case "40":
                    $precio = $precios[13];
                    break;
                            
                case "50":
                    $precio = $precios[14];
                    break;
            
                case "65":
                    $precio = $precios[15];
                    break;
            }

        break;
    }

    header("Content-Type:text/xml");

    $datos2 = "<televisiones><tele><marca>" .$marca ."</marca><dimension>" .$dimension ."</dimension><precio>" .$precio ."</precio></tele></televisiones>"; 

    echo $datos2;
?>
