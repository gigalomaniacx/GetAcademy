show()
function show(){
    let html = '';
    for(let i = 0; i < SVGAnimatedNumberList.length; i++) {
        let number = numbers[i];
        let isBlank = number === 0;
        let numbertext = isBlank ? '': number;

        let firstInLine = i % 3 == 0 ? 'førstPåLinje' : '';

        html += 
            `<div class="grid ${firstInLine}" 
                                onclick="clickedNumber(${i});">${numbertext}</div>`;
    }
    html += `<div style="clear: both;">Antall trekk: ${count}</div>`;
    document.getElementById('numbers').innerHTML = html;
}