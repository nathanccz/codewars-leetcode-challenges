/*
Date of completion: 09-23-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Story:
In the Fake website #1, John finally chose a good name for his website with your help: c0dewars.com. This time, he needs to choose a best server to create his website.

What is a best server? John mainly from two aspects to consider:

One is the performance, including network delay and disconnection
rate; The other is the price. that is, the annual rent of the server.

John has selected some servers, asked the annual rental price of these servers, and each server for 1 day of performance testing (24 hours). Get one test data per hour, test data is the value of network delay. Unit: millisecond.

Please help John write the function bestServer to find the best choice. Function bestServer accept 1 parameter servers, it is an array of servers data.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects, each object representing a server

-----

Return:

A string, indicating the chosen server name

-----

Examples: 

const sv1={name:"server1",price:300,testdata:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv2={name:"server2",price:400,testdata:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv3={name:"server3",price:300,testdata:[-1,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv4={name:"server4",price:300,testdata:[-1,-1,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv5={name:"server5",price:400,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv6={name:"server6",price:300,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv7={name:"server7",price:200,testdata:[-1,-1,-1,-1,-1,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv8={name:"server8",price:200,testdata:[301,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv9={name:"server9",price:501,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]};

    Test.assertSimilar(bestServer([sv1,sv2]) , "server1");
    Test.assertSimilar(bestServer([sv3,sv4]) , "server3");
    Test.assertSimilar(bestServer([sv1,sv5]) , "server5");


------

Pseudo Code: 

function bestServer(servers)
   create currServer object, initialized with theses keys:
        name
        disconnection rate
        network delay
        price

   loop through servers
        

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function bestServer(servers) {
  let bestServer = {
    name: '',
    disconnectRate: Infinity,
    averageDelay: Infinity,
    price: Infinity,
  }

  for (const server of servers) {
    const disconnections = []
    const delays = []
    const currServer = {}
    let exceedsDelayThreshold = false

    for (const datum of server.testdata) {
      if (datum === -1) {
        disconnections.push(datum)
      } else if (datum < 300) {
        delays.push(datum)
      } else {
        exceedsDelayThreshold = true
        break
      }
    }

    currServer.name = server.name
    currServer.disconnectRate = disconnections.length / server.testdata.length
    currServer.averageDelay =
      delays.reduce((sum, curr) => sum + curr, 0) / delays.length
    currServer.price = server.price

    if (
      currServer.disconnectRate > 0.2 ||
      currServer.price > 500 ||
      exceedsDelayThreshold
    )
      continue

    if (currServer.disconnectRate < bestServer.disconnectRate) {
      bestServer = currServer
    } else if (
      currServer.disconnectRate === bestServer.disconnectRate &&
      currServer.averageDelay < bestServer.averageDelay
    ) {
      bestServer = currServer
    } else if (
      currServer.averageDelay === bestServer.averageDelay &&
      currServer.price < bestServer.price
    ) {
      bestServer = currServer
    }
  }

  return bestServer.name
}
