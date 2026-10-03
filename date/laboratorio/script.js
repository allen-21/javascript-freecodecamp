const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`

function formatDateMMDDYYYY(date){
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(date){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Formatted Date (Month Day, Year): ${date.toLocaleDateString('en-US', options)}`;
}

console.log(currentDateFormat);
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));