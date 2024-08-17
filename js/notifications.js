/**
 * Shows/hides notification
 */
function toggleNotificationAlert(notificationAlert) {
    notificationAlert.toggle();
    setTimeout(() => notificationAlert.toggle(), 5000);
}

function showSuccessNotification(title, message) {
    let notificationAlert = $("#notification-alert");
    notificationAlert.html(`<h4 class="alert-heading">${title}</h4><p>${message}</p>`);
    notificationAlert.attr("class","alert alert-success");
    togglenotificationAlert(notificationAlert);
}

function showFailureNotification(title, message, error) {
    let notificationAlert = $("#notification-alert");
    notificationAlert.html(`<h4 class="alert-heading">${title}</h4><p>${message}</p><h6>${error}</h6>`);
    notificationAlert.attr("class","alert alert-danger");
    togglenotificationAlert(notificationAlert);
}