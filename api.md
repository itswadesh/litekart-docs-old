---
title: Directory Structure
date: 2018-06-18 06:40:12
---

# API Documentation

## Address Endpoint

::: warning GET 
- [https://www.arialshop.com/api/addresses/my](https://www.arialshop.com/api/addresses/my)
>view details of a perticular user's address document.
 * Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/addresses/updateAllQ](https://www.arialshop.com/api/addresses/updateAllQ)
>view details of a updated address document managed by admin.
* Role->Admin
:::


::: warning GET
- [https://www.arialshop.com/api/addresses/](https://www.arialshop.com/api/addresses/)
>view details of a address document,managed by admin. 
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/addresses/:id](https://www.arialshop.com/api/addresses/:id)
>Users can view updated addresses.
* Role->User
* :id->address
:::

::: warning POST
- [https://www.arialshop.com/api/addresses/](https://www.arialshop.com/api/addresses/)
>User can create a new address document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/addresses/:id](https://www.arialshop.com/api/addresses/:id)
>User can change settings by passing address id.
* Role->User
* param :id=document id of address to be updated 
:::

::: warning PATCH
- [https://www.arialshop.com/api/addresses/:id](https://www.arialshop.com/api/addresses/:id)
>User can change the addresses details by passing address id.
* Role->User
* param :id=document id of address to be updated

:::

::: warning DELETE
- [https://www.arialshop.com/api/addresses/:id](https://www.arialshop.com/api/addresses/:id)
>User can delete specific address by passing the address id.
* Role->User
* param :id=address id of address to be deleted
:::
## Brand Endpoints

::: warning GET
- [https://www.arialshop.com/api/brand/my](https://www.arialshop.com/api/brand/my)
>view details of a user's selected brand document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/brand/updateAllQ](https://www.arialshop.com/api/brand/updateAllQ)
>view details of all updated brand document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/brand/](https://www.arialshop.com/api/brand/)
>view details of all brand .
:::

::: warning GET
- [https://www.arialshop.com/api/brand/:id](https://www.arialshop.com/api/brand/:id)
>view details of a brand document by passing brand id.
* param :id=Brand document id of a brand can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/brand/](https://www.arialshop.com/api/brand/)
>Manager can create a new brand document.
* Role->Manager
:::

::: warning PUT
- [https://www.arialshop.com/api/brand/:id](https://www.arialshop.com/api/brand/:id)
>Manager can change brand details by passing brand id.
* Role->Manager
* param :id=document id of brand to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/brand/:id](https://www.arialshop.com/api/brand/:id)
Manager can change the brand details by passing brand id.
* Role->Manager
* param :id=document id of brand to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/brand/:id](https://www.arialshop.com/api/brand/:id)
>Admin can delete specific brand by passing the brand id.
* Role->Admin
* param :id=document id of settings to be deleted
:::
## Cart Endpoints

::: warning GET
- [https://www.arialshop.com/api/cart/my](https://www.arialshop.com/api/cart/my)
>view details of user's selected cart document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/cart/updateAllQ](https://www.arialshop.com/api/cart/updateAllQ)
>view details of all updated cart document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/cart/](https://www.arialshop.com/api/cart/)
>view details of all cart document.
:::

::: warning GET
- [https://www.arialshop.com/api/cart/:id](https://www.arialshop.com/api/cart/:id)
>view details of a cart document by passing cart id.
* param:id->document id of a cart can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/cart/](https://www.arialshop.com/api/cart/)
>User can create a new cart document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/cart/:id](https://www.arialshop.com/api/cart/:id)
>User can change the cart by passing cart id.
* Role->User
* param :id=document id of cart to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/cart/:id](https://www.arialshop.com/api/cart/:id)
>User can change the cart by passing the cart id.
* Role->User
* param :id=document id of cart to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/cart/:id](https://www.arialshop.com/api/cart/:id)
>User can delete specific cart details by passing the cart id.
* Role->User
*  param :id=cart id of cart to be deleted

:::

## Category Endpoints

::: warning GET
- [https://www.arialshop.com/api/category/my](https://www.arialshop.com/api/category/my)
> view details of a user's selected document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/category/updateAllQ](https://www.arialshop.com/api/category/updateAllQ)
>view details of updated all category document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/category/](https://www.arialshop.com/api/category/)
>view details of all category document.
:::

::: warning GET
- [https://www.arialshop.com/api/category/:id](https://www.arialshop.com/api/category/:id)
>view details of a category document by passing category id.
* param :id=document id of category can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/category/details](https://www.arialshop.com/api/category/details)
>view details of all category document.
:::

::: warning GET
- [https://www.arialshop.com/api/category/path/:category](https://www.arialshop.com/api/category/path/:category)
>view details of all category path document by passing category id.
:::

::: warning GET
- [https://www.arialshop.com/api/category/all](https://www.arialshop.com/api/category/all)
>view details of all category document. 
:::

::: warning GET
- [https://www.arialshop.com/api/category/parents](https://www.arialshop.com/api/category/parents)
>
:::

::: warning GET
- [https://www.arialshop.com/api/category/loaded](https://www.arialshop.com/api/category/loaded)
>view details of new updated document.
:::

::: warning GET
- [https://www.arialshop.com/api/category/blind](https://www.arialshop.com/api/category/blind)
>
:::

::: warning POST
- [https://www.arialshop.com/api/category/](https://www.arialshop.com/api/category/)
>Manager can create a new category document.
* Role->Manager
:::

::: warning PUT
- [https://www.arialshop.com/api/category/](https://www.arialshop.com/api/category/)
>Manager can change category .
* Role->Manager

:::

::: warning PATCH
- [https://www.arialshop.com/api/category/child](https://www.arialshop.com/api/category/child)
>
* Role->Vender
:::

::: warning PATCH
- [https://www.arialshop.com/api/category/:id](https://www.arialshop.com/api/category/:id)
>Manager can change the category document by passing category id.
* Role->Manager
* param :id=document id of category to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/category/:id/:pid](https://www.arialshop.com/api/category/:id/:pid)
>Manager can delete specific settings by passing the category id.
* Role->Manager
* param :id=document id of category to be deleted
:::

::: warning DELETE
- [https://www.arialshop.com/api/category/:id](https://www.arialshop.com/api/category/:id)
>Manager can delete specific category by passing the category id.
* Role->Manager
* param :id=category id of category to be deleted
:::

## Contact Endpoints

::: warning GET
- [https://www.arialshop.com/api/contact/my](https://www.arialshop.com/api/contact/my)
> view details of a perticular user's contact document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/contact/updateAllQ](https://www.arialshop.com/api/contact/updateAllQ)
>view details of all updated contact document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/contact/](https://www.arialshop.com/api/contact/)
>view details of a contact document managed by Manager.
* Role->Manager
:::

::: warning GET
- [https://www.arialshop.com/api/contact/:id](https://www.arialshop.com/api/contact/:id)
>view details of a contact document by passing contact id.
* Role->Manager
* param :id=contact document id of a contact can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/contact/](https://www.arialshop.com/api/contact/)
>Manager can create a new contact document.
* Role->Manager
:::

::: warning PUT
- [https://www.arialshop.com/api/contact/:id](https://www.arialshop.com/api/contact/:id)
>Manager can change contacts by passing contact id.
* Role->Manager
* param :id=document id of contact to be updated
:::



::: warning PATCH
- [https://www.arialshop.com/api/contact/:id](https://www.arialshop.com/api/contact/:id)
>User can change the contact document by passing contact id.
* Role->User
* param :id=document id of contact to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/contact/:id](https://www.arialshop.com/api/contact/:id)
>Admin can delete contact details of contact by passing the contact id.
 * param :id=document id of settings to be deleted
:::
## Coupon Endpoints

::: warning GET
- [https://www.arialshop.com/api/coupon/my](https://www.arialshop.com/api/coupon/my)
> view details of a coupon document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/coupon/updateAllQ](https://www.arialshop.com/api/coupon/updateAllQ)
>view details of all updated coupon document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/coupon/](https://www.arialshop.com/api/coupon/)
>view details of a coupon document.
:::

::: warning GET
- [https://www.arialshop.com/api/coupon/:id](https://www.arialshop.com/api/coupon/:id)
>view details of a coupon document by passing coupon id.
* param:id->coupon document id of a coupon can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/coupon/](https://www.arialshop.com/api/coupon/)
>Admin can create a new coupon document.
* Role->Admin
:::

::: warning PUT
- [https://www.arialshop.com/api/coupon/:id](https://www.arialshop.com/api/coupon/:id)
>Admin can change coupon by passing coupon id.
* Role->Admin
* param :id=document id of coupon to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/coupon/:id](https://www.arialshop.com/api/coupon/:id)
>Admin can change the coupon  by passing coupon id.  
* Role->Admin
* param :id=document id of coupon to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/coupon/:id](https://www.arialshop.com/api/coupon/:id)
>Admin can delete specific coupon by passing the coupon id.
* Role->Admin
* param :id=coupon id of coupon to be deleted
:::
## Customer Endpoints

::: warning GET
- [https://www.arialshop.com/api/customer/my](https://www.arialshop.com/api/customer/my)
> view details of a customer document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/customer/updateAllQ](https://www.arialshop.com/api/customer/updateAllQ)
>view details of a  requested updated customer document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/customer/](https://www.arialshop.com/api/customer/)
>view details of a customer document.
:::

::: warning GET
- [https://www.arialshop.com/api/customer/:id](https://www.arialshop.com/api/customer/:id)
>view details of a customer document by passing customer id.
* param:id->customer document id of a customer can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/customer/](https://www.arialshop.com/api/customer/)
>User can create a new customer document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/customer/:id](https://www.arialshop.com/api/customer/:id)
>User can change customer details by passing customer id.
* Role->User
* param :id=document id of customer to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/customer/:id](https://www.arialshop.com/api/customer/:id)
>User can change the customer details by passing customer id.
* Role->User
* param :id=document id of customer to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/customer/:id](https://www.arialshop.com/api/customer/:id)
>User can delete specific customer details by passing the customer id.
* Role->User
* param :id=customer id of customer to be deleted
:::

## Email Endpoints

::: warning DETAILS
- [https://www.arialshop.com/api/email/my](https://www.arialshop.com/api/email/my)
>view details of a email document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/email/updateAllQ](https://www.arialshop.com/api/email/updateAllQ)
>view details of a updated email document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/email/](https://www.arialshop.com/api/email/)
>view details of a email document.
:::

::: warning GET
- [https://www.arialshop.com/api/email/:id](https://www.arialshop.com/api/email/:id)
>view details of a email document by passing email id.
* param:id->email id document of a email can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/email/](https://www.arialshop.com/api/email/)
>User can create a new email .
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/email/:id](https://www.arialshop.com/api/email/:id)
>User can change the email by passing email id.
* Role->User
* param :id=document id of email to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/email/:id](https://www.arialshop.com/api/email/:id)
>User can change the email document by passing email id.
* Role->User
* param :id=document id of email to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/email/:id](https://www.arialshop.com/api/email/:id)
>User can delete specific emails by passing the email id.
* Role->User
* param :id=email id of emails to be deleted
:::

## Features Endpoints

::: warning GET
- [https://www.arialshop.com/api/feature/my](https://www.arialshop.com/api/feature/my)
>view details of a feature document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/feature/updateAllQ](https://www.arialshop.com/api/feature/updateAllQ)
>view details of a updated feature document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/feature/](https://www.arialshop.com/api/feature/)
>view details of all feature document.
:::

::: warning GET
- [https://www.arialshop.com/api/feature/:id](https://www.arialshop.com/api/feature/:id)
>view details of a feature document by passing feature id.
* param:id->feature document id of a feature can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/feature/group](https://www.arialshop.com/api/feature/group)
>view details of a feature's group document.
:::

::: warning GET
- [https://www.arialshop.com/api/feature/group/:id](https://www.arialshop.com/api/feature/group/:id)
>view details of a feature document by passing feature id.
* param :id->feature document id of a feature can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/feature/](https://www.arialshop.com/api/feature/)
>Manager can create a new feature document.
* Role->Manager
:::

::: warning PUT
- [https://www.arialshop.com/api/feature/:id](https://www.arialshop.com/api/feature/:id)
>Manager can change feature by passing feature id.
* Role->Manager
* param :id=document id of feature to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/feature/:id](https://www.arialshop.com/api/feature/:id)
>Manager can change the feature document by passing feature id.
* Role->Manager
* param :id=document id of feature to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/feature/:id](https://www.arialshop.com/api/feature/:id)
>Manager can delete specific features by passing the feature id.
* Role->Manager
* param :id=feature id of features to be deleted
:::

## Feedback Endpoints

::: warning GET
- [https://www.arialshop.com/api/feedback/my](https://www.arialshop.com/api/feedback/my)
>view details of a user's feedback .
* Role->user
:::


::: warning GET
- [https://www.arialshop.com/api/feedback/](https://www.arialshop.com/api/feedback/)
>view details of a feedback document.
:::

::: warning GET
- [https://www.arialshop.com/api/feedback/:id](https://www.arialshop.com/api/feedback/:id)
>view details of a feedback document by passing feedback id.
* param :id->feedback id of a feedback can be viewed

::: warning POST
- [https://www.arialshop.com/api/feedback/](https://www.arialshop.com/api/feedback/)
>Admin can create a new feedback document.
* Role->Admin
:::

::: warning PUT
- [https://www.arialshop.com/api/feedback/:id](https://www.arialshop.com/api/feedback/:id)
>Admin can change feedback by passing feedback id.
* Role->Admin
* param :id=document id of feedback to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/feedback/:id](https://www.arialshop.com/api/feedback/:id)
>Admin can change the feedback document by passing feedback id.
* Role->Admin
* param :id=document id of feedback to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/feedback/:id](https://www.arialshop.com/api/feedback/:id)
>Admin can delete the specific feedback by passing the feedback id.
* Role->Admin
* param :id=feedback id of feedback to be deleted
:::
## Media Endpoints

::: warning GET
- [https://www.arialshop.com/api/media/my](https://www.arialshop.com/api/media/my)
>view details of a media document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/media/updateAllQ](https://www.arialshop.com/api/media/updateAllQ)
>view details of a updated media document managed by admin.
* Role->Admin
:::

::: warning POST
 - [https://www.arialshop.com/api/media/](https://www.arialshop.com/api/media/)
>User can create a new media document.
* Role->User
:::

::: warning POST
- [https://www.arialshop.com/api/media/banner](https://www.arialshop.com/api/media/banner)
>User can create a new media banner document.
* Role->User
:::

::: warning POST
- [https://www.arialshop.com/api/media/:name](https://www.arialshop.com/api/media/:name)
>Admin can create a new media banner document by passing the name.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/media/](https://www.arialshop.com/api/media/)
>view details of a media document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/media/:id](https://www.arialshop.com/api/media/:id)
>view details of a media document by passing media id.
* Role->User
* param :id->media document id of a media can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/media/](https://www.arialshop.com/api/media/)
>User can create a new media document.

* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/media/:id](https://www.arialshop.com/api/media/:id)
>User can change  the media details by passing media id.
* Role->User
* param :id=document id of media to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/media/:id](https://www.arialshop.com/api/media/:id)
> User can change the media document by passing media id.
* Role->User
* param :id=document id of media to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/media/:id](https://www.arialshop.com/api/media/:id)
>User can delete the specific media by passing the media id.
* Role->User
* param :id=media id of media to be deleted
:::
## Order Endpoints

::: warning GET
- [https://www.arialshop.com/api/order/my](https://www.arialshop.com/api/order/my)
>view details of a user's order document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/order/total](https://www.arialshop.com/api/order/total)
>view details of a total order document.
:::

::: warning GET
- [https://www.arialshop.com/api/order/statusSummary](https://www.arialshop.com/api/order/statusSummary)
>view details of status summary document of a order.
:::

::: warning GET
- [https://www.arialshop.com/api/order/newActivities](https://www.arialshop.com/api/order/newActivities)
>view details of newactivities document of a order.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/order/](https://www.arialshop.com/api/order/)
> view details of a order document..
* Role->Vendor
:::

::: warning GET
- [https://www.arialshop.com/api/order/pending](https://www.arialshop.com/api/order/pending)
>view details of a pending order document.
* Role->Shipper
:::

::: warning GET
- [https://www.arialshop.com/api/order/shipped](https://www.arialshop.com/api/order/shipped)
>view details of a shipped order document.
* Role->vendor
:::

::: warning GET
- [https://www.arialshop.com/api/order/cancelled](https://www.arialshop.com/api/order/cancelled)
>view details of a cancelled order document.
* Role->Vendor
:::

::: warning GET
- [https://www.arialshop.com/api/order/delivered](https://www.arialshop.com/api/order/delivered)
>view details of a delivered order document.
* Role->Vendor
:::

::: warning GET
- [https://www.arialshop.com/api/order/dailySales](https://www.arialshop.com/api/order/dailySales)
>view details of a dailysales document of a order.
:::

::: warning GET
- [https://www.arialshop.com/api/order/:id](https://www.arialshop.com/api/order/:id)
>view details of a ordered document by passing order id.
* Role->Vendor
* param :id=page document id of a page can be viewed.
:::

::: warning POST
- [https://www.arialshop.com/api/order/](https://www.arialshop.com/api/order/)
>User can create a new order document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/order/:id](https://www.arialshop.com/api/order/:id)
>Vendor can change the order by passing order id.
* Role->Vendor
* param :id=document id of order to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/order/:id](https://www.arialshop.com/api/order/:id)
>Vendor can change the order details by passing order id.
* Role->Vendor
* param :id=document id of order to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/order/:id](https://www.arialshop.com/api/order/:id)
>Admin can delete  the specific order details  by passing the order id. 
* Role->Admin
* param :id=order id of order to be deleted
:::
## Order History Endpoints

::: warning GET
- [https://www.arialshop.com/api/orderHistory/my](https://www.arialshop.com/api/orderHistory/my)
  >view details of a orderHistory document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/orderHistory/updateAllQ](https://www.arialshop.com/api/orderHistory/updateAllQ)
>view details of a Updated orderHistory document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/orderHistory/](https://www.arialshop.com/api/orderHistory/)
>view details of a orderHistory document.
:::

::: warning GET
- [https://www.arialshop.com/api/orderHistory/:id](https://www.arialshop.com/api/orderHistory/:id)
>view details of a orderHistory document by passing orderHistory id.
*  param :id->order history document id of a orderHistory can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/orderHistory/](https://www.arialshop.com/api/orderHistory/)
>User can create a new orderHistory document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/orderHistory/:id](https://www.arialshop.com/api/orderHistory/:id)
>User can change OrderHistory by passing orderHistory id.
* Role->User
* param :id=document id of orderHistory to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/orderHistory/:id](https://www.arialshop.com/api/orderHistory/:id)
>User can change the orderHistory document by passing orderHistory id.
* Role->User
* param :id=document id of orderHistory to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/orderHistory/:id](https://www.arialshop.com/api/orderHistory/:id)
>User can delete  the specific order history by passing the order history id.
* Role->User
* param :id=orderHistory id of orderHistory to be deleted
:::
## Page Endpoints

::: warning GET
- [https://www.arialshop.com/api/page/my](https://www.arialshop.com/api/page/my)
>view details of a page document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/page/updateAllQ](https://www.arialshop.com/api/page/updateAllQ)
>view details of a updated page document managed by Admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/page/](https://www.arialshop.com/api/page/)
>view details of a page document.
:::

::: warning GET
- [https://www.arialshop.com/api/page/:id](https://www.arialshop.com/api/page/:id)
>view details of a page document by passing page id.
* param id=page document id of a page can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/page/](https://www.arialshop.com/api/page/)
>User can create a new page document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/page/:id](https://www.arialshop.com/api/page/:id)
>User can change the page by passing page id.
* Role->User
* param :id=document id of page to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/page/:id](https://www.arialshop.com/api/page/:id)
>User can change the Page document by passing Page id.
* Role->User
* param :id=document id of page to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/page/:id](https://www.arialshop.com/api/page/:id)
>User can delete the specific page by passing the page id.
* Role->User
* param :id=page id of page to be deleted
:::
## Pay Endpoints

::: warning GET
- [https://www.arialshop.com/api/pay/paypal](https://www.arialshop.com/api/pay/paypal)
>view details of a PayPal pay document.
* Controller->PayPal
:::

::: warning GET
- [https://www.arialshop.com/api/pay/instamojo](https://www.arialshop.com/api/pay/instamojo)
>view details of a  Instamojo pay document.
* Controller->instamojo
:::

::: warning POST
- [https://www.arialshop.com/api/pay/stripe](https://www.arialshop.com/api/pay/stripe)
>view details of a stripe pay document.
* Controller->stripe
:::

::: warning GET
- [https://www.arialshop.com/api/pay/success](https://www.arialshop.com/api/pay/success)
>view details of a Success pay document.
* Controller->Success
:::

::: warning GET
- [https://www.arialshop.com/api/pay/process](https://www.arialshop.com/api/pay/process)
>view details of  process of pay document.
* Controller->process
:::

::: warning GET
- [https://www.arialshop.com/api/pay/processInstamojo](https://www.arialshop.com/api/pay/processInstamojo)
>view details of a pay document of instamojo.
* Controller->processInstamojo
:::

::: warning PATCH
- [https://www.arialshop.com/api/pay/cancel](https://www.arialshop.com/api/pay/cancel)
> Cancel the pay document.

:::

## Payment Method Endpoints

::: warning GET
- [https://www.arialshop.com/api/payment-method/my](https://www.arialshop.com/api/payment-method/my)
>view details of a payment-method document.

:::

::: warning GET
- [https://www.arialshop.com/api/payment-method/updateAllQ](https://www.arialshop.com/api/payment-method/updateAllQ)
>view details of a updated payment-method document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/payment-method/](https://www.arialshop.com/api/payment-method/)
>view details of a payment-method document.

:::

::: warning GET
- [https://www.arialshop.com/api/payment-method/active](https://www.arialshop.com/api/payment-method/active)
>view details of a active payment-method document.
* Role->User
:::

::: warning POST
- [https://www.arialshop.com/api/payment-method/](https://www.arialshop.com/api/payment-method/)
>Admin can create a new payment-method document.
* Role->Admin
:::

::: warning PUT
- [https://www.arialshop.com/api/payment-method/:id](https://www.arialshop.com/api/payment-method/:id)
>Admin can change the payment-method by passing payment-method id.
* Role->Admin
* param :id=document id of payment-method to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/payment-method/:id](https://www.arialshop.com/api/payment-method/:id)
>admin can change the payment-method document by passing payment-method id.
* Role->Admin
* param :id=document id of payment-method to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/payment-method/:id](https://www.arialshop.com/api/payment-method/:id)
>Admin can delete the specific payment-method by passing the payment-method id.
* Role->Admin
* param :id=payment-method id of payment-method to be deleted
:::
## Product Endpoints

::: warning GET
- [https://www.arialshop.com/api/product/my](https://www.arialshop.com/api/product/my)
>view details of a product document.
* Role->Vendor
:::

::: warning GET
- [https://www.arialshop.com/api/product/updateAllQ](https://www.arialshop.com/api/product/updateAllQ)
>view details of a updated products document managed by admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/product/](https://www.arialshop.com/api/product/)
>view details of a product document.
* Controller->All
:::

::: warning GET
- [https://www.arialshop.com/api/product/:id](https://www.arialshop.com/api/product/:id)
>view details of a product document by passing product id.
* param :id->product document id of a product can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/product/count](https://www.arialshop.com/api/product/count)
>view details of a product document.
:::

::: warning GET
- [https://www.arialshop.com/api/product/priceRange](https://www.arialshop.com/api/product/priceRange)
>view details of a pricerange document of a product.
:::

::: warning GET
- [https://www.arialshop.com/api/product/search-brand](https://www.arialshop.com/api/product/search-brand)
>view details of a search brand products document.
:::

::: warning GET
- [https://www.arialshop.com/api/product/deep/:id](https://www.arialshop.com/api/product/deep/:id)
>view details of a product document by passing id.
* param :id->product document id of product can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/product/search/:q](https://www.arialshop.com/api/product/search/:q)
>view details of a searched product document by passing query.
:::

::: warning POST
- [https://www.arialshop.com/api/product/](https://www.arialshop.com/api/product/)
>Vendor can create a new product document.
* Role->Vendor
:::

::: warning PUT
- [https://www.arialshop.com/api/product/:id](https://www.arialshop.com/api/product/:id)
> Vendor can change the product by passing product id.
* Role->Vendor
* param :id=document id of product to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/product/:id](https://www.arialshop.com/api/product/:id)
>Vendor can change the product document by passing product id.
* Role->Vendor
* param :id=document id of product to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/product/:id](https://www.arialshop.com/api/product/:id)
>Vendor can delete specific product by passing the product id.
* Role->Vendor
* param :id=product id of product to be deleted
:::
## Review Endpoints

::: warning GET
- [https://www.arialshop.com/api/review/my](https://www.arialshop.com/api/review/my)
>view details of a user's own review document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/review/updateAllQ](https://www.arialshop.com/api/review/updateAllQ)
>view details of a updated review document managed by Admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/review/](https://www.arialshop.com/api/review/)
>view details of a review document.
:::

::: warning GET
- [https://www.arialshop.com/api/review/:id](https://www.arialshop.com/api/review/:id)
>view details of a review document by passing review id.
* param :id->review document id of review can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/review/group](https://www.arialshop.com/api/review/group)
>view details of a review document.
:::

::: warning GET
- [https://www.arialshop.com/api/review/product/:id](https://www.arialshop.com/api/review/product/:id)
>view details of a review product document by passing review id.
* param :id=review document id of review can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/review/my/product/:id](https://www.arialshop.com/api/review/my/product:id)
>view details of a reviewed product document by passing review id.
* Role->User
* param :id=document id of review can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/review/](https://www.arialshop.com/api/review/)
>User can create a new review document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/review/:id](https://www.arialshop.com/api/review/:id)
>Manager can change review by passing review id.
* Role->Manager
* param :id=document id of review to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/review/:id](https://www.arialshop.com/api/review/:id)
>Manager can change the review document by passing  review document id.
* Role->Manager
* param :id=document id of review to be updated
:::

::: warning PUT
- [https://www.arialshop.com/api/review/vote/:count/:id](https://www.arialshop.com/api/review/vote/:count/:id)
>User can review the vote by passing the vote id.
* Role->User
param :id=document id of settings to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/review/:id](https://www.arialshop.com/api/review/:id)
>User can delete the specific review by passing the review id.
* Role->User
* param :id=review id of review to be deleted
:::

## Setting Endpoints

::: warning GET
- [https://www.arialshop.com/api/settings/admin](https://www.arialshop.com/api/settings/admin)
>List all settings for admin to manage.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/settings/](https://www.arialshop.com/api/settings/)
>Query all the settings for public. This excludes settings id and metadata.
* Controller->Public
:::
 
::: warning GET
- [https://www.arialshop.com/api/settings/:id](https://www.arialshop.com/api/settings/:id)
>view details of a setting document.
>Query a single settings
* :id->settings
:::

::: warning POST
- [https://www.arialshop.com/api/settings/](https://www.arialshop.com/api/settings/)
>Admin can create a new settings document.
* Role->admin
:::

::: warning PUT
- [https://www.arialshop.com/api/settings/:id](https://www.arialshop.com/api/settings/:id)
>Manager can change settings by passing settings id.
* Role->Manager
* param :id=document id of settings to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/settings/:id](https://www.arialshop.com/api/settings/:id)
>Manager can change the settings document by passing document id.
* Role->Manager
* param :id=document id of settings to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/settings/:id](https://www.arialshop.com/api/settings/:id)
>Admin can delete specific settings by passing the settings id.
* Role->Admin
* param :id=document id of settings to be deleted
:::
## Shipping Endpoints

::: warning GET
- [https://www.arialshop.com/api/shipping/my](https://www.arialshop.com/api/shipping/my)
>view details of a user's shipping document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/shipping/updateAllQ](https://www.arialshop.com/api/shipping/updateAllQ)
>view details of a updated shipping document managed by Admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/shipping/](https://www.arialshop.com/api/shipping/)
>view details of a shipping document.
:::

::: warning GET
- [https://www.arialshop.com/api/shipping/:id](https://www.arialshop.com/api/shipping/:id)
>view details of a shipping document by passing shipping id.
* Role->Manager
* param :id=document id of shipping can be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/shipping/best](https://www.arialshop.com/api/shipping/best)
>view details of a best shipping document.
:::

::: warning POST
- [https://www.arialshop.com/api/shipping/](https://www.arialshop.com/api/shipping/)
>Manager can create a new shipping document.
* Role->Manager
:::

::: warning PUT
- [https://www.arialshop.com/api/shipping/:id](https://www.arialshop.com/api/shipping/:id)
>Manager can change shipping by passing shipping id.
* Role->Manager
* param :id=document id of shipping to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/shipping/:id](https://www.arialshop.com/api/shipping/:id)
>>Manager can change shipping details by passing shipping id.
* Role->Manager
* param :id=document id of shipping to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/shipping/:id](https://www.arialshop.com/api/shipping/:id)
>Manager can delete the specific shipping details by passing the shipping id.
* Role->manager
* param :id=shipping id of shipping to be deleted
:::
## Summary Endpoints

::: warning GET
- [https://www.arialshop.com/api/summary/pending](https://www.arialshop.com/api/summary/pending)
>view details of a pending summary document.
:::

::: warning GET
- [https://www.arialshop.com/api/summary/shipped](https://www.arialshop.com/api/summary/shipped)
>view details of a shipped summary document.
:::

::: warning GET
- [https://www.arialshop.com/api/summary/cancelled](https://www.arialshop.com/api/summary/cancelled)
>view details of a cancelled summmary document.
:::

::: warning GET
- [https://www.arialshop.com/api/summary/delivered](https://www.arialshop.com/api/summary/delivered)
>view details of a delivered summary document.
:::

## Upload Endpoints

::: warning GET
- [https://www.arialshop.com/api/upload/my](https://www.arialshop.com/api/upload/my)
>view details of a uploaded document.
* Role->User
:::


::: warning GET
- [https://www.arialshop.com/api/upload/](https://www.arialshop.com/api/upload/)
>view details of a uploaded document.
:::

::: warning GET
- [https://www.arialshop.com/api/upload/:id](https://www.arialshop.com/api/upload/:id)
>view details of a uploaded document.
* Role->User
* param :id=document id of upload can be viewed
:::

::: warning POST
- [https://www.arialshop.com/api/upload/](https://www.arialshop.com/api/upload/)
>User can create a new upload document.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/upload/:id](https://www.arialshop.com/api/upload/:id)
>Manager can change upload details by passing upload id.
* param :id=document id of upload to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/upload/:id](https://www.arialshop.com/api/upload/:id)
>User can change the upload document by passing upload id.
* Role->User
* param :id=document id of upload to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/upload/:id](https://www.arialshop.com/api/upload/:id)
>Admin can delete specific uploaded details by passing the upload id.
* Role->Admin
* param :id=upload id of upload to be deleted
:::
## User Endpoints

::: warning GET
- [https://www.arialshop.com/api/user/me](https://www.arialshop.com/api/user/me)
>view details of a user document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/user/updateAllQ](https://www.arialshop.com/api/user/updateAllQ)
>view details of a updated users  document ,that would be managed by Admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/user/](https://www.arialshop.com/api/user/)
>view details of a user document.
* Role->User,Vendor,Manager,Admin
:::

::: warning GET
- [https://www.arialshop.com/api/user/:id](https://www.arialshop.com/api/user/:id)
>view details of a user document by passing user id.
* Role->User
* param :id=document id of users can be viewed.
:::

::: warning GET
- [https://www.arialshop.com/api/user/users](https://www.arialshop.com/api/user/users)
>view details of a User document.That would be managed by manager.
* Role->Manager
:::

::: warning GET
- [https://www.arialshop.com/api/user/phone/:phone](https://www.arialshop.com/api/user/phone/:phone)
>view details of a user's phone document by passing phone parameter .
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/user/search/:q](https://www.arialshop.com/api/user/search/:q)
>view details of a user searched product document by passing query.
:::

::: warning PUT
- [https://www.arialshop.com/api/user/password](https://www.arialshop.com/api/user/password)
>User can change  the user password settings.
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/user/profile](https://www.arialshop.com/api/user/profile)
>User can change User profile. 
* Role->User
:::

::: warning PUT
- [https://www.arialshop.com/api/user/:id](https://www.arialshop.com/api/user/:id)
>Manager can change user details by passing user id.
* param :id=document id of user to be updated
:::

::: warning POST
- [https://www.arialshop.com/api/user/](https://www.arialshop.com/api/user/)
> Create a new User document.
:::

::: warning POST
- [https://www.arialshop.com/api/user/sendOtp](https://www.arialshop.com/api/user/sendOtp)
>Admin can create a new user's sendOtp document.
:::

::: warning POST
- [https://www.arialshop.com/api/user/forgot](https://www.arialshop.com/api/user/forgot)
>Create a new User's Forgot password document.
:::

::: warning POST
- [https://www.arialshop.com/api/user/reset/:token](https://www.arialshop.com/api/user/reset/:token)
>Create a new User reset password document by passing the token .
:::

::: warning DELETE
- [https://www.arialshop.com/api/user/:id](https://www.arialshop.com/api/user/:id)
>Admin can delete the specific user  by passing the users id.
* Role->Admin
* param :id=user id of user to be deleted
:::
## Wishlist Endpoints

::: warning GET
- [https://www.arialshop.com/api/wishlist/my](https://www.arialshop.com/api/wishlist/my)
>view details of a wishlist of user document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/wishlist/updateAllQ](https://www.arialshop.com/api/wishlist/updateAllQ)
>view details of a  updated wislist document managed by Admin.
* Role->Admin
:::

::: warning GET
- [https://www.arialshop.com/api/wishlist/](https://www.arialshop.com/api/wishlist/)
>view details of a wishlist document.
* Role->User
:::

::: warning GET
- [https://www.arialshop.com/api/wishlist/:id](https://www.arialshop.com/api/wishlist/:id)
>view details of a wishlist document by passing wishlist id.
* param :id=document id of wishlist to be viewed
:::

::: warning GET
- [https://www.arialshop.com/api/wishlist/product/:pid/:vid](https://www.arialshop.com/api/wishlist/product/:pid/:vid)
>view details of a Wishlist product document.
* Role->User
:::

::: warning POST
- [https://www.arialshop.com/api/wishlist/](https://www.arialshop.com/api/wishlist/)
>Create a new wishlist document.
:::

::: warning PUT
- [https://www.arialshop.com/api/wishlist/:id](https://www.arialshop.com/api/wishlist/:id)
>Manager can change wishlist by passing wishlist id.
* Role->Manager
* param :id=document id of wislist to be updated
:::

::: warning PATCH
- [https://www.arialshop.com/api/wishlist/:id](https://www.arialshop.com/api/wishlist/:id)
>Manager can change the wishlist document by passing wishlist id.
* Role->Manager
* param :id=wishlist document id of wishlist to be updated
:::

::: warning DELETE
- [https://www.arialshop.com/api/wishlist/:id](https://www.arialshop.com/api/wishlist/:id)
>Manager can delete specific the wishlist by passing the wishlist id.
* Role->Manager
* param :id=wishlist id of wishlist to be deleted
:::

::: warning GET
- [https://www.arialshop.com/api/wishlist/my/:id](https://www.arialshop.com/api/wishlist/my/:id)
>This query all present address from user
* Role->User
* :id->Wishlist
:::