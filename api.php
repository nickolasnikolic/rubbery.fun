<?php

include ('vendor/autoload.php');

function scrapeCL(){
    
    $client = \Symfony\Component\Panther\Client::createChromeClient();
    $crawler = $client->request('GET', 'https://en.wikipedia.org/wiki/Ideasthesia');
    $resultText = $crawler->filter('#bodyContent')->text();    
    return json_encode(Array('text' => $resultText));
}

//if there is a day old file, delete it and reload
$dayOfMonth = date('d');
if(unlink(intval($dayOfMonth) - 1) . '.txt'){
    $page = scrapeCL();
    //open the cache file with current record
    file_put_contents( $dayOfMonth . '.txt', $page);
    //else if the current day is there, read it
}else if( is_file($dayOfMonth . '.txt')){
    $page = file_get_contents($dayOfMonth . '.txt');
}else{
    //otherwise scrape and store
    $page = scrapeCL();
    file_put_contents($dayOfMonth . '.txt', $page);
}

echo $page;