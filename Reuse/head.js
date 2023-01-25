document.writeln(`
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="shortcut icon" type="text/css" href="images/favicon.jpg">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<style>
		.navbar{
			margin-bottom: 1px;
			border-bottom: 1px solid black; /* 这里是上方的那条线 */
		}
		.nav-link{
			display: block;
			margin-right: 20px;
			font-size: 18px;
			font-weight: 400;
			padding-bottom: 4.5px;	/* 这里是按钮边角 */
			padding-top: 4.5px;
			border-radius: 1px;
		}
		.active{
			background-color: rgb(65, 141, 255) !important;
			color: white !important;
		}
		.company{
			width: 85px;	/* 这里是glasgow标志的大小 */
			height: auto;
		}
		.teams{
			font-size: 22px !important;
		}
		.collapse:not(.show) .teams{
			height: 39px;
			width:70px;
			font-size:7px !important;
			flex-wrap: wrap !important;
		}
	</style>

	<body>
<!-- code for navigation bar -->
	<nav class="navbar navbar-expand-sm navbar-default" role="navigation">
		<div class="container-fluid">
			<div class="navbar-brand">
				<img alt = "" class="company" src="images/glasgow.jpg">
			</div>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navmenu">
				<ul class="navbar-nav nav-pills ms-auto">
					<li class="nav-item">
						<a href="home.html" class="nav-link">Home</a>
					</li>
					<li class="nav-item">
						<a href="research.html" class="nav-link">Research</a>
					</li>
					<li class="nav-item">
						<a href="publications.html" class="nav-link">Publications</a>
					</li>
					<li class="nav-item">
						<a href="teams.html" class="nav-link teams">
							<span>Teams&</span>
							<span>Teaching</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<script type="text/javascript" scr="js/jquery.js"></script>
	<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<!-- script for switching navigation bar -->
	<script>
		var oriName = location.href;
		var rawName = oriName.split("/");
		var name = rawName[rawName.length-1].split(".")[0];
		var dic = { "home":0,"research":1,"publications":2,"teams":3};
		var nownum = dic[name];
		const links = document.querySelectorAll(".nav-link");
		links[nownum].classList.add('active');
		for(let i=0;i<links.length;i++){
			links[i].onclick= function(){
				for(let i=0;i<links.length;i++){
					links[i].classList.remove('active');
				}
				links[i].classList.add('active');
			}
		}
	</script>

	</body>

`);