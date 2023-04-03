#### stash ( छुपा कर रखना )
https://www.atlassian.com/git/tutorials/saving-changes/git-stash

	I you are not interested to commit the changes due to some resion 

	$ git stash 


	Note : stash is local to your Git repository; stashes are not transferred to the server when you push.




<?php 
$dateTime = new DateTime('now', new DateTimeZone('Asia/Kolkata')); 
$currentDateTime_str =  $dateTime->format("m-d-Y  h:i A");
$currentDateTime_arr = explode(' ', $currentDateTime_str);
//debug('sss', $currentDateTime_arr); 

$gamedate = $currentDateTime_arr[0]; // 07/22/2022

$time = $currentDateTime_arr[2];
$am_pm = $currentDateTime_arr[3];
echo $gametime = $time.' '.$am_pm;  // 04:00 PM
?>