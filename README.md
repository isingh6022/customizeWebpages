### How to use

Just go to directory ./src/sites and create a file to export an object containing the customizations that you would like to apply on a website. These should be of type "Personalization".

"Personalization" is a class whose constructor takes 3 arguments :-

1. name : a string that does nothing.
2. regex: a regex that is matched with current url to check if the customizations are to be applied to current page.
3. options: an object that contains 2 properties - 1) css - css to be added to the current page, 2) a callback function that if provided will be executed in the current page.

Note: the callback will not have access to the scope in which the scripts of the webpage run - it can manipulate the dom though. For more and accurate details - read how extension scripts are run in chrome browser.
