function createHeaderTemplate() {
  let header = $("#header-section");
  let template = $("#header-template")[0].innerHTML.replace("&gt;", ">");
  let headerContent = Mustache.render(
    template,
    {},
    {
      header: 
    `<header class="header-section container-fluid">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
            <img src="/images/image4.png" width="50" height="50" class="d-inline-block align-top" alt="" />
            L'ultima Cena
        </a>
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav">
            <!-- LINKS -->

            <li class="nav-item active">
            <a class="nav-link" href="/">Build Your Pizza!</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/app/order/orders.html">Orders</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/app/ingredient/ingredients.html">Ingredients</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/app/beverage/beverages.html">Beverages</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/app/size/sizes.html">Sizes</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/app/report/reports.html">Reports</a>
            </li>
        </ul>
        </nav>
    </header>`,
    }
  );
  header.html(headerContent);
}

function createNotificationTemplate() {
  let notification = $("#notification-section");
  let template = $("#notification-template")[0].innerHTML.replace("&gt;", ">");
  let notificationContent = Mustache.render(
    template,
    {},
    {
      notification: '<div id="notification-alert" role="alert"></div>'
    }
  );
  notification.html(notificationContent);
}

function createTemplates() {
    createHeaderTemplate();
    createNotificationTemplate();
}

window.addEventListener("load", createTemplates, false);
