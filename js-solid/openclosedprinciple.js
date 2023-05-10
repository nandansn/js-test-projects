/**
 *  the principle states that the solution/code you write should always be Open for extensions but Closed for modifications.
 * 
 * code/program you write for a problem statement, be it a class, methods or functions, should be designed in such that, to change their behaviour, it is not necessary to change their source code/reprogram.

    If you get additional functionality, we need to add that additional functionality without changing/reprogramming the existing source code.
 */

/**
* Simple  Notification System Class Example for 
* violating OCP
*
* STUPID Approach of Programming
*
*/

class NotificationSystem {

    // Method used to send notification
     sendNotification = (content:any,user:any,notificationType:any):void => {
   
       if( notificationType == "email" ){
         sendMail(content,user); 
       }
   
       if( notificationType == "pushNotification" ){
         sendPushNotification(content,user); 
       }
   
       if( notificationType == "desktopNotification"  ){
         sendDesktopNotification(content,user); 
       }
   
     }
   
   }

   /**
    * This can implemented ensuring the SOLID principle not being violated, as shown below,
    */

   class NotificationSystem {

    sendMobileNotification() {}

    sendDesktopNotification() {} 

    sendEmail() {}

    sendEmailwithMobileNotification() {
      this.sendEmail();
      this.sendMobileNotification()
    }
}

/**
 * As you see in the above example, when you needed another requirement where you had to send both email and mobile notification, all I did was adding another function sendEmailwithMobileNotification() without changing the implementation of previous existing functions. That’s how simple it is, making an extension of features.
 */

