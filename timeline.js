div.timeline-frame {
	-moz-box-sizing: border-box;
	border: 1px solid #bebebe;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
}

#legendContainer {
	width: 600px;
	float: left;
}

#taskContainer {
	width: 600px;
	float: right;
}
#tasksTable{
	font-style: normal;
	font-size: 12px;
}
div.timeline-content {
	overflow: hidden;
	position: relative;
}

div.timeline-axis {
	-moz-box-sizing: border-box;
	border-color: #bebebe;
	border-top-style: solid;
	border-width: 1px;
	box-sizing: border-box;
}

div.timeline-axis-grid {
	-moz-box-sizing: border-box;
	border-left-style: solid;
	border-width: 1px;
	box-sizing: border-box;
}

div.timeline-axis-grid-minor {
	border-color: #e5e5e5;
}

div.timeline-axis-grid-major {
	border-color: #bfbfbf;
}

div.timeline-axis-text {
	color: #4d4d4d;
	padding: 3px;
	white-space: nowrap;
}

div.timeline-axis-text-minor {
	
}

div.timeline-axis-text-major {
	
}

div.timeline-event {
	-moz-box-sizing: border-box;
	background-color: #d5ddf6;
	border-color: #97b0f8;
	box-sizing: border-box;
	color: #1a1a1a;
	display: inline-block;
}

div.timeline-event-selected {
	background-color: #fff785;
	border-color: #ffc200;
	z-index: 999;
}

/* TODO: use another color or pattern? */
div.timeline-event-cluster {
	background: url('img/cluster_bg.png') #97b0f8;
	color: #ffffff;
}

div.timeline-event-cluster div.timeline-event-dot {
	border-color: #d5ddf6;
}

div.timeline-event-box {
	-moz-border-radius: 5px; /* For Firefox 3.6 and older */
	border-radius: 5px;
	border-style: solid;
	border-width: 1px;
	text-align: center;
}

div.timeline-event-dot {
	-moz-border-radius: 5px; /* For Firefox 3.6 and older */
	border-radius: 5px;
	border-style: solid;
	border-width: 5px;
}

div.timeline-event-range {
	-moz-border-radius: 2px; /* For Firefox 3.6 and older */
	border-radius: 2px;
	border-style: solid;
	border-width: 1px;
}

div.timeline-event-range-drag-left {
	cursor: w-resize;
	z-index: 1000;
}

div.timeline-event-range-drag-right {
	cursor: e-resize;
	z-index: 1000;
}

div.timeline-event-line {
	-moz-box-sizing: border-box;
	border-left-style: solid;
	border-left-width: 1px;
	box-sizing: border-box;
}

div.timeline-event-content {
	margin: 5px;
	overflow: hidden;
	white-space: nowrap;
}

div.timeline-groups-axis {
	-moz-box-sizing: border-box;
	border-color: #bebebe;
	border-width: 1px;
	box-sizing: border-box;
}

div.timeline-groups-axis-onleft {
	border-style: none solid none none;
}

div.timeline-groups-axis-onright {
	border-style: none none none solid;
}

div.timeline-groups-text {
	color: #4d4d4d;
	padding-left: 10px;
	padding-right: 10px;
}

div.timeline-currenttime {
	-moz-box-sizing: border-box;
	background-color: #ff7f6e;
	box-sizing: border-box;
	width: 2px;
}

div.timeline-customtime {
	-moz-box-sizing: border-box;
	background-color: #6e94ff;
	box-sizing: border-box;
	cursor: move;
	width: 2px;
}

div.timeline-navigation {
	-moz-border-radius: 2px; /* For Firefox 3.6 and older */
	-moz-box-sizing: border-box;
	background-color: #f5f5f5;
	border: 1px solid #bebebe;
	border-radius: 2px;
	box-sizing: border-box;
	color: #808080;
	font-family: arial;
	font-size: 20px;
	font-weight: bold;
}

div.timeline-navigation-new, div.timeline-navigation-delete, div.timeline-navigation-zoom-in,
	div.timeline-navigation-zoom-out, div.timeline-navigation-move-left,
	div.timeline-navigation-move-right {
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	cursor: pointer;
	float: left;
	height: 36px;
	padding: 10px;
	text-decoration: none;
	width: 36px;
}

div.timeline-navigation-new {
	background: url('img/16/new.png') no-repeat center;
}

/* separator between new and navigation buttons */
div.timeline-navigation-new-line {
	border-right: 1px solid #bebebe;
}

div.timeline-navigation-delete {
	background: url('img/16/delete.png') no-repeat center;
}

div.timeline-navigation-zoom-in {
	background: url('img/16/zoomin.png') no-repeat center;
}

div.timeline-navigation-zoom-out {
	background: url('img/16/zoomout.png') no-repeat center;
}

div.timeline-navigation-move-left {
	background: url('img/16/moveleft.png') no-repeat center;
}

div.timeline-navigation-move-right {
	background: url('img/16/moveright.png') no-repeat center;
}
