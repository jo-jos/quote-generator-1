function generate() {
    var quotes = {
        "- Arthur Schopenhauer" : '"A man can be himself only so long as he is alone, and if he does not love solitude, he will not love freedom, for it is only when he is along that he is really free."',
        "- Douglas Horton" : '"Smile, it is free therapy"',
        "- C.S. Lewis" : '"I was not born to be free---I was born to adore and obey."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}