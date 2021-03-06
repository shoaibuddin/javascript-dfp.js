javascript-dfp.js
======================================================

javascript-dfp -  A pure javascript implementation for Google DFP
---------------------

This script enables Double Click for Publishers (DFP) by Google working on your page. Just include this script on your page, initialize as described below and you should be good to go.

Pre-requisites/Requirements
---------------------
This library requires jquery and gpt.js (the latest version can be obtained from google's CDN network ) to be included in the head section of your page. 

Installation:
---------------------
You can either choose to clone this repo in your local workspace or just install it via bower. I highly recomment bower, it's just so easy:
```bower install javascript-dfp --save```

Please install grunt for a smooth and refined build process.

Grunt installation:
```npm install -g grunt-cli```

Node installation:
```sudo apt-get install nodejs```

Once all of the above steps are done, run ```npm install``` where this cloned repository resides.

For more info on grunt please refer: http://gruntjs.com/getting-started

Next step would be to add the js file reference:

```<script type="text/javascript" src="...YOUR PATH/javascript-dfp.js"></script>```

To show an ad on your page use the following:

Custom targetting here is a JSON object, use a JSON object in case you have a global object that is used across all the ads.
```
<div id="div-gpt-test-ad" style="width:300px; height:250px;">
  <script type="text/javascript">
    var targettingAttr = {"test":"test"}; //this can be a global object
    $.adTagInit.setAndDisplayAdSlot('6355419','Travel/Europe/France/Paris', [300, 250], 'div-gpt-test-ad', targettingAttr);
  </script>
</div>
```

Custom targetting here is a string, this will be used only for a particular ad. 
```
<div id="div-gpt-test-ad" style="width:300px; height:250px;">
  <script type="text/javascript">
    $.adTagInit.setAndDisplayAdSlot('6355419','Travel/Europe/France/Paris', [300, 250], 'div-gpt-test-ad', '{"test":"test"}');
  </script>
</div>
```

Specify an ad with multiple dimensions
```
<div id="div-gpt-test-ad" style="width:300px; height:250px;">
  <script type="text/javascript">
    $.adTagInit.setAndDisplayAdSlot('6355419','Travel/Europe/France/Paris', [[300, 250],[400,600]], 'div-gpt-test-ad', '{"test":"test"}');
  </script>
</div>
```

Usage example:
---------------------
Please refer to https://github.com/jahnavi310/javascript-dfp.js/blob/master/dfp-ad.html to see how the script is initialized.

Issues
---------------------
Any issues found herewith and suggestions for improvement are most welcome

Contributing
---------------------
I would highly appreciate Pull Requests and contributions are also most welcome. After all the installation is done, you should be able to edit javascript-dfp.js at your own will, once finished just run grunt to make sure you are totally error free.

After this feel free to commit your changes to the master branch. THANKS in advance.
