// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /customers/{uid} {
//       allow read: if request.auth.uid == uid;
      
//       match /checkout_session/{id}{
//       allow read, write: if request.auth.uid == uid;
//       }
//       match /subscription/{id} {
//       allow read: if request.auth.uid == uid;
//       }
//       match /payments/{id} {
//       allow read: if request.auth.uid == uid;
//       }
//     }
    
//   }
//   function isMemberOfChat(chatId) {
//   return exists(/databases/$(database)/documents/chats/$(chatId)/members/$(request.auth.uid));
//   }

//   match /chats {
//   	allow read, write: if true;
//   }
  
//     match /chats/{chatId} {
//     // the chat document
//   	allow read, write: if true;
    
//     	match /members {
//       	allow read, write;
//       }
      
//       match /members/{userId} {
//       	allow read, write;
//   }
  
//   match /messages/{messageId}{
//   allow read;
//   allow write: if isMemberOfChat(chatId);
//   	}
//   }
// }