const cstm_pointer = document.querySelector('.cstm-pointer');
const cstm_span = document.querySelector('.cstm-span');
const span = cstm_span.querySelector('span');
const sleep = ms => new Promise(r => setTimeout(r, ms));
let clickCount = 00;

document.addEventListener('mousemove', async (e) => {
    await sleep(200);
    // console.log(e.pageX);
    cstm_pointer.style.opacity = "10";
    cstm_pointer.style.left = `${e.pageX}px`;
    cstm_pointer.style.top = `${e.pageY}px`;
});

document.addEventListener('click', () => {
    if (clickCount == 0) {
        cstm_span.style.color = '#F273E6';
        span.innerHTML = 'The world is a beatiful place';
    } else if (clickCount == 1)
        span.innerHTML = 'The world is a beatiful place<br>with U in It';
    else span.innerHTML = 'Happy Life Ahead<br>✌<br>[ refresh ]';
    clickCount++;
});
