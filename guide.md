---
title: Usage Instructions (Guide)
date: 2018-06-18 06:40:12
---
## Home page
The home page of our web app. It contains
- Jumbo sliders with images
- Banners for shop promotion
- Some features products

## Products page
 This is the products page of our Javascript e-commerce store. Here we get

  - List of all products
  - Filter Products: based on `Price (Price Slider), Brand, Features (Color, Type, Fit, Fabric, Neck)`
  - Sort: Based on Price and Name

Each product contains a add to cart button. Once the product is added into the cart, we get the increase or decrease cart
quantity option By clicking each product we arrive at the product detail page

## Product Details
 This page presents the complete details of the product
  - Product name
  - Description
  - Price, MRP
  - Product Image (Including additional images)
  - Brand
  - Category
  - Quantity in cart
  - Size
  - Features

<br/>
## Search
 The top navigation bar of the website has a search box which auto search while user
starts typing. 

## Category
 Get the current category name with all products under it<br/> This page also has all the filter and sort options.

## Shopping Cart
This store is featured with a shopping cart facility which is easy to use and fast.
  - Get quick summary of what is there in Cart
  - Modify the cart quantity
  - Checkout using Paypal, COD, Instamojo

## Login / Signup

Features like Signup / SignIn / Change Password / Logout is integrated into this application already with high level of security,
  so that you no longer need to be worry about implementing all those features into the application

A user need <b>not</b> have to navigate to a separate page to login or signup. It comes as a popup which is a huge ui improvement.
This login popup has a advantage of poping out for any route when a guest user tries to access a restricted page Both the
login and signup page has the option for connect using facebook, twitter, google as well

## Checkout

  - The checkout page Displays the Order Amount + ShipCharge
  - This also has an option discount coupons which is appif valid.
  - Here the user can choose the Payment options (Cash On Delivery, Paypal, Instamojo[India] )
  - This page automatically choose the best available ShipOptions based on the total order weight and the shipper availability.
  - While checkout the user can choose from any address.

## Address Management
 The address management is integrated into the checkout page to make the checkout experience single view
and easy. Here the user can store and manage different addresses.

## Order Management
 The user has the facility to view the order history. Administrators can change order status + payment status
**Users:** All the orders placed by the logged in user is available in this view. 
**Administrators:**  This view presents all orders placed by users with the option to change order status and shipping

## User Management

**Users: ** <br/> Change Password<br/> Forgot Password<br/>
**Administrators: **<br/> User role management

## Media Library

  - Now the shop has a new media library where the managers can upload any image that is to be used in the shopping application
  - Clicking on each image displays the details about iwell as an option to delete it



## Products (Role: Managers, Administrators)
 Product details can be added, modified and deleted using this page. Each product can be associated into
a single Brand, Category A product can have

  - Multiple features
  - Multiple key features
  - Multiple product images
  - The list contains all the available products with a sebox to filter the list.
  - Clicking on a product at the product list will poputhe details of the product at the right sidebar
  - The right sidebar has option to change product ndetails, brand, category
  - This sidebar also contains a module to manage proimages

## Manage Brands

Administrators can add, edit, delete, filter brands of their store from this view

## Manage Categories

  - Categories are presented in Parent-Child manner in store for better organisation of products.
  - Store's navigation bar at top contains all the categoarranged in parent-child fashion.
  - This view provides facility to add both parent and ccategories, re-arrange category association according to their
    requirement.
