Cucumber Framework
====================


## Requirements

- Node version 12.X or higher 

  To find your version locally:
    node --version
    
  Install NODE:
    https://nodejs.org/en/download/
    
- A preinstalled browser driver
    npm install chromedriver
    read more https://www.npmjs.com/package/chromedriver
    
- A preinstalled browser
  Install chromebrowser(for Linux):
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    sudo dpkg -i google-chrome-stable_current_amd64.deb
    
 P.S. chromedriver and chromebrowser must be the same version
  

## Quick start

1. Clone the git repo: 
    git clone git@github.com:connectedioinc/UIautomation.git
2. Navigate to:
    cd UIautomation/ && cd cucumber/
3. Install the dependencies:
    npm install
4. Create a .env file in the root directory of your project and
   add variables on new lines in the form of:
    EMAIL='test@email.com'
    PASSWORD='password'
    
         
# How to run the test

  npm test
  

# Configurations

  To configure your tests, check out the "fixtures/params.js" file in your test directory
  
   
# How to write a test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/)
that means that you write down what's supposed to happen in a real language. All test files are located in
`features/*` and have the file ending `.feature`.

Cucumber tutorial: 
https://cucumber.io/docs/guides/10-minute-tutorial/

#
https://github.com/connectedioinc/UIautomation
#
https://cio.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc&group_id=253
https://cio.testrail.io/index.php?/suites/view/10&group_by=cases:section_id&group_order=asc&group_id=1110
#
qatest@gmail.com
#
qatest123
#
git push -u origin vyacheslav



