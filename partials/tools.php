<?php

//paramétrage de la langue de traduction pour PHP
setlocale(LC_ALL, "fr_FR");

//connexion à la base de données
function db(){

try{
    $db = new PDO('mysql:host=localhost;dbname=endyear;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch (Exception $exception)
{
    die( 'Erreur : ' . $exception->getMessage() );
}
return $db;
}

//ouverture de session pour connexions utilisateurs et admins
session_start();
