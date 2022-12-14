const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
  navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click', activeLink))

let searchBtn = document.querySelector('searchBtn');
let closeBtn = document.querySelector('closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.onclick = function(){
  searchBox.classList.add('active');
}


// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})





// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})





// ---------- CHARTS ----------

// APEXCHART
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// BAR CHART
// var barChartOptions = {
//   series: [{
//     data: [10, 8, 6, 4, 2],
//     name: "Products",
//   }],
//   chart: {
//     type: "bar",
//     background: "transparent",
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: [
//     "#2962ff",
//     "#d50000",
//     "#2e7d32",
//     "#ff6d00",
//     "#583cb3",
//   ],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: "40%",
//     }
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     opacity: 1,
//   },
//   grid: {
//     borderColor: "#55596e",
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   legend: {
//     labels: {
//       colors: "#f5f7ff",
//     },
//     show: true,
//     position: "top",
//   },
//   stroke: {
//     colors: ["transparent"],
//     show: true,
//     width: 2
//   },
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: "dark",
//   },
//   xaxis: {
//     categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
//     title: {
//       style: {
//         color: "#f5f7ff",
//       },
//     },
//     axisBorder: {
//       show: true,
//       color: "#55596e",
//     },
//     axisTicks: {
//       show: true,
//       color: "#55596e",
//     },
//     labels: {
//       style: {
//         colors: "#f5f7ff",
//       },
//     },
//   },
//   yaxis: {
//     title: {
//       text: "Count",
//       style: {
//         color:  "#f5f7ff",
//       },
//     },
//     axisBorder: {
//       color: "#55596e",
//       show: true,
//     },
//     axisTicks: {
//       color: "#55596e",
//       show: true,
//     },
//     labels: {
//       style: {
//         colors: "#f5f7ff",
//       },
//     },
//   }
// };

// var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
// barChart.render();