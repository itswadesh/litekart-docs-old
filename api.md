---
title: API Documentation
date: 2019-06-18 06:40:12
---

# API Documentation

## Address Endpoint

::: warning GET 
- [https://api.arialshop.com/api/addresses/my](https://api.arialshop.com/api/addresses/my)
> Get all addresses of logged in users
 * Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/addresses/](https://api.arialshop.com/api/addresses/)
> Get all addresses stored in databse irrespective of userid
* Role->Admin
:::

::: warning GET
- [https://api.arialshop.com/api/addresses/:id](https://api.arialshop.com/api/addresses/:id)
> Update a single address document 
* Role->User
* :id->address
:::

::: warning POST
- [https://api.arialshop.com/api/addresses/](https://api.arialshop.com/api/addresses/)
> When a user click on addNewAddress, this endpoint is fired to create a new address in database
* Role->User
:::

::: warning PUT
- [https://api.arialshop.com/api/addresses/:id](https://api.arialshop.com/api/addresses/:id)
> User can update his own address by passing the document ID
* Role->User
* param :id=document id of address to be updated 
:::

::: warning PATCH
- [https://api.arialshop.com/api/addresses/:id](https://api.arialshop.com/api/addresses/:id)
> User can change the addresses details by passing address id.
* Role->User
* param :id=document id of address to be updated

:::

::: warning DELETE
- [https://api.arialshop.com/api/addresses/:id](https://api.arialshop.com/api/addresses/:id)
> User can delete specific address by passing the address id.
* Role->User
* param :id=address id of address to be deleted
:::
## Brand Endpoints

::: warning GET
- [https://api.arialshop.com/api/brands/](https://api.arialshop.com/api/brands/)
> List all brands for public
:::

::: warning GET
- [https://api.arialshop.com/api/brands/:id](https://api.arialshop.com/api/brands/:id)
> View details of a brand document by passing brand id.
* param :id=Brand document id of a brand can be viewed
:::

::: warning POST
- [https://api.arialshop.com/api/brands/](https://api.arialshop.com/api/brands/)
> Manager can create a new brand document.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/brands/:id](https://api.arialshop.com/api/brands/:id)
> Manager can change brand details by passing brand id.
* Role->Manager
* param :id=document id of brand to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/brands/:id](https://api.arialshop.com/api/brands/:id)
> Manager can change the brand details by passing brand id.
* Role->Manager
* param :id=document id of brand to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/brands/:id](https://api.arialshop.com/api/brands/:id)
> Admin can delete specific brand by passing the brand id.
* Role->Admin
* param :id=document id of settings to be deleted
:::
## Cart Endpoints

::: warning GET
- [https://api.arialshop.com/api/carts/my](https://api.arialshop.com/api/carts/my)
> Get cart items saved for the user
* Role->User
:::

::: warning POST
- [https://api.arialshop.com/api/carts/](https://api.arialshop.com/api/carts/)
> Save cart items of user into database for accessing across devices
* Role->User
:::

:::

## Category Endpoints

::: warning GET
- [https://api.arialshop.com/api/categories/](https://api.arialshop.com/api/categories/)
> Get all category for public
:::

::: warning GET
- [https://api.arialshop.com/api/categories/:id](https://api.arialshop.com/api/categories/:id)
> All visitors can view details of a category document by passing category id.
* param :id=document id of category can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/categories/details](https://api.arialshop.com/api/categories/details)
> Get all categories including childrens
:::

::: warning GET
- [https://api.arialshop.com/api/categories/all](https://api.arialshop.com/api/categories/all)
> Get all categories in a single level without parent child relationship
:::

::: warning GET
- [https://api.arialshop.com/api/categories/parents](https://api.arialshop.com/api/categories/parents)
> Get all root level categories
:::

::: warning GET
- [https://api.arialshop.com/api/categories/loaded](https://api.arialshop.com/api/categories/loaded)
> Get all categories containing atleast 1 product
:::

::: warning GET
- [https://api.arialshop.com/api/categories/blind](https://api.arialshop.com/api/categories/blind)
> All categories having no parent
:::

::: warning POST
- [https://api.arialshop.com/api/categories/](https://api.arialshop.com/api/categories/)
> Manager can create a new category document.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/categories/](https://api.arialshop.com/api/categories/)
> This removes all categories and inserts the modified categories again
* Role->Manager

:::

::: warning PATCH
- [https://api.arialshop.com/api/categories/:id](https://api.arialshop.com/api/categories/:id)
> If there is a parent category in received request, update child categories else update the parent category
* Role->Manager
* param :id=document id of category to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/categories/:id/:pid](https://api.arialshop.com/api/categories/:id/:pid)
> Manager can delete specific category by passing the child category-id and parent category-id in case of a 2 level category tree
* Role->Manager
* param :id=document id of category to be deleted
:::

::: warning DELETE
- [https://api.arialshop.com/api/categories/:id](https://api.arialshop.com/api/categories/:id)
> Delete parent category (dangarous)
* Role->Manager
* param :id=category id of category to be deleted
:::

## Contact Endpoints

::: warning GET
- [https://api.arialshop.com/api/contacts/my](https://api.arialshop.com/api/contacts/my)
> view details of a perticular user's contact document.
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/contacts/](https://api.arialshop.com/api/contacts/)
> View details of a contact document managed by Manager.
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/contacts/:id](https://api.arialshop.com/api/contacts/:id)
> View details of a contact document by passing contact id.
* Role->Manager
* param :id=contact document id of a contact can be viewed
:::

::: warning POST
- [https://api.arialshop.com/api/contacts/](https://api.arialshop.com/api/contacts/)
>Manager can create a new contact document.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/contacts/:id](https://api.arialshop.com/api/contacts/:id)
>Manager can change contacts by passing contact id.
* Role->Manager
* param :id=document id of contact to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/contacts/:id](https://api.arialshop.com/api/contacts/:id)
>User can change the contact document by passing contact id.
* Role->User
* param :id=document id of contact to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/contacts/:id](https://api.arialshop.com/api/contacts/:id)
>Admin can delete contact details of contact by passing the contact id.
 * param :id=document id of settings to be deleted
:::
## Coupon Endpoints

::: warning GET
- [https://api.arialshop.com/api/coupons/my](https://api.arialshop.com/api/coupons/my)
> All coupons generated by vendor
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/coupons/](https://api.arialshop.com/api/coupons/)
> Get all coupons for available in webiste for public
:::

::: warning GET
- [https://api.arialshop.com/api/coupons/:id](https://api.arialshop.com/api/coupons/:id)
> View details of a coupon by passing coupon id.
* param:id->coupon document id of a coupon to be viewed
:::

::: warning POST
- [https://api.arialshop.com/api/coupons/](https://api.arialshop.com/api/coupons/)
> Admin can create a new coupon
* Role->Admin
:::

::: warning PUT
- [https://api.arialshop.com/api/coupons/:id](https://api.arialshop.com/api/coupons/:id)
> Admin can update coupon details by passing coupon id.
* Role->Admin
* param :id=document id of coupon to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/coupons/:id](https://api.arialshop.com/api/coupons/:id)
> Admin can update coupon details by passing coupon id.  
* Role->Admin
* param :id=document id of coupon to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/coupons/:id](https://api.arialshop.com/api/coupons/:id)
> Admin can delete specific coupon by passing the coupon id.
* Role->Admin
* param :id=coupon id of coupon to be deleted
:::
## Customer Endpoints

::: warning GET
- [https://api.arialshop.com/api/customers/my](https://api.arialshop.com/api/customers/my)
> Vendor's can see details of their customers.
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/customers/](https://api.arialshop.com/api/customers/)
> Get all customers
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/customers/:id](https://api.arialshop.com/api/customers/:id)
> View details of a customer by passing customer id.
* param:id->customer document id of a customer can be viewed
* Role->Manager
:::

::: warning POST
- [https://api.arialshop.com/api/customers/](https://api.arialshop.com/api/customers/)
> Manager allowed to create a new customer document.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/customers/:id](https://api.arialshop.com/api/customers/:id)
> Managers can change customer details by passing customer id, changed customer details.
* Role->Manager
* param :id=document id of customer to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/customers/:id](https://api.arialshop.com/api/customers/:id)
> User can change the customer details by passing customer id, changed customer details
* Role->Manager
* param :id=document id of customer to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/customers/:id](https://api.arialshop.com/api/customers/:id)
> Manager can delete specific customer details by passing the customer id.
* Role->Manager
* param :id=customer id of customer to be deleted
:::

## Email Endpoints

::: warning POST
- [https://api.arialshop.com/api/email/contactus](https://api.arialshop.com/api/email/contactus)
> Send contactus email to website admin
* Role->User
:::

## Features Endpoints

::: warning GET
- [https://api.arialshop.com/api/features/my](https://api.arialshop.com/api/features/my)
> View details of a feature document added by corresponding vendor.
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/features/](https://api.arialshop.com/api/features/)
> View details of all feature document.
:::

::: warning GET
- [https://api.arialshop.com/api/features/:id](https://api.arialshop.com/api/features/:id)
> View details of a feature document by passing feature id.
* param:id->feature document id of a feature can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/features/group](https://api.arialshop.com/api/features/group)
> View details of a feature's group document.
:::

::: warning GET
- [https://api.arialshop.com/api/features/group/:id](https://api.arialshop.com/api/features/group/:id)
> View details of a feature document by passing feature id.
* param :id->feature document id of a feature can be viewed
:::

::: warning POST
- [https://api.arialshop.com/api/features/](https://api.arialshop.com/api/features/)
>Manager can create a new feature document.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/features/:id](https://api.arialshop.com/api/features/:id)
>Manager can change feature by passing feature id.
* Role->Manager
* param :id=document id of feature to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/features/:id](https://api.arialshop.com/api/features/:id)
>Manager can change the feature document by passing feature id.
* Role->Manager
* param :id=document id of feature to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/features/:id](https://api.arialshop.com/api/features/:id)
>Manager can delete specific features by passing the feature id.
* Role->Manager
* param :id=feature id of features to be deleted
:::

## Feedback Endpoints

::: warning GET
- [https://api.arialshop.com/api/feedback/](https://api.arialshop.com/api/feedback/)
> View all feedbacks received.
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/feedback/:id](https://api.arialshop.com/api/feedback/:id)
> View details of a feedback document by passing feedback id.
* param :id->feedback id of a feedback can be viewed

::: warning POST
- [https://api.arialshop.com/api/feedback/](https://api.arialshop.com/api/feedback/)
> Admin can create a new feedback.
* Role->Admin
:::

::: warning PUT
- [https://api.arialshop.com/api/feedback/:id](https://api.arialshop.com/api/feedback/:id)
> Admin can change feedback by passing feedback id, changed feedback document.
* Role->Admin
* param :id=document id of feedback to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/feedback/:id](https://api.arialshop.com/api/feedback/:id)
>Admin can change the feedback document by passing feedback id, changed feedback document.
* Role->Admin
* param :id=document id of feedback to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/feedback/:id](https://api.arialshop.com/api/feedback/:id)
>Admin can delete the specific feedback by passing the feedback id.
* Role->Admin
* param :id=feedback id of feedback to be deleted
:::
## Media Endpoints

::: warning GET
- [https://api.arialshop.com/api/media/my](https://api.arialshop.com/api/media/my)
> Get of all uploaded images by the corresponding user
* Role->User
:::

::: warning POST
 - [https://api.arialshop.com/api/media/](https://api.arialshop.com/api/media/)
> Add a new image
* Role->User
:::

::: warning POST
- [https://api.arialshop.com/api/media/banner](https://api.arialshop.com/api/media/banner)
> Create a new banner document.
* Role->Manager
:::

::: warning POST
- [https://api.arialshop.com/api/media/:name](https://api.arialshop.com/api/media/:name)
> Manager can create a new media banner document by passing the name.
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/media/](https://api.arialshop.com/api/media/)
> Get all images for public
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/media/:id](https://api.arialshop.com/api/media/:id)
> View details of a media document by passing media id.
* Role->Manager
* param :id->media document id of a media can be viewed
:::

::: warning PUT
- [https://api.arialshop.com/api/media/:id](https://api.arialshop.com/api/media/:id)
> Manager can change  the media details by passing media id.
* Role->Manager
* param :id=document id of media to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/media/:id](https://api.arialshop.com/api/media/:id)
> Manager can change the media document by passing media id.
* Role->Manager
* param :id=document id of media to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/media/:id](https://api.arialshop.com/api/media/:id)
>Manager can delete the specific media by passing the media id.
* Role->Manager
* param :id=media id of media to be deleted
:::
## Order Endpoints

::: warning GET
- [https://api.arialshop.com/api/orders/my](https://api.arialshop.com/api/orders/my)
> Get list of all orders placed by the corresponding user
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/orders/total](https://api.arialshop.com/api/orders/total)
> Get total order count
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/statusSummary](https://api.arialshop.com/api/orders/statusSummary)
> Get order Stratus Summary for admin dashboard
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/newActivities](https://api.arialshop.com/api/orders/newActivities)
> View list of new activities for admin dashboard.
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/](https://api.arialshop.com/api/orders/)
> Get list of all orders
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/pending](https://api.arialshop.com/api/orders/pending)
> Get list of all pending orders
* Role->Shipper
:::

::: warning GET
- [https://api.arialshop.com/api/orders/shipped](https://api.arialshop.com/api/orders/shipped)
> Get list of all shipped orders
* Role->vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/cancelled](https://api.arialshop.com/api/orders/cancelled)
> List of all cancelled orders
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/delivered](https://api.arialshop.com/api/orders/delivered)
> Get all orders that are delivered
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/orders/dailySales](https://api.arialshop.com/api/orders/dailySales)
> Get summary of daily sales for the daily sales chart at admin dashboard
:::

::: warning GET
- [https://api.arialshop.com/api/orders/:id](https://api.arialshop.com/api/orders/:id)
> View details of a order by passing order id.
* Role->Vendor
* param :id=page document id of a page can be viewed.
:::

::: warning POST
- [https://api.arialshop.com/api/orders/](https://api.arialshop.com/api/orders/)
> User can create a new order through checkout process
* Role->User
:::

::: warning PUT
- [https://api.arialshop.com/api/orders/:id](https://api.arialshop.com/api/orders/:id)
> Vendor can change the order by passing order id, new order details.
* Role->Vendor
* param :id=document id of order to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/orders/:id](https://api.arialshop.com/api/orders/:id)
>Vendor can change the order details by passing order id, new order details.
* Role->Vendor
* param :id=document id of order to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/orders/:id](https://api.arialshop.com/api/orders/:id)
>Admin can delete a specific order by passing the order id. 
* Role->Admin
* param :id=order id of order to be deleted
:::
## Page Endpoints

::: warning GET
- [https://api.arialshop.com/api/pages/my](https://api.arialshop.com/api/pages/my)
> All pages that are created by corresponding Managers
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/pages/](https://api.arialshop.com/api/pages/)
> Get list of all pages
:::

::: warning GET
- [https://api.arialshop.com/api/pages/:id](https://api.arialshop.com/api/pages/:id)
> Get page details
* param id=page document id of a page can be viewed
* Role->Manager
:::

::: warning POST
- [https://api.arialshop.com/api/pages/](https://api.arialshop.com/api/pages/)
> Manager are allowed to create a new page
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/pages/:id](https://api.arialshop.com/api/pages/:id)
> Manager can change page details by passing page id, the new page details.
* Role->Manger
* param :id=document id of page to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/pages/:id](https://api.arialshop.com/api/pages/:id)
> Managers can update the page by passing Page id, updated page info
* Role->Manager
* param :id=document id of page to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/pages/:id](https://api.arialshop.com/api/pages/:id)
> Managers can delete the specific page by passing the page id
* Role->Manager
* param :id=page id of page to be deleted
:::
## Pay Endpoints

::: warning GET
- [https://api.arialshop.com/api/pay/paypal](https://api.arialshop.com/api/pay/paypal)
> Checkout through PayPal
* Controller->PayPal
:::

::: warning GET
- [https://api.arialshop.com/api/pay/instamojo](https://api.arialshop.com/api/pay/instamojo)
> Checkout through Instamojo
* Controller->Instamojo
:::

::: warning POST
- [https://api.arialshop.com/api/pay/stripe](https://api.arialshop.com/api/pay/stripe)
> Checkout through Stripe
* Controller->stripe
:::

::: warning GET
- [https://api.arialshop.com/api/pay/success](https://api.arialshop.com/api/pay/success)
> The page to be navigated on successful checkout
* Controller->Success
:::

::: warning GET
- [https://api.arialshop.com/api/pay/process](https://api.arialshop.com/api/pay/process)
> This is used by paypal to process the payment
* Controller->process
:::

::: warning GET
- [https://api.arialshop.com/api/pay/processInstamojo](https://api.arialshop.com/api/pay/processInstamojo)
> Used for instamojo to process the payment
* Controller->processInstamojo
:::

::: warning GET
- [https://api.arialshop.com/api/pay/cancel](https://api.arialshop.com/api/pay/cancel)
> This is fired when the payment request is cancelled by the user

:::

## Payment Method Endpoints

::: warning GET
- [https://api.arialshop.com/api/payment-methods/my](https://api.arialshop.com/api/payment-methods/my)
> Get all added payment methods by Admin
* Role->Admin
:::

::: warning GET
- [https://api.arialshop.com/api/payment-methods/](https://api.arialshop.com/api/payment-methods/)
> List of all payment methods available in admin panel

:::

::: warning GET
- [https://api.arialshop.com/api/payment-methods/active](https://api.arialshop.com/api/payment-methods/active)
> Get a list of all active payment-methods.
* Role->User
:::

::: warning POST
- [https://api.arialshop.com/api/payment-methods/](https://api.arialshop.com/api/payment-methods/)
> Admin can create a new payment-method.
* Role->Admin
:::

::: warning PUT
- [https://api.arialshop.com/api/payment-methods/:id](https://api.arialshop.com/api/payment-methods/:id)
> Admin can modify the payment-method
* Role->Admin
* param :id=document id of payment-method to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/payment-methods/:id](https://api.arialshop.com/api/payment-methods/:id)
> Admin is authorized to modify the payment-method
* Role->Admin
* param :id=document id of payment-method to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/payment-methods/:id](https://api.arialshop.com/api/payment-methods/:id)
> Admin can delete the specific payment-method by passing the payment-method id.
* Role->Admin
* param :id=payment-method id of payment-method to be deleted
:::


## Product Endpoints

::: warning GET
- [https://api.arialshop.com/api/products/my](https://api.arialshop.com/api/products/my)
> Get all products that belong to me (vendor)
* Role->Vendor
:::

::: warning GET
- [https://api.arialshop.com/api/products/public](https://api.arialshop.com/api/products/public)
> Get all products including returned records count for product listing page of the store front. The list is restricted to 30 initially but the limit can be changed by passing `{param :{limit:100}}`
:::

::: warning GET
- [https://api.arialshop.com/api/products/](https://api.arialshop.com/api/products/)
> Get all products for vendor. The list is restricted to 30 initially but the limit can be changed by passing `{param :{limit:100}}`
* Controller->All
:::

::: warning GET
- [https://api.arialshop.com/api/products/:id](https://api.arialshop.com/api/products/:id)
> Get details of a product by passing product id (mainly for product details page).
* param :id->product document id of a product can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/products/count](https://api.arialshop.com/api/products/count)
> Get all products count
:::

::: warning GET
- [https://api.arialshop.com/api/products/priceRange](https://api.arialshop.com/api/products/priceRange)
> Get price range of entire store (min price - max price)
:::

::: warning GET
- [https://api.arialshop.com/api/products/search-brand](https://api.arialshop.com/api/products/search-brand)
> Search all products under a particucar brand (Here bran is provided as search term)
> If I search for `lore` this shoudl list all products under `loreal` brand
:::

::: warning GET
- [https://api.arialshop.com/api/products/deep/:id](https://api.arialshop.com/api/products/deep/:id)
> Get the requested product details including brand details and category details
* param :id->product document id of product can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/products/search/:q](https://api.arialshop.com/api/products/search/:q)
> Get all products matching the search query `q`
:::

::: warning POST
- [https://api.arialshop.com/api/products/](https://api.arialshop.com/api/products/)
> Create a new product
:::

::: warning PUT
- [https://api.arialshop.com/api/products/:id](https://api.arialshop.com/api/products/:id)
> Vendor can change the product by passing product id, updated product details.
* Role->Vendor
* param :id=document id of product to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/products/:id](https://api.arialshop.com/api/products/:id)
> Vendor can change the product document by passing product id, updated product details.
* Role->Vendor
* param :id=document id of product to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/products/:id](https://api.arialshop.com/api/products/:id)
> Vendor can delete specific product by passing the product id.
* Role->Vendor
* param :id=product id of product to be deleted
:::


## Review Endpoints

::: warning GET
- [https://api.arialshop.com/api/reviews/my](https://api.arialshop.com/api/reviews/my)
> View details of a user's own reviews
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/reviews/](https://api.arialshop.com/api/reviews/)
> Get all reviews
:::

::: warning GET
- [https://api.arialshop.com/api/reviews/:id](https://api.arialshop.com/api/reviews/:id)
> View details of a review document by passing review id.
* param :id->review document id of review can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/reviews/group](https://api.arialshop.com/api/reviews/group)
> Get all reviews group by product
:::

::: warning GET
- [https://api.arialshop.com/api/reviews/product/:id](https://api.arialshop.com/api/reviews/product/:id)
> Get details of reviews against a single product
* param :id=review document id of review can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/reviews/my/product/:id](https://api.arialshop.com/api/reviews/my/product:id)
> Get review details for if that review was made by me
* Role->User
* param :id=document id of review can be viewed
:::

::: warning POST
- [https://api.arialshop.com/api/reviews/](https://api.arialshop.com/api/reviews/)
> Create a new review
* Role->User
:::

::: warning PUT
- [https://api.arialshop.com/api/reviews/:id](https://api.arialshop.com/api/reviews/:id)
> Manager can change review by passing review id, new review details.
* Role->Manager
* param :id=document id of review to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/reviews/:id](https://api.arialshop.com/api/reviews/:id)
> Manager can change review by passing review id, new review details.
* Role->Manager
* param :id=document id of review to be updated
:::

::: warning PUT
- [https://api.arialshop.com/api/reviews/vote/:count/:id](https://api.arialshop.com/api/reviews/vote/:count/:id)
> Update vote count when the up-arrow pressed at the product details page
* Role->User
param :id=document id of settings to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/reviews/:id](https://api.arialshop.com/api/reviews/:id)
> User can delete his own review on product
* Role->User
* param :id=review id of review to be deleted
:::

## Setting Endpoints

::: warning GET
- [https://api.arialshop.com/api/settings/admin](https://api.arialshop.com/api/settings/admin)
> List all settings for admin to manage.
* Role->Admin
:::

::: warning GET
- [https://api.arialshop.com/api/settings/](https://api.arialshop.com/api/settings/)
> Query all the settings for public. This excludes settings id and metadata.
* Controller->Public
:::
 
::: warning GET
- [https://api.arialshop.com/api/settings/:id](https://api.arialshop.com/api/settings/:id)
> View details of a setting.
> Query a single settings
* :id->settings
:::

::: warning POST
- [https://api.arialshop.com/api/settings/](https://api.arialshop.com/api/settings/)
> Admin can create a new settings.
* Role->admin
:::

::: warning PUT
- [https://api.arialshop.com/api/settings/:id](https://api.arialshop.com/api/settings/:id)
> Manager can change settings by passing settings id, updated settings object.
* Role->Manager
* param :id=document id of settings to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/settings/:id](https://api.arialshop.com/api/settings/:id)
> Manager can change the settings by passing document id, updated settings object.
* Role->Manager
* param :id=document id of settings to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/settings/:id](https://api.arialshop.com/api/settings/:id)
> Admin can delete specific settings by passing the settings id.
* Role->Admin
* param :id=document id of settings to be deleted
:::
## Shipping Endpoints

::: warning GET
- [https://api.arialshop.com/api/shippings/my](https://api.arialshop.com/api/shippings/my)
> View all shipping methods added by Admin
* Role->Admin
:::

::: warning GET
- [https://api.arialshop.com/api/shippings/](https://api.arialshop.com/api/shippings/)
> Get all shipping methods available at the shop. This is available to public
:::

::: warning GET
- [https://api.arialshop.com/api/shippings/:id](https://api.arialshop.com/api/shippings/:id)
> View details of a shipping method by passing shipping id.
* Role->Manager
* param :id=document id of shipping can be viewed
:::

::: warning GET
- [https://api.arialshop.com/api/shippings/best](https://api.arialshop.com/api/shippings/best)
> Find best shipping method against a cart value
:::

::: warning POST
- [https://api.arialshop.com/api/shippings/](https://api.arialshop.com/api/shippings/)
> Manager can add a new shipping method.
* Role->Manager
:::

::: warning PUT
- [https://api.arialshop.com/api/shippings/:id](https://api.arialshop.com/api/shippings/:id)
> Manager can change shipping method by passing shipping id, new shipping object.
* Role->Manager
* param :id=document id of shipping to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/shippings/:id](https://api.arialshop.com/api/shippings/:id)
> Manager can change shipping details by passing shipping id, new shipping object.
* Role->Manager
* param :id=document id of shipping to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/shippings/:id](https://api.arialshop.com/api/shippings/:id)
> Manager can delete the specific shipping method by passing the shipping id.
* Role->manager
* param :id=shipping id of shipping to be deleted
:::


## User Endpoints

::: warning GET
- [https://api.arialshop.com/api/users/](https://api.arialshop.com/api/users/)
> Get all users
* Role-> Vendor,Manager,Admin
:::

::: warning GET
- [https://api.arialshop.com/api/users/users](https://api.arialshop.com/api/users/users)
> Get all users. This is only for Manager
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/users/:id](https://api.arialshop.com/api/users/:id)
> View details of a user by passing user id.
* Role->User
* param :id=document id of users can be viewed.
:::

::: warning GET
- [https://api.arialshop.com/api/users/phone/:phone](https://api.arialshop.com/api/users/phone/:phone)
> Check the phone number whether it is already registered
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/users/search/:q](https://api.arialshop.com/api/users/search/:q)
> View list of users searched by passing a search query.
:::

::: warning PUT
- [https://api.arialshop.com/api/users/password](https://api.arialshop.com/api/users/password)
> User can change his own password
* Role->User
:::

::: warning PUT
- [https://api.arialshop.com/api/users/profile](https://api.arialshop.com/api/users/profile)
> User can update his own profile. 
* Role->User
:::

::: warning PUT
- [https://api.arialshop.com/api/users/:id](https://api.arialshop.com/api/users/:id)
> Manager can change user details by passing user id.
* param :id=document id of user to be updated
:::

::: warning POST
- [https://api.arialshop.com/api/users/](https://api.arialshop.com/api/users/)
> Signup process of a new User.
:::

::: warning POST
- [https://api.arialshop.com/api/users/sendOtp](https://api.arialshop.com/api/users/sendOtp)
> OTP is sent to user mobile
:::

::: warning POST
- [https://api.arialshop.com/api/users/forgot](https://api.arialshop.com/api/users/forgot)
> User's Forgot password section.
:::

::: warning POST
- [https://api.arialshop.com/api/users/reset/:token](https://api.arialshop.com/api/users/reset/:token)
> User's Reset password section
:::

::: warning DELETE
- [https://api.arialshop.com/api/users/:id](https://api.arialshop.com/api/users/:id)
> Admin can delete the specific user by passing the users id.
* Role->Admin
* param :id=user id of user to be deleted
:::
## Wishlist Endpoints

::: warning GET
- [https://api.arialshop.com/api/wishlists/my](https://api.arialshop.com/api/wishlists/my)
> Get my wishlist (loggedin users product wishlist).
* Role->User
:::

::: warning GET
- [https://api.arialshop.com/api/wishlists/](https://api.arialshop.com/api/wishlists/)
> Get all wishlists for Manager
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/wishlists/:id](https://api.arialshop.com/api/wishlists/:id)
> View details of a wishlist by passing wishlist id.
* param :id=document id of wishlist to be viewed
* Role->Manager
:::

::: warning GET
- [https://api.arialshop.com/api/wishlists/product/:pid/:vid](https://api.arialshop.com/api/wishlists/product/:pid/:vid)
> Find whether the specified product and variant combination is there in the logged in users wishlist
* Role->User
:::

::: warning POST
- [https://api.arialshop.com/api/wishlists/](https://api.arialshop.com/api/wishlists/)
> Create(if not exist) or Remove(If exists) wishlist. Here required params are product id and variant id. Condition: User should be logged in 
:::

::: warning POST
- [https://api.arialshop.com/api/wishlists/add](https://api.arialshop.com/api/wishlists/add)
> Create(if not exist)  wishlist. Here required params are product id and variant id. Condition: User should be logged in 
:::

::: warning POST
- [https://api.arialshop.com/api/wishlists/remove](https://api.arialshop.com/api/wishlists/remove)
> Remove(If exists) wishlist. Here required params are product id and variant id. Condition: User should be logged in 
:::

::: warning PUT
- [https://api.arialshop.com/api/wishlists/:id](https://api.arialshop.com/api/wishlists/:id)
> Manager can change wishlist by passing wishlist id.
* Role->Manager
* param :id=document id of wislist to be updated
:::

::: warning PATCH
- [https://api.arialshop.com/api/wishlists/:id](https://api.arialshop.com/api/wishlists/:id)
> Manager can change the wishlist document by passing wishlist id.
* Role->Manager
* param :id=wishlist document id of wishlist to be updated
:::

::: warning DELETE
- [https://api.arialshop.com/api/wishlists/:id](https://api.arialshop.com/api/wishlists/:id)
> Manager can delete specific the wishlist by passing the wishlist id.
* Role->Manager
* param :id=wishlist id of wishlist to be deleted
:::

::: warning GET
- [https://api.arialshop.com/api/wishlists/my/:id](https://api.arialshop.com/api/wishlists/my/:id)
> Get details of my wishlist be passing the wishlist id
* Role->User
* :id->Wishlist
:::