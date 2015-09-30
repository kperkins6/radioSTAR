# radioSTAR
**_Radio Statistical Tracking and Automated Review_** is an accountability program for radio stations and their DJs.  radioStar is a web application that builds profiles for each DJ at a specific Radio Station, giving them a compliance rating, artist metrics, listener counts, and general feedback about the status of their show. When a DJ is out of compliance, it will affect their compliance rating and an e-mail will be automatically sent to the appropriate manager(s) at a station to notify them of the compliance breach. We will be creating AI to do all of these actions efficiently in real time.


Currently, radioSTAR is being developed to work with KCSC Radio at CSU, Chico. Plans beyond that will be announced at a later time.  

Language: [Python](https://www.python.org/)  
Framework: [Django](https://www.djangoproject.com/)  
Application: Website (We know you don't need a link for this one)  
Test Radio Station: [KCSC Radio](http://kcscradio.com/)  


Want to work with us?  
  1. Introduce Yourself
  2. See the steps below to get yourself ready to contribute!

##Installing Python
####Mac Installation
1. Make sure **Xcode Command Line Tools** are installed  
  **Option 1** (takes up less space)  
    * Open a terminal window  
    * Retrieve the most recent Xcode tools by typing the following command:  
      <pre>xcode-select –install</pre>
    (note: if you receive an error saying already installed, just keep moving)

  **Option 2** (takes up more space)  
    * Download the full Xcode files from Apple: [Xcode](https://developer.apple.com/xcode/download/)
    * Once fully downloaded, install and proceed
    
2. Make sure **Homebrew** is installed.  
  * We need **brew** in order to download pyton and several other important essentials for this project. We are able to use the following script to install brew and learn what it's adding:
    <pre>ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”</pre>
  * Press ENTER and enter your password to allow the install
  * To ensure everything worked, type the following:
    <pre>brew doctor</pre>
  * Once you’ve installed Homebrew, insert the Homebrew directory at the top of your PATH environment variable. You can do this by adding the following line at the bottom of your *~/.profile* file[2]
    <pre>export PATH=/usr/local/bin:/usr/local/sbin:$PATH</pre>
  * You may also install **Homebrew Cask**[4], which allows for downloading larger OS X applications and binaries, but we won't need it for this project. You can install via the command line with this command:
    <pre>brew install caskroom/cask/brew-cask</pre>

3.Let's Get Python!
  * We can start by...

####Windows Installation

##Installing Django

##Starting up Django

##Coding Practices
Rules to live by: [15 Code Necessities](http://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)


##### Current Dev. Team (A-Z):
*Annika, Chad, Jay, Jesse, Kevin, Matt*

##References
1. Homebrew for OS X install: http://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/
2. Python Install : http://docs.python-guide.org/en/latest/starting/install/osx/
3. 
4. Cask by Homebrew : http://caskroom.io/
