---
title: Settings (Arialshop)
date: 2018-06-18 06:40:12
---
## Client Settings

Path: <em>config.js</em> 

### General Variables

``` js
export const typingTimeout = 700 // Used for searching e.g. search.vue
export const loadingTimeout = 300 // Used for showing the loading indicator at each page
export const snackTimer = 5000 // The amount of time  the snackbar should be visible
export const recordsPerScroll = '50' // At a time 50 records will be called from api unless specified explicitly
export const clearCart = true // Whether to clear the cart after order is placed. Useful while testing
export const host = 'http://localhost:9000' // Used at plugins/socketjs

```  

### List of order status for order management
``` js
export const orderStatuses = ['Payment Pending', 'Order Placed', 'Order Accepted', 'Order Executed', 'Shipped', 'Delivered', 'Not in Stock', 'Cancellation Requested', 'Cancelled']
```  
### List of payment status for order management
``` js
export const paymentStatuses = ['Pending', 'Cancelled', 'Paid']
```  

### Enabled payment methods for ecommerce
``` js
export const paymentMethods = ['PayPal', 'COD']
```  
### Regional settings
``` js
static country: any = { name: 'India', code: 'IN' };
  static currency: any = {
      symbol: '₹', //Required only for sort icons at homepage
      code: 'INR', // Shop currency
      paypal: 'USD',// Paypal currency code *** Please choose from https://developer.paypal.com/docs/classic/api/currency_codes/
      exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
  };
```  
  
### Menu for dashboad and header

``` js
export const menuItems = [
  { text: 'Dashboard', url: '/', icon: 'dashboard', authenticate: 'vendor', color: 'black', dashboard: true },
  { text: 'Products', url: '/products/search/', icon: 'store', authenticate: 'vendor', color: 'black', dashboard: true },
  { text: 'Manage Orders', url: '/orders', icon: 'history', authenticate: 'vendor', color: 'orange', dashboard: true },
  { text: 'Manage Reviews', url: '/reviews', icon: 'stars', authenticate: 'vendor', color: 'blue', dashboard: true },
  { text: 'Media Library', url: '/media', icon: 'perm_media', authenticate: 'vendor', color: 'teal', dashboard: true },
  { text: 'Brands', url: '/brands', icon: 'wb_auto', authenticate: 'manager', color: 'purple', dashboard: true },
  { text: 'Categories', url: '/categories', icon: 'view_comfy', authenticate: 'vendor', color: 'light-blue', dashboard: true },
  { text: 'Features', url: '/features', icon: 'check_circle', authenticate: 'vendor', color: 'brown', dashboard: true },
  { text: 'Coupons', url: '/coupons', icon: 'style', authenticate: 'admin', color: 'pink', dashboard: true },
  { text: 'Shippings', url: '/shippings', icon: 'local_shipping', authenticate: 'admin', color: 'red', dashboard: true },
  { text: 'Payments', url: '/payments', icon: 'payment', authenticate: 'admin', color: 'red', dashboard: true },
  { text: 'Users', url: '/users', icon: 'face', img: 'auth.png', authenticate: 'admin', color: 'lime', dashboard: true },
  { text: 'Profile', url: '/account/profile', authenticate: 'user', icon: 'person' },
  { text: 'Change Password', url: '/account/change-password', authenticate: 'user', icon: 'lock' },
  { text: "Settings", url: "/settings", authenticate: 'manager', icon: "settings" },
  { text: "Site Pages", url: "/pages", authenticate: 'manager', icon: "pages" },
  { text: 'Banners', url: '/banners', icon: 'burst_mode', authenticate: 'manager', color: 'yellow', dashboard: true },
  { icon: "help", text: "FAQ", url: "/faq" },
]
```  


## Server Settings
Path: <em>server/config.ts</em>

### Website Settings
``` js
export const seedDatabase = true; // Seeds database with some demo data when the database is empty
export const multishop = false;
export const host: string = 'http://localhost';
export const port: number = 9000;
export const ip: string = '0.0.0.0';
export const env: string = 'development';
  ```  

### User Roles
``` js
userRoles = ['user', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin
``` 
  
### Forgot Password Email Settings
``` js
export const forgotPasswordEmail = (body: any) => { // Expects email id and password reset token
  return {
    from: 'passwordreset@arialshop.com',
    to: body.email,
    subject: 'Arialshop Password Reset Request',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      process.env.DOMAIN + '/account/reset-password/' + body.token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };
};
  ``` 
### Reset Password Email Settings
``` js
export const resetPasswordEmail = (body: any) => { // Expects email id and name
  return {
    from: 'passwordreset@arialshop.com',
    to: body.email,
    subject: 'Arialshop Password Changed',
    text: 'Hello,\n\n' +
      'This is a confirmation that the password for your account ' + body.to + ' has just been changed.\n'
  };
};
  ``` 
  
### Order Placed Email Settings
``` js
export const orderPlacedEmail = (body: any) => { // Expects email id, orderNo, ...
  return {
    from: 'Arialshop <admin@arialshop.com>',
    to: body.to,
    subject: 'Order Placed Successfully',
    text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100
      + '\n\n Name: ' + body.address.recipient_name
      + '\n Address: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n Zip: ' + body.address.postal_code
  };
};
  ``` 
### Order Updated Email Settings
``` js
export const orderUpdatedEmail = (body: any) => {
  return {
    from: 'Arialshop <admin@arialshop.com>',
    to: body.to,
    subject: 'Your Order Status Updated',
    text: 'Order No: ' + body.orderNo
      + '\n Status: ' + body.status
      + '\n\n Payment Method: ' + body.payment_method
      + '\n\n Payment ID: ' + body.id
      + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100
      + '\n\n \n Name: ' + body.address.recipient_name
      + '\n Address: ' + body.address.line1
      + '\n City: ' + body.address.city
      + '\n State: ' + body.address.state
      + '\n Zip: ' + body.address.postal_code
  };
};
  ``` 

## Environment Settings

``` js
NODE_ENV=development // Change to production after deployment
proxy=http://localhost:9000
MONGODB_URI=mongodb://localhost:27017/arialshop-dev
SESSION_SECRET=arialshop-secret
  ``` 