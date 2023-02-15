//falta añadir metas semanales en el perfil tambien si se me olvida deje un buen dashboard de eejmplo en los pin de chrome
import { setNewScramble } from "./modules/scramble/scramble-generator.js";
import { handleDownKeys, handleUpKeys } from "./modules/timer/handle-keys.js";
import { generateStatistics } from "./modules/api/fetch-statistics.js";
import { updateStatisticsProfileChart } from "./modules/graph/graphs.js";
import { toggleActiveNavBar } from "./modules/toggle/toggle.js";


document.addEventListener("DOMContentLoaded", (e) => {
	
	const currentUrl = window.location.href;

	if (currentUrl.includes('/timer')) {
		
	  document.querySelector("#category").addEventListener("input", setNewScramble);
	  document.querySelector("#category").addEventListener("input", generateStatistics);
	  document.addEventListener("keydown", handleDownKeys);
	  document.addEventListener("keyup", handleUpKeys);
	  
	} else if (currentUrl.includes('/profile')) {
		toggleActiveNavBar()
	  const filterCategory = document.querySelector("#category-filter")
	  const filterCube = document.querySelector("#cube-filter")
	  if (filterCategory) {
		  updateStatisticsProfileChart();
		  filterCategory.addEventListener("change", updateStatisticsProfileChart)
		  
	  }
	}
	
});


