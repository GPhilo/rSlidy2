## About rSlidy2
rSlidy2 extends the HTML-based slide show creator Slidy2 by a set of responsive features and UI improvements. It works across browsers and is operated like PowerPoint but the creation and design of the slide-deck is done entirely with HTML and CSS. rSlidy2 requires no internet or server connection and works with pure HTML, CSS and JavaScript. Some features rely on other JavaScript libraries (like hammer.js or fulltilt.js) but those are not required to operate rSlidy2 in its most basic form. 


## 2 How to use

### 2.1 Create HTML
To understand the basic structure of a rSlidy2 slideshow please take a look at the demo.html. 
Create an html file in which you want to define your slides. Firstly you need to include a set of scripts and stylesheets. Include in this order: 


```
<link rel="stylesheet" href="styles/reset.css"/>
<link rel="stylesheet" href="styles/normalise.css"/>
<link rel="stylesheet" href="styles/slides-base.css"/>
<link rel="stylesheet" href="styles/slidyx.css" />
<link rel="stylesheet" href="demo.css" />

<script src="scripts/fulltilt.js" charset="utf-8" type="text/javascript"></script>
<script src="scripts/slidyx.js" charset="utf-8" type="text/javascript"></script>

```

This is already done for you in the demo.html. You can ommit fulltilt.js if you're not planning to use the tilt and shake features of slidy. 


### 2.2 Add Slides
Each slide is represented by a div within the ```<body>``` of your HTML file. To create a slide apply the class "slide" to a div. 
Like: 

```
<div class="slide"> 
    ... contents of your slide. 
</div>

```

To add content to your slide just add some HTML between those two tags. For instance: 

```
<div class="slide"> 
    <h1> This is my headline</h1>
</div>

```


### 2.3 Lists 
One of the most useful html element on slides is probably the list tag. To add a list use either the ```<ul>,  <ol>``` or ```<dl>``` tag. Like so

```
<div class="slide"> 
    <h1> Here is a list</h1>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul> 
</div>

```

#### 2.3.1 Incremental list
To incrementally display the list (and not show the entire list at once)  add the class "incremental" to the list-tag. 

```
<div class="slide">
    <h1>Here is an incremental list </h1>
    <ul class="incremental"> 
        <li> The first item </li>
        <li> The second item that will show after the first item </li>
    </ul>
</div>

```

### 2.4 Styling
rSlidy2 provides a stylesheet with a very basic and minimalistic style. To apply a custom style to your html you can link to a seperate .css file in your html and overwrite the styles for .slide, h1 and so on. 
Please always use a seperate stylesheet and refrain from modifying the rSlidy2.css. 


## 3 Interaction 
Use the arrow keys to advance to the next or previous slide. The Home and End key "Pos 1" and "Ende" on German keyboards will jump to the first and last slide respectively. F11 goes to full screen. F toggles the footer and O toggles the overview. There are some more keys to be used within the slideshow. To find out about those read the help section within the slides-show. 
