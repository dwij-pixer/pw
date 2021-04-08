const push = require('web-push');

const vapidKeys = {
    publicKey: 'BKoPsNGnqd03F_tpDm5555nMZvlSKU2CJRTKK6o-xWcd7gVH1Ha6RfOCn41qljjBmuzJJrQhONNNuTlig5mhv6o',
    privateKey: 'XNjVJ8aIA6Lf4EHg59J2uk_ljx_2r69UOCg0kyDrfoU'    
} 

push.setVapidDetails('mailto: test@test.com', vapidKeys.privateKey, vapidKeys.publicKey);

let sub = {};
push.sendNotification(sub, 'text message');