var menu = document.getElementsByClassName('menu')[0],
	 menu_firstrow = document.getElementsByClassName('menu_firstrow')[0],
	 menu_secondrow = document.getElementsByClassName('menu_secondrow')[0],
	 menu_thirdrow = document.getElementsByClassName('menu_thirdrow')[0],
	 activemenu = false,
	 header_ul = document.getElementsByClassName('hide_menu')[0];

menu.onclick = menu_change;

function menu_change() {
	if (!activemenu) {
		menu_thirdrow.style.marginTop = '0';
		menu_firstrow.style.transform = 'translate(0px,13px)';
		menu_thirdrow.style.transform = 'translate(0px,-5px)';

		// Поворот через 0,5 сек
		var timer = setTimeout(menu_rotate, 500);

		function menu_rotate() {
			menu_firstrow.style.transform += ' rotate(45deg)';
			menu_thirdrow.style.transform += ' rotate(45deg)';
			menu_secondrow.style.transform = 'rotate(-45deg)';	
			header_ul.style.opacity=1;		
			// Активация кнопки
			activemenu = true;
		}
	}	else {
		menu_firstrow.style.transform = 'translate(0px,13px)';
		menu_thirdrow.style.transform = 'translate(0px,-5px)';
		menu_secondrow.style.transform = '';

		var timer = setTimeout(menu_rotateoff, 500);

		function menu_rotateoff() {
			menu_thirdrow.style.marginTop = 8 + 'px';
			menu_firstrow.style.transform = '';
			menu_thirdrow.style.transform = '';
			header_ul.style.opacity=0;
			activemenu = false;
		}
	}
}