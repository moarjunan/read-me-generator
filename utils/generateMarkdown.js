function renderLicenseBadge(license) { 
  if (license !== 'None') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}


function renderLicenseSection(license) {
  if (license !== 'None') {
  return `
  ## [License](#table-of-contents)

  The application uses the ${license} license:

  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }



function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [contributors](#contributors)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## [contributors](#table-of-contents)
  
  ${data.contributors}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  If you have any questions, contact me at:

  [GitHub](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;