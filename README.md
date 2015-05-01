# WebCodeBeauty

javascript  plugin to **pretty-print** or **minify**
text in **XML**, **JSON**, **CSS** and **SQL** formats.

**Version** - 1.0

**Copyright** 
(c) 2015 Lucas Holt (luke@foolishgames.com)
(c) 2012 Vadim Kiryukhin ( vkiryukhin @ gmail.com )

Forked from vkBeautify, originally at [http://www.eslinstructor.net/vkbeautify/](http://www.eslinstructor.net/vkbeautify/) 

**License:** Dual licensed under
the MIT and GPL licenses:

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

**Available on bower!**

The package has been registered on bower as WebCodeBeauty.  You can install with
bower install WebCodeBeauty


   **Pretty print**

       WebCodeBeauty.xml(text [,indent_pattern]);
       WebCodeBeauty.json(text [,indent_pattern]);
       WebCodeBeauty.css(text [,indent_pattern]);
       WebCodeBeauty.sql(text [,indent_pattern]);

        @text - String; text to beatufy;
        @indent_pattern - Integer | String;
                Integer:  number of white spaces;
                String:   character string to visualize indentation ( can also be a set of white spaces )
  **Minify**

       WebCodeBeauty.xmlmin(text [,preserve_comments]);
       WebCodeBeauty.jsonmin(text);
       WebCodeBeauty.cssmin(text [,preserve_comments]);
       WebCodeBeauty.sqlmin(text);

        @text - String; text to minify;
        @preserve_comments - Bool; [optional];
                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )

   **Examples**
   
       WebCodeBeauty.xml(text); // pretty print XML
       WebCodeBeauty.json(text, 4 ); // pretty print JSON
       WebCodeBeauty.css(text, '. . . .'); // pretty print CSS
       WebCodeBeauty.sql(text, '----'); // pretty print SQL

       WebCodeBeauty.xmlmin(text, true);// minify XML, preserve comments
       WebCodeBeauty.jsonmin(text);// minify JSON
       WebCodeBeauty.cssmin(text);// minify CSS, remove comments ( default )
       WebCodeBeauty.sqlmin(text);// minify SQL

