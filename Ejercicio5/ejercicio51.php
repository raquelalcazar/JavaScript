<?php
    $xml1 = "<marcas>"
                ."<marca>Sony</marca>"
                ."<marca>Panasonic</marca>"
                ."<marca>LG</marca>"
                ."<marca>Samsung</marca>"
            ."</marcas>";

    $xml2 = "<dimensiones>"
                ."<dimension>32</dimension>"
                ."<dimension>40</dimension>"
                ."<dimension>50</dimension>"
                ."<dimension>65</dimension>"
            ."</dimensiones>";

    $datos = "<datos>" .$xml1 .$xml2 ."</datos>";

    header("Content-Type:text/xml");

    echo $datos;
?>
