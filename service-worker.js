/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e88bb35918b042120d78bbbb709e9800"
  },
  {
    "url": "assets/css/0.styles.7eba8fed.css",
    "revision": "5bcda56a19b72efa1bbecd31b7db1a9d"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/box-shadow.20e92e12.png",
    "revision": "20e92e12c4326009549c8240d8aa4ab8"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/color_gradient.4086d2f4.png",
    "revision": "4086d2f4fabc3af84a1bbff297db08ef"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color-palette.bdece04a.png",
    "revision": "bdece04a56419be319439a05a83571e5"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/io.622a8677.png",
    "revision": "622a8677618d8982f3710b2fa27f508e"
  },
  {
    "url": "assets/img/media.d38f5d91.png",
    "revision": "d38f5d911b43bf5960d64528b49f43b0"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.1efb7349.png",
    "revision": "1efb7349c8490f21620a06fd53ae1c03"
  },
  {
    "url": "assets/js/10.7085b4a7.js",
    "revision": "8d82c5d638a8d495bd5acc036c86ef1f"
  },
  {
    "url": "assets/js/100.7f0d227c.js",
    "revision": "491115e9bd26fe07ebb6723133310dfe"
  },
  {
    "url": "assets/js/101.61c9b6fb.js",
    "revision": "5def9de1c178a92fb539ec075a1afdee"
  },
  {
    "url": "assets/js/102.2dca9ee5.js",
    "revision": "e4fe03daebefe88bfccc32f05546f2ad"
  },
  {
    "url": "assets/js/103.7e36a017.js",
    "revision": "043c54aefb3bbf062998b6b3a691f300"
  },
  {
    "url": "assets/js/104.413288a0.js",
    "revision": "807e912df675badf05c192a948c6cabc"
  },
  {
    "url": "assets/js/105.83bc0021.js",
    "revision": "5a87793d707501f4e33794a14e92c32a"
  },
  {
    "url": "assets/js/106.7ee34b30.js",
    "revision": "0269e8c0ad5e6ee862d9dda39212d6d4"
  },
  {
    "url": "assets/js/107.045b3ca6.js",
    "revision": "e85debffe7e0323fa5003f8bb2e0c04a"
  },
  {
    "url": "assets/js/108.bcb34211.js",
    "revision": "d1267ac9faff937a2d7f4aae131ab6a5"
  },
  {
    "url": "assets/js/109.2201f544.js",
    "revision": "8f8eed1672abfec01081b91c58ac66e1"
  },
  {
    "url": "assets/js/11.7ac42c33.js",
    "revision": "a88367a41827c63c89f072b46e283dd3"
  },
  {
    "url": "assets/js/110.1ae9fb2d.js",
    "revision": "c1c398d098102aa2c70023a3960befef"
  },
  {
    "url": "assets/js/111.6f71e165.js",
    "revision": "a2830aa538d17314b830eb628edb5c5c"
  },
  {
    "url": "assets/js/12.c8c0a603.js",
    "revision": "404677ba9154217ee51bc1cb35f2992e"
  },
  {
    "url": "assets/js/13.a0e8e50f.js",
    "revision": "09dde2b3d19cd8aa36c103de9db6533c"
  },
  {
    "url": "assets/js/14.31f73b75.js",
    "revision": "7b053fcb9ec8f5b8c0342b5b4876d6a9"
  },
  {
    "url": "assets/js/15.1e6b36ad.js",
    "revision": "2c8aaecc08b3549e57c0e656c228b626"
  },
  {
    "url": "assets/js/16.32b3aae2.js",
    "revision": "c9ef85f45a71b3edadebf622e2975b8c"
  },
  {
    "url": "assets/js/17.245d670a.js",
    "revision": "bcdaafeb6b80e003e3f807b33ccf4357"
  },
  {
    "url": "assets/js/18.16ff9ce6.js",
    "revision": "c24d606a3e222aa9acd8102854cf142c"
  },
  {
    "url": "assets/js/19.32d49a3e.js",
    "revision": "446d9ce5eb3f3d765c946303ed6dc40f"
  },
  {
    "url": "assets/js/20.50941b57.js",
    "revision": "2a20c40cc752df904fe77aa99a631706"
  },
  {
    "url": "assets/js/21.03046916.js",
    "revision": "147f4df49b117f47cd21fc26ec4fd578"
  },
  {
    "url": "assets/js/22.b78af026.js",
    "revision": "a15798bab47dcd92fbdb29aa5780c704"
  },
  {
    "url": "assets/js/23.981cf482.js",
    "revision": "8b05b1ef2d7526988d1cbcc98a9f41af"
  },
  {
    "url": "assets/js/24.9e36dcc9.js",
    "revision": "35822483fe7a9b2abcda1704a36ad83c"
  },
  {
    "url": "assets/js/25.a45e28b0.js",
    "revision": "68acef33d8d616ae8e02c248fae22225"
  },
  {
    "url": "assets/js/26.d8f3dcf1.js",
    "revision": "e97c378a69bf82c14efe453cacb2329f"
  },
  {
    "url": "assets/js/27.013826de.js",
    "revision": "b5714f481018986709ba13d6ac41602d"
  },
  {
    "url": "assets/js/28.010ae7eb.js",
    "revision": "1cd68a03a1973251310084d8916e6328"
  },
  {
    "url": "assets/js/29.73bbf106.js",
    "revision": "c880d896ba7a734e421ca51a66201b7c"
  },
  {
    "url": "assets/js/3.665fe5c8.js",
    "revision": "a17d0239b30604f742d7eae89ee20c21"
  },
  {
    "url": "assets/js/30.0e876970.js",
    "revision": "20f2f85e9d2e141303673c0c7610dd15"
  },
  {
    "url": "assets/js/31.45e7ae3f.js",
    "revision": "3098f6b02513367dce8f9418bd44f30e"
  },
  {
    "url": "assets/js/32.ebf3d456.js",
    "revision": "a90ddf165bf0cb73b7c7b1f375b0d8c8"
  },
  {
    "url": "assets/js/33.e4093091.js",
    "revision": "cc0e1d85430c741f16c23c525f816616"
  },
  {
    "url": "assets/js/34.6303e387.js",
    "revision": "b7b6f91a070cfeddc962e76ed185d9e0"
  },
  {
    "url": "assets/js/35.042a438f.js",
    "revision": "9389c1df5cc5f35848c341f2277cefc7"
  },
  {
    "url": "assets/js/36.11549717.js",
    "revision": "cb2b04c83512b79e2da84923d356443d"
  },
  {
    "url": "assets/js/37.7401db38.js",
    "revision": "6c2324a7d7d525ebb1337cbdd6b20f48"
  },
  {
    "url": "assets/js/38.4ccb9e5f.js",
    "revision": "ee00b0f1c3256dcff3c50cf201956a8d"
  },
  {
    "url": "assets/js/39.dcc17a44.js",
    "revision": "8d3d9021e8c5e5e18082c8042f79bf6b"
  },
  {
    "url": "assets/js/4.bc8f7c63.js",
    "revision": "408561407c21ecdc68cc85fc37754578"
  },
  {
    "url": "assets/js/40.15aaf0d1.js",
    "revision": "f0cec62c3dd548c1dc84bc370ecbd15b"
  },
  {
    "url": "assets/js/41.f1ee5ba7.js",
    "revision": "9be657f1164755feec8f8e852e993a4e"
  },
  {
    "url": "assets/js/42.b75f603f.js",
    "revision": "2205845ef04bfbb058ba3300cdef1b7e"
  },
  {
    "url": "assets/js/43.e17b59d5.js",
    "revision": "af2173c3ee1096326d0568a225614221"
  },
  {
    "url": "assets/js/44.9a954d4b.js",
    "revision": "9c7115f4f00ed5dd52ab8386edb479d4"
  },
  {
    "url": "assets/js/45.25e08d35.js",
    "revision": "6b9de800a5b64cf653368cecb8155625"
  },
  {
    "url": "assets/js/46.1e3f0120.js",
    "revision": "7324e781e5c5e08b739be6a122c7ba30"
  },
  {
    "url": "assets/js/47.36c234dc.js",
    "revision": "f11f3b7a34c54a0384ad418a03d4f5ed"
  },
  {
    "url": "assets/js/48.7055f09f.js",
    "revision": "242e26f7c59a746c8739a44480787c8b"
  },
  {
    "url": "assets/js/49.ca554408.js",
    "revision": "04a8a57f16b4e7c14637b56f25aac24d"
  },
  {
    "url": "assets/js/5.a3c78dc1.js",
    "revision": "b018bc14156ac3ea67f1956883a812b9"
  },
  {
    "url": "assets/js/50.44072dda.js",
    "revision": "48a6074dae39c1aed03c121a67e2a1ce"
  },
  {
    "url": "assets/js/51.99dca183.js",
    "revision": "ac672d8812d3c7aff7c0d537170309a3"
  },
  {
    "url": "assets/js/52.2cbd7526.js",
    "revision": "580713716d63a3bd9a6d1576dfd3b7ee"
  },
  {
    "url": "assets/js/53.dd36ffd0.js",
    "revision": "13f3b5c3e91a7784e2aafb57a754302e"
  },
  {
    "url": "assets/js/54.e1bd8b21.js",
    "revision": "b0c88138dd06a402026f93a99416bd9d"
  },
  {
    "url": "assets/js/55.1317454c.js",
    "revision": "50b95f03142dcd3835802922d6682cc9"
  },
  {
    "url": "assets/js/56.5dd289e2.js",
    "revision": "1c476a89ff429b70766c05caaa58a7bd"
  },
  {
    "url": "assets/js/57.543616c0.js",
    "revision": "86a9c8a25675e57ad19be1c94cdaf0d8"
  },
  {
    "url": "assets/js/58.f837bed2.js",
    "revision": "447baf934c7a3317d0c054d17538f3b6"
  },
  {
    "url": "assets/js/59.9a7cad61.js",
    "revision": "625e02ba026dd9971f668f9cbf1a72ea"
  },
  {
    "url": "assets/js/6.f198daa8.js",
    "revision": "4fe12a2e7c52dad6386fae7edabb09f3"
  },
  {
    "url": "assets/js/60.3568994d.js",
    "revision": "e369e2c510dc10d1efce787abb6f0aaf"
  },
  {
    "url": "assets/js/61.5b92f86d.js",
    "revision": "7c649f7b5f3ad0753441ec96d11f5754"
  },
  {
    "url": "assets/js/62.47c35266.js",
    "revision": "c427777a5941765b51988136c9ac1a19"
  },
  {
    "url": "assets/js/63.4c521666.js",
    "revision": "1be1e41eb14e170418a55e6f194a1851"
  },
  {
    "url": "assets/js/64.c6d9343f.js",
    "revision": "3c7f3aafbef57f4d6e0c5a851bdee662"
  },
  {
    "url": "assets/js/65.02fe3fba.js",
    "revision": "11125cf4af4c25700e9f2e8f295870cd"
  },
  {
    "url": "assets/js/66.b6cb0835.js",
    "revision": "e555fe0c92c60079cbd59b5b1c22fc97"
  },
  {
    "url": "assets/js/67.144b849a.js",
    "revision": "437196da530774c25a6619cd61d564a0"
  },
  {
    "url": "assets/js/68.30afb31d.js",
    "revision": "ea75e07ef59098c4b7cbcf916fd2a4f7"
  },
  {
    "url": "assets/js/69.de25b8e0.js",
    "revision": "b5fbd5104ac5e964b314d483521b68fb"
  },
  {
    "url": "assets/js/7.71a0e319.js",
    "revision": "12e70de679ad6dda659e8e9ff9173639"
  },
  {
    "url": "assets/js/70.f108a663.js",
    "revision": "030d65f624b3a04e8af1f6b408cc2977"
  },
  {
    "url": "assets/js/71.eca7de35.js",
    "revision": "9f3b74d0d276b1bff27cd7d2abf2d16a"
  },
  {
    "url": "assets/js/72.be9bdf76.js",
    "revision": "12cd6ffc331541d5fd7871a03c54090c"
  },
  {
    "url": "assets/js/73.831f8e02.js",
    "revision": "d8c2f63dd0da6da1b79a9825659bac60"
  },
  {
    "url": "assets/js/74.b989a3d5.js",
    "revision": "31f0e904ee869db18189fd6ec6ee6728"
  },
  {
    "url": "assets/js/75.6d967e60.js",
    "revision": "a16249c6fe776f5fa9663c7cc72fa1ce"
  },
  {
    "url": "assets/js/76.8605bca8.js",
    "revision": "70ea4f9f82d82ea3c3e65ee0db3d73d3"
  },
  {
    "url": "assets/js/77.5261792a.js",
    "revision": "ed27224a16da5c9aad8f70e0474f87f6"
  },
  {
    "url": "assets/js/78.e2af45d8.js",
    "revision": "59a810c665a63ea73687961e43b2778b"
  },
  {
    "url": "assets/js/79.a052de14.js",
    "revision": "447d3ef183db69e56d87378adf57aa31"
  },
  {
    "url": "assets/js/8.f36918c6.js",
    "revision": "f8f7e4e4a66d723b6112095e3c7a385f"
  },
  {
    "url": "assets/js/80.bec68b29.js",
    "revision": "f1eefc9e5e839e1622dd99e2a47c3b88"
  },
  {
    "url": "assets/js/81.e675b2a1.js",
    "revision": "5f07b211670524a92810054304d67480"
  },
  {
    "url": "assets/js/82.c18aaec4.js",
    "revision": "ef20091c3c6eb634eb1de017db9dd9ac"
  },
  {
    "url": "assets/js/83.bc73b93b.js",
    "revision": "76422c091e956607ac5684204acfa5f3"
  },
  {
    "url": "assets/js/84.b825f77a.js",
    "revision": "2778368e4cdafd2a1c361a78ac5218d1"
  },
  {
    "url": "assets/js/85.e192876f.js",
    "revision": "e73309ccbd9087dc80cde7bf8142163f"
  },
  {
    "url": "assets/js/86.2fa534cb.js",
    "revision": "821cdb4a84ed7914067fafebc99e2879"
  },
  {
    "url": "assets/js/87.0301b349.js",
    "revision": "1bb46b866ea6cc3daf38d83ceee22bb1"
  },
  {
    "url": "assets/js/88.ea76b6d3.js",
    "revision": "dcd4483576d31783392b503f290d618a"
  },
  {
    "url": "assets/js/89.7c0fa7b9.js",
    "revision": "d505cd288e93cfae54ac780436278e2c"
  },
  {
    "url": "assets/js/9.5ab34a7a.js",
    "revision": "26f50273f53b9969d17780cd702ed572"
  },
  {
    "url": "assets/js/90.656e89d3.js",
    "revision": "9063c65bb21c7b70b0a070f87218f5e5"
  },
  {
    "url": "assets/js/91.101c3ee8.js",
    "revision": "6d20135bf2c91808852e6288b6860842"
  },
  {
    "url": "assets/js/92.00361b31.js",
    "revision": "ccdc42a838b54c1b1c458db39e838dfa"
  },
  {
    "url": "assets/js/93.5d5c7547.js",
    "revision": "4137b6b66d0aaaadb7d4e5eb667f43be"
  },
  {
    "url": "assets/js/94.a93ee67c.js",
    "revision": "6c8220f21def3f5a8db31ab192f67fda"
  },
  {
    "url": "assets/js/95.ce6f1311.js",
    "revision": "5110ad1a5cbb781246c91464948de2e2"
  },
  {
    "url": "assets/js/96.9f41ba13.js",
    "revision": "70a54a9861b65aadaab9111e38da2178"
  },
  {
    "url": "assets/js/97.dd0bd605.js",
    "revision": "357d2b2c34bf423b1cf7f8f23dbf8c7b"
  },
  {
    "url": "assets/js/98.44b4bc2e.js",
    "revision": "bb46b35d2f6bfa175bfb09c6ef7c0360"
  },
  {
    "url": "assets/js/99.4587ce91.js",
    "revision": "69c1cc9e8206576bad5475105be7094b"
  },
  {
    "url": "assets/js/app.b10d3021.js",
    "revision": "93a58186651fb40f6f577314e571454e"
  },
  {
    "url": "assets/js/vendors~docsearch.d5583204.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "configuration/api.html",
    "revision": "89d49cc96d670d2d7796a2333a76dc42"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "e80e1df375769409b2709d3cb953118e"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "c273676ba0d8c920e5ea37fd7a0da69a"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "441ae7bb783fca7a4dc10074dcc41487"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "9723dd8698b2ecbbd13cc985148d60f9"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "b55a22d2d59e816086eab99d22636830"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "0c467b0a6fc163bba898f017b3d34d74"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "0fdc1cf009eab343d8bb98d8180edc84"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "877c230bdd120c2e7cea00cd17627304"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "9f30ae121a5ab5534e35efeb987faae6"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "003d38c7e808cdd2e59c4282ae2e3573"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "9d7799efec10514a0e8ad8433d9e292a"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "8838b203b878ba54409a9bec7edb4555"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "fd08105610bc041d5de242dc9ebbf0c5"
  },
  {
    "url": "configuration/index.html",
    "revision": "a0ccd667aefa0c71bb1398a5083c1f03"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "154747966a4f0a16cae0265a90943d8b"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "4deb69e11b1cebbaa07c4356b680130e"
  },
  {
    "url": "contributing.html",
    "revision": "03f0e5bfbf8dbe37cbd02675edc303db"
  },
  {
    "url": "core-extensions/accordion.html",
    "revision": "a2d3d827c91b8f88ff663bd91ccb2fe4"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "7893a92d3dca92b0e9e462e6a8a23672"
  },
  {
    "url": "core-extensions/date-time-picker.html",
    "revision": "7a93e82caaf7009b4238837a1fd88baf"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "040c2cc11d18b8b5f2f3735e9f5158c6"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "37d897b40f5f3a28f44e76349f292fd6"
  },
  {
    "url": "core-extensions/js-button.html",
    "revision": "df9400a21816e53e20360a2301dfbc36"
  },
  {
    "url": "core-extensions/metaboxes.html",
    "revision": "6cae585cb5d5a45e3127f6c569478080"
  },
  {
    "url": "core-extensions/multi-media.html",
    "revision": "f28da60ae4cb3c015a1c0bd22e744094"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "714fa8f612425c44bb0a6de832d7d7b6"
  },
  {
    "url": "core-extensions/repeater.html",
    "revision": "e159432c91fc38f32a04bebb8f257e3b"
  },
  {
    "url": "core-extensions/search.html",
    "revision": "335e7adaf22504efdf54e77d1a882d70"
  },
  {
    "url": "core-extensions/shortcodes.html",
    "revision": "44dd7ddb0a4fb225a34429235c7dd080"
  },
  {
    "url": "core-extensions/social-profiles.html",
    "revision": "f582bc90a7334ae1375814abef27b314"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "0b08189a49f81ed06277b5c003ffff1b"
  },
  {
    "url": "core-fields/background.html",
    "revision": "cd8c8544ce1bf5e5918630828eb90f20"
  },
  {
    "url": "core-fields/border.html",
    "revision": "21cbe9f3f7d5e381b51f55fbfd281cd1"
  },
  {
    "url": "core-fields/box-shadow.html",
    "revision": "3a028782319e075ce9c0db33e1741226"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "ea4557e9834548ddaf1254692d79b096"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "553d3c7120e87740732adf3aab036cd2"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "88158346c735d03528b7057f899fa4eb"
  },
  {
    "url": "core-fields/color-palette.html",
    "revision": "59be5ab37342f25a237676ed8f66c048"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "3b7410fb52a3e8e2320aca6485dee0c8"
  },
  {
    "url": "core-fields/color.html",
    "revision": "b7d6f2b55ad228e06ca3de077bffe554"
  },
  {
    "url": "core-fields/date.html",
    "revision": "6ca40b6c4da59fc109e75d0ac910cc4a"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "7021bc20e6a0a1237459e06767635372"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "3f9fe61c1d6c09862df3b271910a7a2b"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "a0b8b1a7a34e13b96885156d5e4ae012"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f88f4fcf13adb16d52324e05b12e109c"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "e4d6a675b928c3bfb4fd1ea74ff33ac5"
  },
  {
    "url": "core-fields/index.html",
    "revision": "7644f94f0e31aa409292993097608170"
  },
  {
    "url": "core-fields/info.html",
    "revision": "77bb80408a5d46b3b735000557455ca0"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "a1bd247a5193410a8f2e9e527b022d01"
  },
  {
    "url": "core-fields/media.html",
    "revision": "d7104186f874b52f8c81657c65eba6d2"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "260fcbc60d7b0918618bcacd91bd7837"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "dd004d642835ea29c186f0c2423d7077"
  },
  {
    "url": "core-fields/password.html",
    "revision": "3703b9fea6c20651fd203a2d42faa293"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "9ee47182798293e921ef920469acc159"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "ad6adeeb4e27fd0dfc16d362de085a6b"
  },
  {
    "url": "core-fields/section.html",
    "revision": "5a67ed5a470c3b557fb08db3d0955406"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "b9c7a443c18e74b096da59ebbc7fd71c"
  },
  {
    "url": "core-fields/select.html",
    "revision": "e20ef0334570e89ca6e1703c08e982be"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "9754230e6c671faa56f2c5aef5e85124"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "43f7215241d002ec8884cd64c24d4541"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "9a2a07bf3aa27411970c96a42f3c7e04"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "cadc3610dc770c75044730194e87f93b"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "a5feab288b83758f8cf4118b3f6b9c54"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "862a67ebe0ea048759b3b7cd55f81602"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "8b91271e048080f65da09039061db5ad"
  },
  {
    "url": "core-fields/text.html",
    "revision": "86b0a7bfa0214da426325430ea67f22a"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "1df8ba29265b16e9ae26ec44ef7cfb80"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "e7fba36492818fbcc472e124e3d053a8"
  },
  {
    "url": "core/index.html",
    "revision": "29c125669f7192da5b94c3895f9d58ba"
  },
  {
    "url": "faq/index.html",
    "revision": "ff6c8c29a06f8857bb6d95b0553d7f09"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "b5138ff1123663614263868f21466af7"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "afd7a5041a9aaa14a8db5761695b6d8e"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "9b9024665c64b349312b01ec8e318833"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "a69d78274226fb0d6ecfdcc7a75fb711"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "4e03610b786f548c8ce1e7432ca7a6c0"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "8f2eb00da34d0acb6a9eb1c7f7dd3924"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "25e776729b3951632a4d423f897e2736"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "a9b1f2c2ecf7e8c936d7919f5dd07ab7"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "768218131d015aff8ea490d108979920"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "6878f1fb2a9cfed9c89845fdb251d620"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "7a519e43a25625f0571a74380643384b"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "ac626ff3938fd42de13576bc3de68da1"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "cabe3e694fb25c40041d855f4fbe3f22"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "4f98a9e0b23c53e5194e15d5eeccfe01"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "1d11d5b0915bfea113db68d45189c956"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "65b0d0d5392773693ec5435fb77bbbfe"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "aa0501b3af8e932a9ae4d8a15085175b"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "04c05cd7b4d2d94f346615d93bf6dbad"
  },
  {
    "url": "guides/index.html",
    "revision": "6b16a1a5243d561f9f2dd5ff6e8a4845"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "16bf994785ea20b889e844db271be492"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "81af7d99b90d6de3d1f10c1779475340"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "800e6cedca6175cb5b4d422b4bb905f9"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "f3c0ac9e3c313f001261d68ef0019bfa"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "baa3fbe32d842e21344288b09aca0ace"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "29e7e40c732bc5c8d3c7d781a27b66e4"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "346bfab6c0f388371c33bb8d3e0f1069"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "894c19eb45866c1dc627cb7cd07e735d"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "3f5b91138baa4e76dbba6e5de61d1f38"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "759cb31366bd26fbe47e3c676c184858"
  },
  {
    "url": "premium/index.html",
    "revision": "dad394387a024e9618ec125a98e01822"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "31c7d69a1e903d3f9ac24808bcf33956"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
