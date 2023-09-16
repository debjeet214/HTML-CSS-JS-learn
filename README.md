# HTML-learning *****************************************IMPORTANT
In this article, we will know HTML SVG Basics, & their implementation through examples. SVG stands for Scalable Vector Graphics. It basically defines vector-based graphics in XML format. SVG graphics do NOT lose any quality if they are zoomed or resized. Every element and every attribute in SVG files can be animated.

Advantages of SVG: Advantages of using SVG over other image formats (like JPEG and GIF) are: 
SVG images can be created and edited with any text editor.
SVG images can be searched, indexed, scripted, and compressed.
SVG images are scalable.
SVG images can be printed with high quality at any resolution.


********************************************************************************
@ DIFFERENCE OF CANVAS AND SVG TAG
SVG is a language for describing 2D graphics in XML whereas Canvas draws 2D graphics, on the fly with JavaScript.
If attributes of an SVG object are changed, the browser can automatically re-render the shape whereas Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser.
SVG is resolution independent whereas CANVAS is resolution-dependent.
SVG supports event handlers whereas CANVAS doesn’t have support for event handlers.
*******************************************************************************
AUDIO TAG
The <audio> tag is used to add audio content within the HTML code such as songs, audio clips, etc. Basically, the <audio> tag supports three audio formats, 
mp3/Ogg/WAV
To include the audio file within the HTML document we need to add the <audio> tag with the src attribute to provide the file path and the controls attribute which displays controls such as the pause and play buttons.
** Syntax for <audio> tag <audio controls src='file_path'></audio> **

THE SOURCE TAG :
We can also include one audio file in multiple audio formats using the <source> tag. The <source> tag is added inside the opening and closing <audio> tag. If we want to add multiple sources for an audio file, then we can use multiple <source> tags with the <audio> tag.
In the <source> tag, we can provide the URL of the audio file using the src attribute of the <source> tag inside the <audio> tag. To provide multiple audio files, we can add multiple <source> tags and the browser will choose the most suitable audio file among all. The <source> tag doesn't require any closing tag.

For example:
<audio controls>
	<source src='filename.mp3' type='audio/mp3'>
	<source src='filename.wav' type='audio/wav'>
</audio>
The type attribute:::  In the <source> tag, we can also use the type attribute to provide the type of audio file. The types can be:

audio/mp3
audio/wav
audio/ogg

HTML <audio> tag attributes:

controls: This attribute requires no value
autoplay: This attribute requires value - true/false
loop, etc.
By using the <audio> tag, we can include an audio file in the HTML document without adding any third-party plug-ins like flash player, etc.
***************************************************************************************************
VIDEO TAG :
The HTML <video> tag is used to include videos on any webpage such as movie clips, other video streams, etc.
We can include multiple URLs of the same video in different formats using the <source> tag and then the browser will choose the most appropriate one amongst all of them.The video tag mainly supports three video formats, these are: MP4, WebM, OGG
Just like we used the <source> tag with the <audio> tag to provide different audio files, similarly, we can use the <source> tag with the <video> tag too.
The text within the opening and closing <video> tag will be displayed only when the browser does not support the <video> element
Syntax for <video> tag:
We have used the <source> tag within the <video> tag in the below syntax.
<video> 
	<source src='file_path' type='video/file_format'>
	Your browser doesnt support Videos
</video>
