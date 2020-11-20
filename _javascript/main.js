function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

function displayLenghtTimeCurrentEmployer() {
    // date début
    var firstDay = new Date(2016,6,1);


    var dateCurrentEmployeur = document.getElementById("dateCurrentEmployeur");
    var today = Date();

    var numberOfDays = datediff(new Date(firstDay), new Date(today));
    var numberOfYearsTmp = numberOfDays / 365;
    var numberOfYears = Math.trunc(numberOfYearsTmp);
    var numberOfMonths = Math.trunc(numberOfYearsTmp.toString().split(".")[1] / 1000000000000000 * 12);

    var numberOfMonthsText = numberOfMonths != 0 ? " et " + numberOfMonths + " mois" : "";

    dateCurrentEmployeur.innerHTML = "Depuis " + numberOfYears + " ans" + numberOfMonthsText + ".";
}

displayLenghtTimeCurrentEmployer();