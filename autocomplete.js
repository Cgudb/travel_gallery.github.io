let availableKeywords = [
    'Dubai',
    'Saudi Arabia',
    'South Korea',
    'Canada',
    'Food',
    'Places',
    'Memorial',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        display(result); 
    } else {
        resultsBox.innerHTML = ''; 
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}