const push = require('web-push');

const vapidKeys = {
    publicKey: 'BKoPsNGnqd03F_tpDm5555nMZvlSKU2CJRTKK6o-xWcd7gVH1Ha6RfOCn41qljjBmuzJJrQhONNNuTlig5mhv6o',
    privateKey: 'XNjVJ8aIA6Lf4EHg59J2uk_ljx_2r69UOCg0kyDrfoU'    
} 

push.setVapidDetails('mailto: test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/egNNKp5Ny6g:APA91bF6CYQ93SgBYS7Ydo5ltZlWMggj6Ku351dzqCviOM1da3kfsgQicRCISSa3iZBisBRbRzCwRb3dTY7zlJ3SmvCy8mjXxr1Yk6Dd5Dm7_gVMve5giTkr1aEHNwj7HMGUHHFkYET2',
    expirationTime: null,
    keys:{
        p256dh: 'BLuSVUYct39SrvSMRY-NHaXLkdiI2YMPXahmXlhGe48wPp0hzEeQrfGCFeT2RxwigjF7n0i7mCIw0OjLWKpqOTM',
        auth: 'AbzfhyRQADF1-IxN_jzb8A'
    }
}
push.sendNotification(sub, 'text message');