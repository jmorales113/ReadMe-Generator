function generateMarkdown(data, getUserResponse) {
    return `
  # ${data.Title}
  //badge
  ## Description

  ${data.description}

  ## Table of Contents

  *
  `;
  }
  
  module.exports = generateMarkdown;
  