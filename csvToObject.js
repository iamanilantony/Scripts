const fs = require("fs");
const csv = require("csv-parser");

function toSentenceCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  // Convert the first letter to uppercase and the rest to lowercase
  return str.replace(/^(.)|\s+(.)/g, match => match.toUpperCase());
}

// Read the CSV file
const valueArray = [];
// ...

fs.createReadStream("/Users/anilantony/Downloads/Employer.csv")
  .pipe(csv())
  .on("data", (row) => {
		console.log(row['Company Name']);
    // const obj = {
    //   hdfcCode: row.EMPLOYERID.toLowerCase(),
    //   names: [toSentenceCase(row.EMPLOYERNAME.toLowerCase())],
    // };
    
    // Add "hdfc" key-value pairs to the "lendors" array
    // obj.lendors = [{ hdfc: row.Id }];

    if(typeof(row['Company Name']) === 'string') valueArray.push(row['Company Name'].toString());
  })
  .on("end", () => {
    // const jsData = valueArray
      // .map(obj => {
      //   const lendorsArray = obj.lendors.map(lendor => {
      //     const lendorProperties = Object.entries(lendor)
      //       .map(([key, value]) => `name: "${key}", code: "${value}"`)
      //       .join(', ');
      //     return `{ ${lendorProperties} }`;
      //   }).join(', ');

      //   // delete obj.lendors; // Removing the lendors property to replace it with formatted lendorsArray

      //   // const properties = Object.entries(obj)
      //   //   .map(([key, value]) => {
      //   //     if (key === 'lendors') {
      //   //       return `${key}: [${lendorsArray}]`;
      //   //     } else {
      //   //       return `${key}: "${value}"`;
      //   //     }
      //   //   })
      //     .join(', ');
        
      //   return `{ ${properties} }`;
      // })
      // .join(',\n');

      // console.log(jsData)
  
    // Create final JavaScript code
    // const jsCode = `[${jsData}]`;
  
    // // Write JS code to a file
    const jsonData = JSON.stringify(valueArray);
    fs.writeFile('employer.js', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Data written to file successfully.');
      }
    });
  });

