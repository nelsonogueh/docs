(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{275:function(t,s,e){t.exports=e.p+"assets/img/raw_full_width.52d22ecf.png"},351:function(t,s,e){t.exports=e.p+"assets/img/raw_sectioned.cdd956b1.png"},352:function(t){t.exports=JSON.parse('{"type":"raw","name":"Raw","description":null,"icon":null,"groups":{"Global":["id","type","title","desc","subtitle","class"],"Advanced":["attributes","data","compiler","output","output_variables","permissions","required","default","validate"]},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":20},"full_width":{"name":"full_width","title":"Full Width","type":"bool","default":true,"order":25},"markdown":{"name":"markdown","title":"Markdown","type":"bool","default":false,"order":30},"content":{"name":"content","title":"Content","type":"input","inputType":"text","description":"","order":35},"content_path":{"name":"content_path","title":"Content Path","type":"input","inputType":"text","description":"","order":40}}}')},422:function(t,s,e){"use strict";e.r(s);var a=e(352),n={data:()=>({builder:a,defaults:{}})},r=e(1),o=Object(r.a)(n,(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"raw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raw"}},[t._v("#")]),t._v(" Raw")]),t._v(" "),s("p",[t._v("The Raw field provides the ability to output raw HTML directly into the options panel both full width and sectioned.")]),t._v(" "),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[s("img",{attrs:{src:e(275),alt:""}})])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),s("li",[s("a",{attrs:{href:"#build-config"}},[t._v("Build Config")])]),s("li",[s("a",{attrs:{href:"#example-config-with-relative-file"}},[t._v("Example Config with Relative File")])]),s("li",[s("a",{attrs:{href:"#example-config-with-php-output"}},[t._v("Example Config with PHP Output")])]),s("li",[s("a",{attrs:{href:"#display-options"}},[t._v("Display Options")]),s("ul",[s("li",[s("a",{attrs:{href:"#full-width-true"}},[t._v("Full Width => True")])]),s("li",[s("a",{attrs:{href:"#full-width-false"}},[t._v("Full Width => False")])])])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("raw")])]),t._v(" "),s("td",[t._v("Value identifying the field type.")])]),t._v(" "),s("tr",[s("td",[t._v("full_width")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Flag to set denote if the field is full width or sectioned.")])]),t._v(" "),s("tr",[s("td",[t._v("markdown")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("Flag to set the markdown of standard line-break and tab characters to HTML.")])]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("String/HTML content to display. String values or file output may be used.")])]),t._v(" "),s("tr",[s("td",[t._v("content_path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Full path to a file that will have the content parsed for output.")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),s("code",[t._v("permissions")]),t._v(" Argument")])],1)])]),t._v(" "),s("h2",{attrs:{id:"build-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-config"}},[t._v("#")]),t._v(" Build Config")]),t._v(" "),s("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),s("h2",{attrs:{id:"example-config-with-relative-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-config-with-relative-file"}},[t._v("#")]),t._v(" Example Config with Relative File")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-raw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'raw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Raw output'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Subtitle text goes here.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field for additional info.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/myfile.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"example-config-with-php-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-config-with-php-output"}},[t._v("#")]),t._v(" Example Config with PHP Output")]),t._v(" "),s("p",[t._v("Sometimes you want to do more than just a flat file with raw, and acutally output the results of some PHP code. You\ncan easily do that with this approach.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v('ob_start( ); // This tells PHP to start putting all output in a buffer.\necho "HERE I AM";\n?>\nNow we\'re in HTML mode! Everything here will be saved as text,\nincluding line breaks!\n'),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And back to PHP mode")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Don't forget to use a full php here, the shortcode `<?` will get you in trouble!!!")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Now i\'m here"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ob_get_clean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now everything is in our variable.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-raw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'raw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Raw output'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Subtitle text goes here.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field for additional info.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now let's set that in the raw field.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("h2",{attrs:{id:"display-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-options"}},[t._v("#")]),t._v(" Display Options")]),t._v(" "),s("p",[t._v('These are two modes for the raw field. Full width and "sectioned." Below you will see an example of each.')]),t._v(" "),s("h3",{attrs:{id:"full-width-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-width-true"}},[t._v("#")]),t._v(" Full Width => True")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'full_width'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),t._v("`\n")])])]),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[s("img",{attrs:{src:e(275),alt:""}})])]),t._v(" "),s("h3",{attrs:{id:"full-width-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-width-false"}},[t._v("#")]),t._v(" Full Width => False")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'full_width'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),t._v("`\n")])])]),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[s("img",{attrs:{src:e(351),alt:""}})])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);