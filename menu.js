<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>CSS PopupMenu</title>
<style>
div.popup
{
	display:none;
	position:absolute;
	border:solid 1px black;
	padding:8px;
	background-color:white;
}
a.popup:hover + div.popup
{
	display:block;
}
div.popup:hover
{
	display:block;
}
</style>
</head>
<body>
<a class="popup" href="https://www.google.com/?gws_rd=ssl">Settings</a>
<div class="popup">
<ul>
<li><a href="https://www.google.com/preferences?hl=en&fg=1">Search Settings</a></li>
<li><a href="https://www.google.com/advanced_search?hl=en&fg=1">Advanced Search</a></li>
<li><a href="https://accounts.google.com/Login?continue=https://history.google.com/history%3Fhl%3Den%26fg%3D1&hl=en">History</a></li>
<li><a href="https://support.google.com/websearch/?hl=en&rd=2#topic=3378866">Search Help</a></li>
</ul>
</div>
<p>
Other text here, should not be obscured on pops.
</p>
</body>
</html>