var db = openDatabase('User', '1.0', 'Test User', 2 * 1024 * 1024);
var msg;

function loadDuLieu() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM USERS', [], function (tx, results) {
            var len = results.rows.length, i;

            for (i = 0; i < len; i++) {

                var article = document.querySelector("article");
                article.className = "background";

                var div = document.createElement("div");
                div.className = "news";

                var ten1 = document.createElement("p");
                ten1.className = "name";
                ten1.textContent = results.rows.item(i).name;

                var comment = document.createElement("p");
                comment.className = "status";
                comment.textContent = results.rows.item(i).status;

                article.appendChild(div);
                div.append(ten1);
                div.appendChild(comment);
            }
        }, null);
    });
}

function layDuLieu() {
    var ten = document.getElementById("ten").value;
    var binhLuan = document.getElementById("binhLuan").value;

    //neu chay 2 dong nay thi = delete from USERS
    // document.getElementsById("ten").value = "";
    // document.getElementById("binhLuan").value = "";

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (name, status)');
    });

    db.transaction(function (tx) {
        //tx.executeSql("delete from USERS");
        tx.executeSql('INSERT INTO USERS (name, status) VALUES ("' + ten + '", "' + binhLuan + '")');
    });

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM USERS', [], function (tx, results) {
            var len = results.rows.length, i;

            //for (i = 0; i < len; i++) {
                // var article = document.querySelector("article");
                // article.className = "background";

                // var div = document.querySelector("div");
                // div.className = "news";

                //article.removeChild(div);
            //}

            for (i = len - 1; i < len; i++) {

                var article = document.querySelector("article");
                article.className = "background";

                var div = document.createElement("div");
                div.className = "news";

                var ten1 = document.createElement("p");
                ten1.className = "name";
                ten1.textContent = results.rows.item(i).name;

                var comment = document.createElement("p");
                comment.className = "status";
                comment.textContent = results.rows.item(i).status;

                article.appendChild(div);
                div.append(ten1);
                div.appendChild(comment);
            }
        }, null);
    });
}