---
title: Directory Structure
date: 2018-06-18 06:40:12
---

## Project Root Directory Structure

``` bash
+---client
+---node_modules
+---server
+---uploads
|   .angular-cli.json
|   .editorconfig
|   .env
|   .gitignore
|   karma.conf.js
|   package.json
|   protractor.conf.js
|   proxy.conf.json
|   tsconfig.json
|   tslint.json
```

## Client Directory Structure

``` bash
├───app
│   ├───account
│   │   ├───cp
│   │   ├───login
│   │   ├───password
│   │   └───profile
│   ├───admin
│   │   ├───address
│   │   ├───brands
│   │   │   └───brand-detail
│   │   ├───categories
│   │   ├───coupons
│   │   │   └───coupon-detail
│   │   ├───dashboard
│   │   ├───features
│   │   │   └───feature-detail
│   │   ├───media
│   │   ├───my-orders
│   │   ├───my-reviews
│   │   ├───order
│   │   │   └───order-content
│   │   ├───product
│   │   │   ├───features
│   │   │   ├───product-detail
│   │   │   └───variants
│   │   ├───reviews
│   │   │   └───review-detail
│   │   ├───shipping
│   │   │   └───shipping-detail
│   │   ├───user
│   │   │   └───user-detail
│   │   └───wishlist
│   ├───home
│   │   ├───banner
│   │   ├───checkout
│   │   ├───featured-products
│   │   ├───home
│   │   ├───megamenu
│   │   ├───news-banner
│   │   ├───owl-carousel
│   │   ├───product
│   │   ├───product-card
│   │   ├───shop
│   │   ├───success
│   │   └───wish-button
│   ├───modal
│   └───shared
│       ├───404
│       ├───address
│       ├───cart-buttons
│       ├───dialogs
│       ├───edit
│       ├───export
│       ├───footer
│       ├───guards
│       ├───header
│       ├───list
│       ├───list-image
│       ├───media
│       ├───oauth-buttons
│       ├───pipes
│       ├───search
│       ├───services
│       └───submit-button
├───assets
│   ├───fashion
│   └───img
└───environments
|   hmr.ts
|   index.html
|   main.ts
|   output.txt
|   polyfills.ts
|   test.ts
|   tsconfig.app.json
|   tsconfig.spec.json
|   typings.d.ts
```


## Server Directory Structure

``` bash
├───api
│   ├───address
│   ├───brand
│   ├───category
│   ├───contact
│   ├───coupon
│   ├───customer
│   ├───feature
│   ├───media
│   ├───order
│   ├───orderHistory
│   ├───pay
│   ├───payment-method
│   ├───product
│   ├───review
│   ├───sendmail
│   ├───shipping
│   ├───upload
│   ├───user
│   └───wishlist
├───auth
│   ├───facebook
│   ├───google
│   ├───local
│   │   └───.git
│   │       ├───hooks
│   │       ├───info
│   │       ├───objects
│   │       │   ├───40
│   │       │   ├───97
│   │       │   ├───info
│   │       │   └───pack
│   │       └───refs
│   │           ├───heads
│   │           └───tags
│   └───twitter
└───components
    └───errors
|   app.ts
|   config.ts
|   routes.ts
|   seed.ts
|   tsconfig.json
```