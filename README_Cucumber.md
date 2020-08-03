# UIautomation

All related Cucumber goes here:

1. Istall steps:

Install NodeJS  https://nodejs.org/en/download/

Install Yarn  https://classic.yarnpkg.com/en/docs/install/#windows-stable

Install Java JDK  https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

Install Visual Studio Code  https://code.visualstudio.com/Download

Install "Cucumber (Gherkin) Full Support" in VS Code Marketplace



2. add necessary packages/dependencies

In terminal run:

yarn install

java -version

node -v

yarn -v


3. create test case

4. run test case

yarn run wdio


Please provide  what need to istall and steps for LINUX(Ubuntu server we use for test)

Yarn install:
Debian / Ubuntu
On Debian or Ubuntu Linux, you can install Yarn via our Debian package repository. You will first need to configure the repository:

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
On Ubuntu 16.04 or below and Debian Stable, you will also need to configure the NodeSource repository to get a new enough version of Node.js.

Then you can simply:

sudo apt update && sudo apt install yarn
Note: Ubuntu 17.04 comes with cmdtest installed by default. If you’re getting errors from installing yarn, you may want to run sudo apt remove cmdtest first. Refer to this for more information.

If using nvm you can avoid the node installation by doing:

sudo apt update && sudo apt install --no-install-recommends yarn
Note: Due to the use of nodejs instead of node name in some distros, yarn might complain about node not being installed. A workaround for this is to add an alias in your .bashrc file, like so: alias node=nodejs. This will point yarn to whatever version of node you decide to use.

Path Setup
If Yarn is not found in your PATH, follow these steps to add it and allow it to be run from anywhere.

Note: your profile may be in your .profile, .bash_profile, .bashrc, .zshrc, etc.

Add this to your profile: export PATH="$PATH:/opt/yarn-[version]/bin" (the path may vary depending on where you extracted Yarn to)
In the terminal, log in and log out for the changes to take effect
To have access to Yarn’s executables globally, you will need to set up the PATH environment variable in your terminal. To do this, add export PATH="$PATH:`yarn global bin`" to your profile, or if you use Fish shell, simply run the command set -U fish_user_paths (yarn global bin) $fish_user_paths

Test that Yarn is installed by running:

yarn --version
