
/**
 * Get the form and submit it with fetch API
 */
let reportForm = $("#report-form");
reportForm.submit(event => {
    let report = getReportData();

    event.preventDefault();
    event.currentTarget.reset();
    window.location.href = '/app/report/report-viewer.html?' + new URLSearchParams(report).toString();
});

/**
 * Gets the report data with JQuery
 */
function getReportData() {
    return {
        startDate: $("input[name='start-date']").val(),
        endDate: $("input[name='end-date']").val()
    };
}
