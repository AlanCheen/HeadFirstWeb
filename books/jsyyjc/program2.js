
document.writeln('</br>');
document.writeln('第二章');
document.writeln('</br>');

var flight={

    airline: "Oceanic",
    number : 815,
    status : "good",

    departure: {
        IATA : "SYD",
        time : "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival : {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}

var status = flight.status || "unknown";

flight.equipment  = {
    model: 'Boeing 777'
}

flight.status = 'overdue';

typeof flight.number //number
typeof flight.status //string
typeof flight.arrival //object
typeof flight.manifest //undefined
typeof flight.toString //function
typeof flight.constructor //function

flight.hasOwnProperty('number') //true
flight.hasOwnProperty('constructor')//false

var name;
for (name in flight){
    if(typeof flight[name] !=='function'){
        document.writeln(name + ':'+flight[name]);
    }
}

document.writeln("</br>");