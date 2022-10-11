var url = require('url');
var adr = "http://localhost:8080/default.htm?year=2022&month=october";
var q = url.parse(adr, true);

// return http://localhost:8080
console.log(q.host);
// return default.htm
console.log(q.pathname);
// return ?year=2022&month=october
console.log(q.search);
// return query object {year: 2022, month: october}
var qdata = q.query;
console.log(qdata.year + "\t" + qdata.month);
