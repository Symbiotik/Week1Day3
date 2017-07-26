var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArr(total, num) {
    return total + num;
}

function salesTaxReport(companySalesData, salesTaxRates) {

   const storeSales = {};

   for (let i = 0; i < companySalesData.length ; i += 1) {
     let branchSales = companySalesData[i].sales;
     let totalBranchSales = branchSales.reduce(sumArr);
     let provTax = salesTaxRates[companySalesData[i].province];
     let branchTax = totalBranchSales * provTax;

     let companyName = companySalesData[i].name;
     if (storeSales[companyName]) {
       storeSales[companyName].totalSales += totalBranchSales;
       storeSales[companyName].totalTaxes += branchTax;
     } else {
       storeSales[companyName] = {totalSales: totalBranchSales, totalTaxes: branchTax};
     }
  }
  return storeSales;

};

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results);