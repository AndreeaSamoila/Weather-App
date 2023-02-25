function getDayOfTheWeek(utc) {
    /* utc format to date */
    const date = new Date(utc * 1000);
    const day = date.getDay();
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday"
    }
}

function numberWithZero(number) {
    if( number < 10) {
        return `0${number}`;
    }
    return number;
}

function getHour(utc) {
    const date = new Date(utc * 1000)
    const hours = numberWithZero(date.getHours());
    const minutes = numberWithZero((date.getMinutes()));
    return `${hours}:${minutes}`;
}