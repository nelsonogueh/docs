(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{387:function(t,e,s){t.exports=s.p+"assets/img/google_maps.60a06a00.png"},504:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"google-maps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-maps"}},[t._v("#")]),t._v(" Google Maps "),e("Badge",{attrs:{text:"field",type:"warn"}})],1),t._v(" "),e("p",[t._v("The Redux Google Map extension offers users the ability to search for map locations via the Redux options panel using the Google Maps API.  Such an extension comes in very handy when outputting maps and markers on the front-end of theme pages, using latitude/longitude return values with the Google Maps API.")]),t._v(" "),e("p",[e("span",{staticStyle:{display:"block","text-align":"center"}},[e("img",{attrs:{src:s(387),alt:""}})])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#getting-started"}},[t._v("Getting Started")])]),e("li",[e("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),e("li",[e("a",{attrs:{href:"#google-map-default-values"}},[t._v("Google Map Default Values")])]),e("li",[e("a",{attrs:{href:"#google-maps-api-key"}},[t._v("Google Maps API Key")])]),e("li",[e("a",{attrs:{href:"#example-config"}},[t._v("Example Config")])]),e("li",[e("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")])])])]),e("p")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Getting Started")]),t._v(" "),e("p",[t._v("To understand how to use extensions, you should read this article on "),e("RouterLink",{attrs:{to:"/guides/basics/using-extensions.html"}},[t._v("Using Extensions")]),t._v(".\nTo shortcut the process, you can use the "),e("a",{attrs:{href:"http://build.redux.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux Build"),e("OutboundLink")],1),t._v(" site. Please be aware that a working\nknowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other\n(or both), please refer to the following guides to get you started:\n"),e("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with PHP"),e("OutboundLink")],1),t._v(",\n"),e("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Introduction"),e("OutboundLink")],1),t._v(".")],1)]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("DISCLAIMER")]),t._v(" "),e("p",[t._v("This extension does not - repeat - does "),e("strong",[t._v("NOT")]),t._v(" output any type of Google map through usage in front-end theme code."),e("br"),t._v("\nIt simply takes the location the user chooses within the map interface and saves the address components, latitude,\nlongitude, and marker information to the database (see Example Usage below).  You - the developer - may then use this\ninformation to generate and display maps via the Google Maps API using shortcodes, or any other means appropriate to\nyour theme.")])]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("To understand how to use extensions, you should read this article on "),e("RouterLink",{attrs:{to:"/guides/basics/using-extensions.html"}},[t._v("Using Extensions")]),t._v(".\nTo shortcut the process, you could use the "),e("a",{attrs:{href:"https://build.redux.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux Builder"),e("OutboundLink")],1),t._v(". Please be aware that a working\nknowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other\n(or both), please refer to the following guides to get you started: "),e("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with PHP"),e("OutboundLink")],1),t._v(",\n"),e("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Introduction"),e("OutboundLink")],1),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("google_maps")])]),t._v(" "),e("td",[t._v("Value identifying the field type.")])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Unique ID identifying the field. Must be different from all other field IDs.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Displays title of the field.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("subtitle")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Subtitle display of the field, situated beneath the title.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("desc")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Description of the field, appearing beneath the field control.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Appends any number of classes to the field's class attribute.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("full_width")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Flag to set the field full width or tabled.")])]),t._v(" "),e("tr",[e("td",[t._v("placeholder")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v('"Enter your address"')]),t._v(" "),e("td",[t._v("Text to appear in the search box when no data is present.")])]),t._v(" "),e("tr",[e("td",[t._v("marker_tooltip")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v('"Left mouse down on top of me to move me!"')]),t._v(" "),e("td",[t._v("Set's the tooltip text that appears when hovering over the place marker.")])]),t._v(" "),e("tr",[e("td",[t._v("no_geometry_alert")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v('"The returned place contains no geometric data."')]),t._v(" "),e("td",[t._v("Set's the message to appear via JavaScript alert when the selected place contains no geometric data.")])]),t._v(" "),e("tr",[e("td",[t._v("map_height")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("250px")]),t._v(" "),e("td",[t._v("Adjust the height of the map on screen.  Please include the unit type with your settings (px, em, %, etc).")])]),t._v(" "),e("tr",[e("td",[t._v("show_api_key")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Displays a button beneath the map where clients may enter their own Google Maps API key data.  See Google Maps API Key below.")])]),t._v(" "),e("tr",[e("td",[t._v("scroll_wheel")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Sets the flag which allows or prevents map zooming when using the mouse wheel.")])]),t._v(" "),e("tr",[e("td",[t._v("street_view_control")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Sets the flag to display or hide the street view control.")])]),t._v(" "),e("tr",[e("td",[t._v("map_type_control")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Sets the flag to display or hide the map type (satellite) control.")])]),t._v(" "),e("tr",[e("td",[t._v("show_controls")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to set the autocomplete control bat the the top of the map.")])]),t._v(" "),e("tr",[e("td",[t._v("show_address")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the street name and number text boxes.")])]),t._v(" "),e("tr",[e("td",[t._v("show_city")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the city text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_state")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the state text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_postal")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the zip/post code text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_country")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the country text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_latitude")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the latitude text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_longitude")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the longitude text box.")])]),t._v(" "),e("tr",[e("td",[t._v("show_marker_info")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Flag to display or hide the marker info text box.")])]),t._v(" "),e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Array of values specifying the default values of the map.  See Google Map Default Values below.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("compiler")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("Flag to run the compiler hook.  More info")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("required")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Provide the parent, comparison operator, and value which affects the field's visibility.  More info")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("hint")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Array containing the "),e("code",[t._v("content")]),t._v(" and optional "),e("code",[t._v("title")]),t._v(" arguments for the hint tooltip. More info")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("api_key")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("(Optional) String value of the API key to use with Google Maps.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("map_version")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("3.exp")]),t._v(" "),e("td",[t._v("Google Map API version number.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),e("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("Using the "),e("code",[t._v("hints")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),e("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),e("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),e("h2",{attrs:{id:"google-map-default-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-map-default-values"}},[t._v("#")]),t._v(" Google Map Default Values")]),t._v(" "),e("p",[t._v("For this extension, default values are optional.  Leaving them blank (or not settings them at all) will default the Google Map to the United States of America.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("street_number")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The address street number")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("route")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The name of the road, street, lane, etc.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("locality")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The name of the town or city.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("administrative_area_level_1")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The name of the state, union, territory, etc.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("postal_code")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The number of the ZIP or postal code.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("country")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The name of the country.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("latitude")]),t._v(" "),e("td",[t._v("string/float")]),t._v(" "),e("td",[t._v("The float (decimal) value representing the latitude value.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("longitude")]),t._v(" "),e("td",[t._v("string/float")]),t._v(" "),e("td",[t._v("The float (decimal) value representing the longitude value.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("marker_info")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Text to appear over the map marker when the map marker is clicked.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("zoom")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td",[t._v("3 - when using lat/lng"),e("br"),e("br"),t._v("17 - when using addresses.")]),t._v(" "),e("td",[t._v("The amount of zoom in which to set the map.")])])])]),t._v(" "),e("h2",{attrs:{id:"google-maps-api-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-api-key"}},[t._v("#")]),t._v(" Google Maps API Key")]),t._v(" "),e("p",[t._v("The Redux Google Maps extension does not contain an API Key.  This constitutes the standard usage limit for the Google Maps API, which is free until exceeding 25,000 map loads per 24 hours for 90 consecutive days.  In most normal situations, since these maps are only loaded on displayed in your options panel, to break such a limit would be unusual.  However, since nothing is impossible, if this limit should be reached, it may become necessary to obtain a Google Maps API Key.  It is not your responsibility as a theme developer to provide one with your theme.  We've included a Google Maps API Key feature in the extension where your users are given this information with links to obtain their own unique key for high usage.  While we've provided very general information about this via our interface, it's recommended you include this information in your theme documentation so your users are aware of such limitations and if necessary, how to deal with them.")]),t._v(" "),e("p",[t._v("If your theme uses the rendering of Google Maps on the front end via a shortcode or Visual Composer and have chosen to include a Google Maps API Key with your theme, you may set this key via the "),e("code",[t._v("api_key")]),t._v(" argument as described in the Advanced Arguments section above.")]),t._v(" "),e("p",[t._v("For more information about Google Maps API Usage guidelines, please visit "),e("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/usage",target:"_blank"}},[t._v("https://developers.google.com/maps/documentation/javascript/usage")])]),t._v(" "),e("p",[t._v("For more information on obtaining a Google Maps API Key, please visit: "),e("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank"}},[t._v("https://developers.google.com/maps/documentation/javascript/get-api-key")])]),t._v(" "),e("h2",{attrs:{id:"example-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),e("p",[t._v("Under normal circumstances, it probably will not be necessary to set any default values, as your users will ultimately want to set their own via the map interface.  However, if you have a reason to set to default, please take note of the following limitations:")]),t._v(" "),e("p",[e("strong",[t._v("NOTE")]),t._v(":  The Google Fonts extension will always use the latitude and longitude settings first, so set a map.  It will ignore address settings.  Both "),e("code",[t._v("latitude")]),t._v("and "),e("code",[t._v("longitude")]),t._v("arguments must be set.  It cannot be one or the other, otherwise Google Map will display wither the address information (if any is set) or display the default full map of America.")]),t._v(" "),e("p",[e("strong",[t._v("NOTE")]),t._v(":  If setting only the "),e("code",[t._v("latitude")]),t._v("and "),e("code",[t._v("longitude")]),t._v("arguments, no address data will be displayed or generated.  Alternatively, if address information is set, Google Maps will return the closest latitude/longitude coordinates.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'google_maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Google Maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Select a location from the map below.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'full_width'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It's not necessary to fill out *every* default value for any ")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// given location.  We are doing so here for sample purposes.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'street_number'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'1600'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'route'")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Pennsylvania Avenue Northwest'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'locality'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Washington'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'administrative_area_level_1'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'DC'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'postal_code'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'20500'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'country'")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'United States'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'latitude'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'38.8976758'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'longitude'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'-77.03648229999999'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'marker_info'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Home of the President of the United States.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("The extension's return value is an array of the default values above and their values. The default values returned will remain unchanged if the user does not change the map's location. When they do, the new location information will be output. (Please remember to replace "),e("code",[t._v("redux_demo")]),t._v(" with your own "),e("code",[t._v('<a title="opt_name" href="/redux-framework/arguments/opt_name">opt_name</a>')]),t._v(" argument).")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'street_number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'route'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'locality'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'administrative_area_level_1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'postal_code'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'country'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'latitude'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'longitude'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-google-maps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'marker_info'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);