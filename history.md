---
title: Change Log - Development History
date: 2018-06-18 06:40:12
---
## Development History
**04-Aug-2018 Version 6.3.6**
- feature: Facebook and google login

**01-Aug-2018 Version 6.3.5**
- fix: PORT at .env replaced with SERVERPORT because of clash with PORT of nuxt config

**30-Jun-2018 Version 6.3.4**
- feature: Pending order notifications
- feature: Tolltip on shopSettings & images
- feature: Editable payment methods

**28-Jun-2018 Version 6.3.3**
- feature: zip code based delivery

**27-Jun-2018 Version 6.3.2**
- feature: Stripe payment

**26-Jun-2018 Version 6.3.1**
- fix: Product reviews (edit, active, delete)

**24-Jun-2018 Version 6.3.0**
- fix: fix: signup + user roles + card height 
- feature: Draggable image gallery
- fix: Product edit page layout

**22-Jun-2018 Version 6.2.0**
- phone mask           
- config cleanup        
- fix: Paypal   
- fix: missing config 
- fix: Signup

**21-jun-2018 Version 6.1.9**
- test: Instamojo Payment
- price slider min=1
- order, payment settings from database
- userRoles, orderStatus, paymentStatus into settings

**20-jun-2018 Version 6.1.8**
- renamed: ShopNx -> Arialshop
- logo size

**19-jun-2018 Version 6.1.7**
- moved docs to new repo because of webpack incompatibility
- feature: documentation 
- head section on each page
- social links at footer

**17-jun-2018 Version 6.1.6**
- product status at variant level 
- fix: Langulage, uploads, banners 

**15-jun-2018 Version 6.1.5**
- fix: review/post
- design: login, signup, fp
- validations 

**14-jun-2018 Version 6.1.4**
- change: product migrations
- fix: banners page text 

**13-jun-2018 Version 6.1.3**
- proxy url from env variable 

**11-jun-2018 Version 6.1.2**
- icon size 
- sum into summary

**10-jun-2018 Version 6.1.2**
- layouts 
- header footer
- design: Header 
- layout: footer 
  
**09-jun-2018 Version 6.1.1**
- pages: about contact payment shipping
- fix: Media upload for production
Branches

**08-jun-2018 Version 6.1.0**
- settings: banners and deals page 
- fix: banners
- layouts
- breadcrumb, settings, pages

**07-jun-2018 Version 6.0.9** 
- text changes
- layout
- meta title, breadcrumbs,layouts

**05-jun-2018 Version 6.0.8** 
- profile and oauth styling
- layouts

**02-jun-2018 Version 6.0.7** 
- auth.js replaced phone with token

**01-jun-2018 Version 6.0.6** 
- issue: Baners image upload
- removed favicon from nuxt.config which was causing server hanging issue 
- orders moved to orders.controller from summary 
- err handle all async functions
- removed favicon which was blocking server content
- included missing promise errors 
- oauth

**31-May-2018 Version 6.0.5**
- fix: icon placement
- icons + layout
- feature: list image + abstract settings

**30-May-2018 Version 6.0.4**
- List page: new automation features 
- tooltips and layouts
- packing slip invoice sample added 
- pdf generation trial through pdfkit
- added seedDatabase option to config

**29-May-2018 Version 6.0.3**
- fix: order/pending replaced with summary/pending 

**28-May-2018 Version 6.0.2**
- added helmet
- removed webfont loader for icons
- order details
- order-admin
- tooltips
- list page search input
- dashboard components moved to its own directory 

**27-May-2018 Version 6.0.1**
- order management

**26-May-2018 Version 6.0.0**
- settings page layout

**25-May-2018 Version 5.9.9**
- loading indicator 

**23-May-2018 Version 5.9.9**
- settings->slider image url 
- all config from database 
- admin layout changed to default

**22-May-2018 Version 5.9.9**
- settings into server

**21-May-2018 Version 5.9.9**
- settings sms.ts error
- settings
- settings page
- vue-charts in place of moriss which cause some text canvas error 

**20-May-2018 Version 5.9.9**
- google-maps
- seeding
- Added title to page settings 
- logo new/replace to file system 
- logo,mobile logo, favicon into settings 
- settings and page 
- logo into settings

**19-May-2018 Version 5.9.8**
- cms pages 
- fix: Settings 
- settings layout 
- pages 

**18-May-2018 Version 5.9.7**
- Fix: banner upload 
- banners 

**17-May-2018 Version 5.9.6**
- image uploads 

**16-May-2018 Version 5.9.5**
- instamojo 
- translations 

**15-May-2018 Version 5.9.4**
- stripe payment processed

**14-May-2018 Version 5.9.4**
- try: stripe 
- Fast2SMS integration sms integration

**13-May-2018 Version 5.9.3**
- banner settings

**12-May-2018 Version 5.9.2**
- feature: Left menu based on roles
- feature: hindi translations
- roles into pages

**11-May-2018 Version 5.9.1**
- fix: translations
- translations

**10-May-2018 Version 5.9.0**
- localization
- route guard
- auth mixins

**09-May-2018 Version 5.8.9**
- fix: filters 
- login page
- admin login
- area chart

**07-May-2018 Version 5.8.9** 
-media gallery + reviews for admin

**06-May-2018 Version 5.8.8**
- add edit product/variants

**05-May-2018 Version 5.8.8**
- product cards refined
- admin dashboard charts and cards
- admin dashboard components

**04-May-2018 Version 5.8.8**
- admin page layouts 

**03-May-2018 Version 5.8.7**
- fix: image upload issue

**21-Apr-2018 Version 5.8.6**
-  category

**19-Apr-2018 Version 5.8.5**
- brand checkbox
- admin search

**10-Apr-2018 Version 5.8.4**
- add: Adming pages

**07-Apr-2018 Version 5.8.3**
- feature: Save category count into category table whenever product is updated

**03-Apr-2018 Version 5.8.2**
- category image 
- category details

**02-Apr-2018 Version 5.8.1**
- cart module 

**01-Apr-2018 Version 5.8.0** 
- category filter

**31-Mar-2018 Version 5.7.9** 
- feature: sms, sendOtp

**30-Mar-2018 Version 5.7.8** 
- return 204 in place of 404 if no record found 

**29-Mar-2018 Version 5.7.7** 
- checkout 
- invalid token error 401 
- socket: other apis 

**28-Mar-2018 Version 5.7.6** 
- socketize: product,feature 
- working: websockets 
- fix: socket save emit 

**26-Mar-2018 Version 5.7.5** 
- fix/; Base 
- feature: print invoice 
- socketio working at server + api slimmed down 

**23-Mar-2018 Version 5.7.4**
- fix: start without dist/server/app.js file 

**16-Mar-2018 Version 5.7.3** 
- search with route params 
- brand search 

**14-Mar-2018 Version 5.7.2** 
- fix: removed email from mandatory list user.model 
- api base file converted to async/await 

**13-Mar-2018 Version 5.7.1**
- fix:err at passport local  

**12-Mar-2018 Version 5.7.0**
- implemented natual and saved into q1 field of product model 

**11-Mar-2018 Version 5.6.9** 
- metaphone 

**10-Mar-2018 Version 5.6.8**  
- variant model shifted to own schema 

**04-Mar-2018 Version 5.6.7** 
- nuxt proxy 
- vuetify 
- true spa mode enabled

**03-Mar-2018 Version 5.6.6** 
- feature: product manage version-1 

**27-Feb-2018 Version 5.6.5** 
- fix: server start on package.json 

**26-Feb-2018 Version 5.6.4** 
- product pricing details to list 
- changes for freshnow 

**25-Feb-2018 Version 5.6.3**
- Arialshop rennovation project initiated 