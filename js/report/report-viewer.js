const urlParams = new URLSearchParams(window.location.search);
const startDate = urlParams.get('startDate');
const endDate = urlParams.get('endDate');

fetch('http://127.0.0.1:5000/report?' + urlParams.toString(), {
    method: 'GET',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
})
    .then(res => res.json())
    .then(res => createReport(res));

function createReport(report) {
    createTitle({startDate: startDate, endDate: endDate})
    createRevenueByMonth(report["month_revenues"]["months"], report["month_revenues"]["revenues"]);
    createTopCustomers(report["top_clients"]);
    createTopIngredient([report["top_ingredient"]]);
    createTopBeverage([report["top_beverage"]]);
}

function createTitle(dates) {
    let template = $("#report-title-template")[0].innerHTML;
    let titleContent = Mustache.render(template, dates);
    let title = $("#report-title");
    title.html(titleContent);
}

function createRevenueByMonth(months, revenues) {
    const barColors = Array(months.length).fill("blue");
    barColors[indexOfMax(revenues)] = "orange";
    new Chart("report-revenue-by-month", {
        type: "bar",
        data: {
          labels: months,
          datasets: [{
            backgroundColor: barColors,
            data: revenues
          }]
        },
        options: {
            legend: {display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        color:"red",
                        callback: function(value, index, ticks) {
                            return "$" + value;
                        }
                    }
                }]
            }
        }
    });
}

function indexOfMax(array) { 
    return array.reduce((maxIndex, elem, i, array) =>  
        elem > array[maxIndex] ? i : maxIndex, 0); 
}

function createTopCustomers(customers) {
    let rows = customers.map(element => createCustomerTemplate(element));
    let table = $("#top-customers tbody");
    table.append(rows);
}

function createCustomerTemplate(customer) {
    let template = $("#report-customer-template")[0].innerHTML;
    customer["toFixed"] = mustacheToFixed;
    return Mustache.render(template, customer);
}

function createTopIngredient(ingredients) {
    let rows = ingredients.map(element => createOrderDetailTemplate(element));
    let table = $("#top-ingredients tbody");
    table.append(rows);
}

function createTopBeverage(beverages) {
    let rows = beverages.map(element => createOrderDetailTemplate(element));
    let table = $("#top-beverages tbody");
    table.append(rows);
}

function createOrderDetailTemplate(orderDetail) {
    let template = $("#report-order-additional-template")[0].innerHTML;
    orderDetail["toFixed"] = mustacheToFixed;
    return Mustache.render(template, orderDetail);
}

function mustacheToFixed() {
    return function(num, render) {
        return parseFloat(render(num)).toFixed(2);
    }
}