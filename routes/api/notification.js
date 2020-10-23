const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.post("/sendToAll", (req, res) => {
  var notification = {
    'tittle': "Tittle of Notification",
    'text': "test",
  };
  var fcm_tokens = [
    "d1Ywa7RtJIM:d1Ywa7RtJIM:APA91bGClcpzQI0I5FAkcGQe8vNx_ba7BO6wuz0ECRs90tFob3qZRyLUCwqZ_Epio1W0GCqTeqjug7CE77LBSjb624oFgwsbt58sJlnKwefkAXw5_ldexv1Q3OjzwbRbZgUB9AI7ZBFu"
  ];
  var notification_body = {
    'to' : '/topics/topic',
    'notification': notification,
    // 'registration_ids': fcm_tokens,
  };
  fetch('https://fcm.googleapis.com/fcm/send', {
    'method': 'POST',
    'headers': {
      'Authorization':
        'key='
        +'AAAAZ_iKcfc:AAAAZ_iKcfc:APA91bGMx_iCnUwiTaH5zmUIs27DyK6eqClO2S9nOYIN0Z3_1vQaAL9kJeHLZbeySgONVR2IjvyhrofSddEoutzJhRc_rk_OJ87IRDxfZqp96Qbu9p0wwmjIRG5EoAV3N1wu5ncF_xNL',
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(notification_body),
  })
    .then((result) => {
      console.log(result)
      res.status(200).send('Notification send')
    })
    .catch((err) => {
      res.status(400).send('Notification not send')
      console.log(err);
    });
});

module.exports = router;
