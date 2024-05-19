const container = document.querySelector('.container');

const generateButton = document.querySelector('.generate');

generateButton.addEventListener('click', () => {
    container.replaceChildren();
    const numRowsInput = document.querySelector('.numRows');
    const numColsInput = document.querySelector('.numCols');

    const numRows = parseInt(numRowsInput.value);
    const numCols = parseInt(numColsInput.value);

    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0 || numRows > 100 || numCols > 100) {
        alert('Please enter a valid number for rows and columns between 1 and 100.');
        return;
    }

    container.style.width = `${numCols * 50}px`;
    container.style.height = `${numRows * 50}px`;

    for(let i=0;i<numRows;i++){
        for(let j=0;j<numCols;j++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = '50px';
            box.style.height = '50px';
            container.appendChild(box);
        }
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            const opacity = parseFloat(box.style.opacity) || 0;
            if(opacity >= 1) return;
            box.style.opacity = opacity + 0.1;
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            box.style.backgroundColor = randomColor;
        });
    });
});