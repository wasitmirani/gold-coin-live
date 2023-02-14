"use strict";
!(function () {
    let e, t, a, r, o;
    o = isDarkStyle
        ? ((e = config.colors_dark.cardColor), (a = config.colors_dark.textMuted), (t = config.colors_dark.headingColor), (r = "dark"), "#5E6692")
        : ((e = config.colors.cardColor), (a = config.colors.textMuted), (t = config.colors.headingColor), (r = ""), "#817D8D");
    var s = document.querySelector("#swiper-with-pagination-cards"),
        s = (s && new Swiper(s, { loop: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { clickable: !0, el: ".swiper-pagination" } }), document.querySelector("#revenueGenerated")),
        i = {
            chart: { height: 130, type: "area", parentHeightOffset: 0, toolbar: { show: !1 }, sparkline: { enabled: !0 } },
            markers: { colors: "transparent", strokeColors: "transparent" },
            grid: { show: !1 },
            colors: [config.colors.success],
            fill: { type: "gradient", gradient: { shade: r, shadeIntensity: 0.8, opacityFrom: 0.6, opacityTo: 0.1 } },
            dataLabels: { enabled: !1 },
            stroke: { width: 2, curve: "smooth" },
            series: [{ data: [300, 350, 330, 380, 340, 400, 380] }],
            xaxis: { show: !0, lines: { show: !1 }, labels: { show: !1 }, stroke: { width: 0 }, axisBorder: { show: !1 } },
            yaxis: { stroke: { width: 0 }, show: !1 },
            tooltip: { enabled: !1 },
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#weeklyEarningReports")),
        i = {
            chart: { height: 202, parentHeightOffset: 0, type: "bar", toolbar: { show: !1 } },
            plotOptions: { bar: { barHeight: "60%", columnWidth: "38%", startingShape: "rounded", endingShape: "rounded", borderRadius: 4, distributed: !0 } },
            grid: { show: !1, padding: { top: -30, bottom: 0, left: -10, right: -10 } },
            colors: [config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors.primary, config.colors_label.primary, config.colors_label.primary],
            dataLabels: { enabled: !1 },
            series: [{ data: [40, 65, 50, 45, 90, 55, 70] }],
            legend: { show: !1 },
            xaxis: { categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: a, fontSize: "13px", fontFamily: "Public Sans" } } },
            yaxis: { labels: { show: !1 } },
            tooltip: { enabled: !1 },
            responsive: [{ breakpoint: 1025, options: { chart: { height: 199 } } }],
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#supportTracker")),
        i = {
            series: [85],
            labels: ["Completed Task"],
            chart: { height: 360, type: "radialBar" },
            plotOptions: {
                radialBar: {
                    offsetY: 10,
                    startAngle: -140,
                    endAngle: 130,
                    hollow: { size: "65%" },
                    track: { background: e, strokeWidth: "100%" },
                    dataLabels: { name: { offsetY: -20, color: a, fontSize: "13px", fontWeight: "400", fontFamily: "Public Sans" }, value: { offsetY: 10, color: t, fontSize: "38px", fontWeight: "600", fontFamily: "Public Sans" } },
                },
            },
            colors: [config.colors.primary],
            fill: { type: "gradient", gradient: { shade: "dark", shadeIntensity: 0.5, gradientToColors: [config.colors.primary], inverseColors: !0, opacityFrom: 1, opacityTo: 0.6, stops: [30, 70, 100] } },
            stroke: { dashArray: 10 },
            grid: { padding: { top: -20, bottom: 5 } },
            states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } },
            responsive: [
                { breakpoint: 1025, options: { chart: { height: 330 } } },
                { breakpoint: 769, options: { chart: { height: 280 } } },
            ],
        },
        s = (null !== s && new ApexCharts(s, i).render(), document.querySelector("#totalEarningChart")),
        i = {
            series: [
                { name: "Earning", data: [15, 10, 20, 8, 12, 18, 12, 5] },
                { name: "Expense", data: [-7, -10, -7, -12, -6, -9, -5, -8] },
            ],
            chart: { height: 230, parentHeightOffset: 0, stacked: !0, type: "bar", toolbar: { show: !1 } },
            tooltip: { enabled: !1 },
            legend: { show: !1 },
            plotOptions: { bar: { horizontal: !1, columnWidth: "18%", borderRadius: 5, startingShape: "rounded", endingShape: "rounded" } },
            colors: [config.colors.primary, o],
            dataLabels: { enabled: !1 },
            grid: { show: !1, padding: { top: -40, bottom: -20, left: -10, right: -2 } },
            xaxis: { labels: { show: !1 }, axisTicks: { show: !1 }, axisBorder: { show: !1 } },
            yaxis: { labels: { show: !1 } },
            responsive: [
                { breakpoint: 1468, options: { plotOptions: { bar: { columnWidth: "22%" } } } },
                { breakpoint: 1197, options: { chart: { height: 228 }, plotOptions: { bar: { borderRadius: 8, columnWidth: "26%" } } } },
                { breakpoint: 783, options: { chart: { height: 232 }, plotOptions: { bar: { borderRadius: 6, columnWidth: "28%" } } } },
                { breakpoint: 589, options: { plotOptions: { bar: { columnWidth: "16%" } } } },
                { breakpoint: 520, options: { plotOptions: { bar: { borderRadius: 6, columnWidth: "18%" } } } },
                { breakpoint: 426, options: { plotOptions: { bar: { borderRadius: 5, columnWidth: "20%" } } } },
                { breakpoint: 381, options: { plotOptions: { bar: { columnWidth: "24%" } } } },
            ],
            states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } },
        },
        s = (null !== s && new ApexCharts(s, i).render(), $(".datatables-projects"));
   
})();
