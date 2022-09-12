(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{456:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fields-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields-object"}},[t._v("#")]),t._v(" Fields Object")]),t._v(" "),e("p",[t._v("Fields are the lowest level object within Redux. They constitute the "),e("RouterLink",{attrs:{to:"/configuration/core-fields/"}},[t._v("type of fields")]),t._v(" that appear in\nany given "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(". Though individual fields may have custom arguments, they all share a common set of\ndefault arguments.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#default-arguments"}},[t._v("Default Arguments")])]),e("li",[e("a",{attrs:{href:"#setting-fields-s"}},[t._v("Setting Fields(s)")]),e("ul",[e("li",[e("a",{attrs:{href:"#redux-set-field"}},[t._v("Redux::set_field()")])]),e("li",[e("a",{attrs:{href:"#redux-set-fields"}},[t._v("Redux::set_fields()")])])])]),e("li",[e("a",{attrs:{href:"#field-helper-functions"}},[t._v("Field Helper Functions")]),e("ul",[e("li",[e("a",{attrs:{href:"#redux-get-section"}},[t._v("Redux::get_section()")])]),e("li",[e("a",{attrs:{href:"#redux-get-sections"}},[t._v("Redux::get_sections()")])]),e("li",[e("a",{attrs:{href:"#redux-remove-section"}},[t._v("Redux::remove_section()")])])])])])]),e("p")]),t._v(" "),e("h2",{attrs:{id:"default-arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-arguments"}},[t._v("#")]),t._v(" Default Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description.")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("The unique identifier of a field. MUST be unique to the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(" except when used by the "),e("RouterLink",{attrs:{to:"/configuration/premium/metaboxes.html"}},[t._v("metaboxes API")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Denotes the "),e("RouterLink",{attrs:{to:"/configuration/core-fields/"}},[t._v("field type")]),t._v(". If the field type does not exist a warning will be displayed.")],1)]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The title of the field that will be displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("subtitle")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Subtitle of the option placed beneath the title.")])]),t._v(" "),e("tr",[e("td",[t._v("desc")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Text to appear under the field title. HTML is permitted.")])]),t._v(" "),e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Default value for the field.")])]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Appends any number of classes to the field's class attribute.")])]),t._v(" "),e("tr",[e("td",[t._v("customizer_only")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A flag to set this field to "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("customizer_only")]),t._v(" display. This argument will override the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("customizer_only")]),t._v(" setting at the "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections")]),t._v(" level as well as the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("global arguments")]),t._v(" level.")],1)]),t._v(" "),e("tr",[e("td",[t._v("output")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A flag to set all "),e("RouterLink",{attrs:{to:"/configuration/fields/output.html"}},[t._v("enable CSS output")]),t._v(" for any fields that support this argument.")],1)]),t._v(" "),e("tr",[e("td",[t._v("compiler")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A flag to set the "),e("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("compiler hook")]),t._v(" to fire if this field's value is changed. This can override the "),e("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("compiler")]),t._v(" setting at the "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections")]),t._v(" level.")],1)]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Flag to set disabling on the field.")])]),t._v(" "),e("tr",[e("td",[t._v("hints")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of attributes to set "),e("RouterLink",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("hints")]),t._v(" object that displays a animated window with more details about this field.")],1)])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),e("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("Using the "),e("code",[t._v("hints")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),e("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),e("code",[t._v("required")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/validate.html"}},[t._v("Using the "),e("code",[t._v("validate")]),t._v(" Argument")])],1)])]),t._v(" "),e("p",[t._v("Fields are blocks of arrays that represent the individual options within a specific options panel, set via a "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" array. The "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" array contains an argument titled fields, which accepts an array, or several blocks of arrays, separated by commas.  This is where all field arrays are place.  A basic example is shown below. For specific examples, please consult the "),e("a",{attrs:{href:"https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample-config.php"),e("OutboundLink")],1),t._v(" file that comes with the Redux package.")],1),t._v(" "),e("h2",{attrs:{id:"setting-fields-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-fields-s"}},[t._v("#")]),t._v(" Setting Fields(s)")]),t._v(" "),e("p",[t._v("There are two methods to set a field in Redux. The only difference between these two declarations is one is singular\nwhile the other is plural.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If the section you are attaching to doesn't exist, that field will never show. It's much easier to use "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html#set-section"}},[t._v("Redux::setSection()")]),t._v(" instead\nto define a "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" with embedded fields all at once.")],1)]),t._v(" "),e("h3",{attrs:{id:"redux-set-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-set-field"}},[t._v("#")]),t._v(" Redux::set_field()")]),t._v(" "),e("p",[t._v("Used to declare a single field and attach to an existing "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(".")],1),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[t._v("field")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("A singular field array")])]),t._v(" "),e("tr",[e("td",[t._v("section_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Section ID to add this field to. Must previously exist.")])])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'A sample text box'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-set-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-set-fields"}},[t._v("#")]),t._v(" Redux::set_fields()")]),t._v(" "),e("p",[t._v("Similar to "),e("a",{attrs:{href:"#set-field"}},[t._v("::set_field()")]),t._v(", but used to set an unlimited number of fields at once.")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[t._v("fields")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Array of fields arrays")])]),t._v(" "),e("tr",[e("td",[t._v("section_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Section ID to add this field to")])])])]),t._v(" "),e("p",[t._v("This method allows for multiple sections to be added at once. Keep in mind that you can still set a single section, as\nseen below, but you should remember to wrap the section in an array.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-text1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'A sample text box1'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-text2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'A sample text box2'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"field-helper-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-helper-functions"}},[t._v("#")]),t._v(" Field Helper Functions")]),t._v(" "),e("p",[t._v("A number of helper functions have been baked into the Redux API to support modifying a field before it gets rendered.\nThese functions have specific use cases and are not often employed by the typical developer, but they are useful when\nneeded.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Execution order is important here. If you try to fetch a field before it has been called within your code, it will\nnot exist. If you believe a field should exist, make sure you're not in an early loading hook when working with that field.")])]),t._v(" "),e("h3",{attrs:{id:"redux-get-section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-section"}},[t._v("#")]),t._v(" Redux::get_section()")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("section_id")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Unique id of the section you wish to retrieve")])])])]),t._v(" "),e("p",[t._v("Say you want to fetch a section object, you can easily do that. This may be useful if you wanted to check the section\narray by ID. Returns "),e("code",[t._v("false")]),t._v(" if the section cannot be identified.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_section")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-get-sections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-sections"}},[t._v("#")]),t._v(" Redux::get_sections()")]),t._v(" "),e("p",[t._v("Now let's say you want to grab all sections for a given opt_name, you can do that too.")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sections")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_sections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-remove-section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-remove-section"}},[t._v("#")]),t._v(" Redux::remove_section()")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Your unique "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("section_id")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Unique id of the section you wish to retrieve")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("delete_fields")])]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If set to true, all fields below will be deleted as well")])])])]),t._v(" "),e("p",[t._v("This method allows you to remove a section by ID from Redux. It can be useful to update a field as follows:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_section")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'A New Section Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'redux-framework'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);