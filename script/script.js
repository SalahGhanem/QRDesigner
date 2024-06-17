function generateQRCode() {
    var text = document.getElementById("link").value;
    var qrcodeContainer = document.getElementById("newQR");
    qrcodeContainer.innerHTML = ""; // يجب مسح أي محتوى سابق

    // إنشاء رمز الـ QR مع تحديد الحجم
    var qrCode = new QRCode(qrcodeContainer, {
        text: text,
        width: 200, // تعيين عرض رمز الـ QR
        height: 200 // تعيين ارتفاع رمز الـ QR
    });

    // تغيير حجم عنصر الـ QR بشكل مباشر
    var qrElement = qrcodeContainer.getElementsByTagName('img')[0]; // الحصول على العنصر img داخل الحاوية
    qrElement.style.width = '100%'; // تعيين عرض الصورة إلى 100%
    qrElement.style.height = 'auto'; // جعل الارتفاع يتكيف تلقائيا
}

function downloadQR() {
    var qrElement = document.getElementById('newQR').getElementsByTagName('img')[0];
    var url = qrElement.src;

    // إنشاء عنصر canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // تعيين عرض وارتفاع لل canvas
    canvas.width = qrElement.width;
    canvas.height = qrElement.height;

    // رسم الصورة على canvas
    context.drawImage(qrElement, 0, 0);

    // الحصول على بيانات URL لل canvas بصيغة PNG
    var imageData = canvas.toDataURL('image/png');

    // إنشاء رابط للتنزيل
    var link = document.createElement('a');
    link.href = imageData;
    link.download = 'qr_code.png'; // اسم الملف

    // إضافة الرابط إلى الصفحة والنقر عليه تلقائيا
    document.body.appendChild(link);
    link.click();

    // إزالة الرابط من الصفحة بعد التنزيل
    document.body.removeChild(link);
}
