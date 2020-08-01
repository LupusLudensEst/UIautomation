# UIautomation

All related Selenium goes here:

Please provide links to download, provide command to run to install and add to system variabels etc etc, neew to add screenshots of steps etc

Pre Requirements:

Install Git

Install Java JDK

Install Maven

Project: UIautomation/selenium

Tests: UIautomation/selenium/UIautomation-Selenium_LoginTC

Steps:
1. git clone https://github.com/connectedioinc/UIautomation.git
2. Build maven project: 
mvn.compile
3. Run project: 
mvn clean test -DsuiteXmlFile=testng.xml
4. Test reports can be found here:
\target\surefire-reports\index.html
