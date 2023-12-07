const fs = require("fs");
const csv = require("csv-parser");

const toSentenceCase = str =>
  str.replace(/(^|\.\s+|\?\s+|\!\s+)(.)/g, match => match.toUpperCase());

// Read the CSV file
const valueArray = [];
// ...

fs
  .createReadStream(
    "/Users/anilantony/Documents/Projects/Scripts/Scripts/finbudcity.csv"
  )
  .pipe(csv())
  .on("data", row => {
    console.log(row);
    const obj = {
      id: row.CityName.toLowerCase(),
      names: [toSentenceCase(row.CityName)],
      county: "India",
      state: row.BranchState,
      lendors: [
        {
          name: "hdfc",
          cityCode: row.CityCode.replace(/,/g, ""),
          dsaCode: row.DSACode.replace(/,/g, ""),
          stateCode: row.StateID
        }
      ]
    };
    valueArray.push(obj);
    // if(typeof(row['Company Name']) === 'string') valueArray.push(row['Company Name'].toString());
  })
  .on("end", () => {
    console.log(valueArray);
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
    fs.writeFile("hdfcCities.js", jsonData, "utf8", err => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Data written to file successfully.");
      }
    });
  });
