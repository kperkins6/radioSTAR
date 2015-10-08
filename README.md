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

##Before We Begin
  * We will be covering the installation of the following:
    - Python
    - Setuptools 
    - PIP
    - Django
  * The following will cover an Installation for OS X and Windows.  Linux to come soon.  

####Please Select Your Operating system below:
  * [Mac OS X](#macInstall)  
  * [Linux](#linuxInstall)  ( Coming Soon )
  * [Windows](#windowsInstall)  

<a name="macInstall"></a>
##Mac OS X Installation 
####Installing Python
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

3. Let's Get Python!
  * We can start by simply typing the following into a terminal:
    <pre>brew install python</pre>
  * "Homebrew installs Setuptools and pip for you. Setuptools enables you to download and install any compliant Python software over a network with a single command (easy_install). It also enables you to add this network installation capability to your own Python software with very little work. pip is a tool for easily installing and managing Python packages, that is recommended over easy_install. It is superior to easy_install in several ways, and is actively maintained."[2]
  * *If you want* to ensure you have pip and python, fully quit out of the terminal application.  Open up a new terminal and type:
   <pre>which python</pre> 
   and
   <pre>which pip</pre>
  * Congratulations, you now have Python!  

####Installing Django
#####Before We Begin
  * Make sure you have Python, Setuptools, and PIP.
  * If you do not, install them now.  You can follow the guide above.  

1. Using PIP, we will install Django
  * To Install Django, all we need to do is open a command prompt and type:
    <pre>pip install django</pre>
  * When finished, you can type:
    <pre>django-admin --version</pre>

##Starting up Django
####Before We Begin
  * Coming Soon
  

######End of Mac Installation


<a name="windowsInstall"></a>
##Windows Installation 
####Installing Python
1. Downloading Python from the source
  * The first place we can go is Python's website.  Head to this link to grab the Windows MSI Installer:
    <pre>https://www.python.org/downloads/</pre>
  * Follow the installer's instructions on-screen
  * After installation, open the command prompt and check the installed version using the following command: 
   <pre>python --version</pre>
    "If you encounter a problem, make sure you have set the **PATH** variable correctly. You might need to adjust your **PATH** environment variable to include paths to the Python executable and additional scripts. For example, if your Python is installed in **C:\Python34\**, the following paths need to be added to **PATH**" [4]:
<pre>C:\Python34\;C:\Python34\Scripts;</pre>
2. Download Setuptools
  * Setuptools is necessary for downloading Python Packages
  * You can directly download the file [ez_setup.py](https://bootstrap.pypa.io/ez_setup.py) by right clicking, save link as.  
  * Once downloaded, it is as simple as right clicking and running the program
  * You can go to [Python's Setuptools page](https://pypi.python.org/pypi/setuptools) for more details.
3. Install PIP
  * PIP is a Python Package Manager using the Python Package Index.  Thankfully, it's pretty straight forward to install.
  * Open up a command prompt and type:
    <pre>easy_install pip</pre>
  * If these steps do not work, try restarting command prompt or your computer to make sure setuptools had a chance to start.
  * If that didn't help, head to [this install guide](https://pip.pypa.io/en/latest/installing/) for pip
4. You now have all the Python tools you need to get started!

####Installing Django
#####Before We Begin
  * Make sure you have Python, Setuptools, and PIP.
  * If you do not, install them now.  You can follow the guide above.  

1. Using PIP, we will install Django
  * Thankfully, all of the previous steps had the hard work.
  * To Install Django, all we need to do is open a command prompt and type:
    <pre>pip install django</pre>
  * When finished, you can type:
    <pre>django-admin --version</pre>
  * Once you get Django up and running, if the help text is displayed endlessly, you can try this solution:
    > If django-admin only displays the help text no matter what arguments
    > it is given, there is probably a problem with the file association in
    > Windows. Check if there is more than one environment variable set for 
    > running Python scripts in **PATH**. This usually occurs when there is more
    > than one Python version installed.
    
  * If using a proxy and hitting issues, here is a fix direct from Django's Guide:  
    > If you are connecting to the internet behind a proxy, there might be problem in
    > running the commands **easy_install pip** and **pip install django**. Set the environment 
    > variables for proxy configuration in the command prompt as follows:
    > <pre>set http_proxy=http://username:password@proxyserver:proxyport
    set https_proxy=https://username:password@proxyserver:proxyport</pre>

2. You're finished!

##Starting up Django
####Before We Begin
  * Coming Soon

######End of Windows Installation


<a name="linuxInstall"></a>
##Linux Installation 
####Installing Python
  * Coming Soon

####Installing Django
  * Coming Soon

####Starting up Django
#####Before We Begin
  * Coming Soon

######End of Linux Installation


##Coding Practices
Rules to live by: [15 Code Necessities](http://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)


##### Current Dev. Team (A-Z):
*Annika, Chad, Jay, Jesse, Kevin, Matt*

##References
1. Homebrew for OS X install: http://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/
2. Python Install : http://docs.python-guide.org/en/latest/starting/install/osx/
3. Django Install Windows: https://docs.djangoproject.com/en/1.8/howto/windows/
4. Cask by Homebrew : http://caskroom.io/
5. Easy Tutorials/Django-Install : https://github.com/EasyTutorials/Django-Install
