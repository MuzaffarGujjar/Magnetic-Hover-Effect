let cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

let items = document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let itemWidth = item.clientWidth;
        let itemHeight = item.clientHeight;
        
        let transX = (x - itemWidth)
        let transY = (y - itemHeight)

        item.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    });

    item.addEventListener('mouseout', (e) => {
        item.style.transform = ``;
    })
})