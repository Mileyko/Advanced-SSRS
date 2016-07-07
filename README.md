# Advanced-SSRS
Special recipes how to cook SSRS with JavaScript.

In this repo you can find examples about advanced use of SSRS reports.

In highchart folder you can find implementation of examples which described in the article [Running Highcharts within SSRS (or any JS Graph Library)](http://thinknook.com/running-highcharts-within-ssrs-or-any-js-graph-library-2013-01-22/). One moment i would like to pay you attention. We use highchartdemo.js file which is not embedded in the report. In the article says that "You’ll need to replace 'http://ai-prd-ssrs-1/highchartdemo.js' in the code above with your local path". You need to deploy this js-file on the web server, not local. I mean you can not replace this path on your local path like C:\highchartdemo.js. JavaScript can not access your local file system. Try to use IIS web server instead it. If you have no IIS server yet you need to deploy it. Then you can copy highchartdemo.js file into the inetpub folder (C:\inetpub\wwwroot for default).

In vex folder you can find my example how to use [vex.js](http://github.hubspot.com/vex/docs/welcome/) library for creating beatiful dialog boxes. In this example i use callback for async loading of dependencies. As well as in the previous example you will need to deploy vex.js file on the web server.
