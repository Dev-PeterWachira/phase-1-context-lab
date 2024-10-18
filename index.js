/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrays) {
    return arrays.map(arr => createEmployeeRecord(arr));
}

function createTimeInEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    const timeInEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    };
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    const timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

function allWagesFor(employee) {
    if (!employee || !employee.timeInEvents) {
        return 0; 
    }
    const dates = employee.timeInEvents.map(event => event.date);
    return dates.reduce((totalWages, date) => {
        return totalWages + wagesEarnedOnDate.call(employee, date);
    }, 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
        return total + allWagesFor(employee);
    }, 0);
}

function allWagesFor(employee) {
    const eligibleDates = employee.timeInEvents.map(event => event.date);
    
    return eligibleDates.reduce((memo, date) => {
        return memo + wagesEarnedOnDate(employee, date);
    }, 0);
}



const allWagesForBound = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

