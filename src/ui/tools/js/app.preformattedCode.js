
export default function() {
    const elements = document.querySelectorAll('pre code');

    elements.forEach((block, i) => {
        var lines = block.innerText.split('\n');

        if (lines[0] === '') {
            lines.shift()
        }
    
        var matches = /^[\s\t]+/.exec(lines[0]);
    
        if (matches) {
            var indentation = matches[0];
        }
    
        if (indentation) {
            lines = lines.map(function(line) {
                line = line.replace(indentation, '')
                return line.replace(/\t/g, '    ')
            });
    
            block.textContent = lines.join('\n').trim();
        }
    })
}