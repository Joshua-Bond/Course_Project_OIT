function check() {
	var quest = 1;
	var answ = 0;
	var select;
	for (quest = 1; quest <= 10; quest++) {
		var q = document.forms["quiz"].elements["q"+quest];
		for (var i = 0; i < q.length; i ++) {
			if (q[i].checked) { select = q[i].value; }
			else { continue; }
			if (select == "y") { answ ++ }
		}
	}
	var paragraph = document.querySelector("p.score");
	paragraph.textContent = "Правильных ответов: " + answ + "/10";
}
