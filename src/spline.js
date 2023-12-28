import { Application } from '@splinetool/runtime';

// Initialize the Spline scene
const canvas = document.getElementById('canvas3d');

const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/Cde6bvV-naO70SC9/scene.splinecode')
	// .then(() => {
	// 	const obj = spline.findObjectById('390d1a22-e647-46ca-9625-e1432a6bcd1c');
    //     obj.emitEvent('mouseHover');
    //     console.log("working");
	// });




const scene2trigger = document.getElementById('scene-2');
// const scene3trigger = document.getElementById('scene-3');


scene2trigger.addEventListener('mouseover', () => {
    const obj = spline.findObjectById('390d1a22-e647-46ca-9625-e1432a6bcd1c');
    obj.emitEvent('mouseDown');
    console.log("mouse over")
});

scene2trigger.addEventListener('mouseout', () => {
    const obj = spline.findObjectById('8f1729d0-e2f3-4392-82c1-b2a32d61bb74');
    obj.emitEvent('mouseDown');
    console.log("mouse out")
});


