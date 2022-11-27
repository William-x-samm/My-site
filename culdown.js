   var url = "src/page.html"; // membuat url tujuan
            var count = 3; // membuat hitungan kedalam detik
            function countDown() {
                if (count > 0) {
                    count--;
                    var waktu = count + 1;
                    setTimeout("countDown()", 1000);
                } else {
                    window.location.replace(url);
                }
            }
            countDown();
