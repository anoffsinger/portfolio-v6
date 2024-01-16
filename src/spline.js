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

const camera2trigger = document.getElementById('camera-2');
const camera3trigger = document.getElementById('camera-3');
const camera4trigger = document.getElementById('camera-4');
const camera5trigger = document.getElementById('camera-5');


// When having issues with below, don't forget to clear cache and refresh

camera2trigger.addEventListener('mouseover', () => {
    const trigger1 = spline.findObjectById('ac3d557c-b130-4fda-9b35-db68243811a0');    
    trigger1.emitEvent('mouseDown');
});

camera2trigger.addEventListener('mouseout', () => {
    const phone1 = spline.findObjectById('64f0f8e6-288b-42e8-9a64-42231eae56c4');
    phone1.emitEvent('mouseDown');
});

camera3trigger.addEventListener('mouseover', () => {
    const trigger2 = spline.findObjectById('8c6d2594-4bc9-4340-a81f-22208c4d67a6');    
    trigger2.emitEvent('mouseDown');
});

camera3trigger.addEventListener('mouseout', () => {
    const phone2 = spline.findObjectById('81a48018-18ce-48c0-bf3a-7fc79a32134a');
    phone2.emitEvent('mouseDown');
});

camera4trigger.addEventListener('mouseover', () => {
    const trigger3 = spline.findObjectById('69ef9026-2c2d-4d12-960d-15bf2d35be3b');    
    trigger3.emitEvent('mouseDown');
});

camera4trigger.addEventListener('mouseout', () => {
    const phone3 = spline.findObjectById('cfa2db79-49df-4bee-a563-64250d0229cc');
    phone3.emitEvent('mouseDown');
});

camera5trigger.addEventListener('mouseover', () => {
    const trigger4 = spline.findObjectById('5179ac24-cdf5-4d3a-a8c0-b54ad526341a');    
    trigger4.emitEvent('mouseDown');
});

camera5trigger.addEventListener('mouseout', () => {
    const phone4 = spline.findObjectById('1797ff21-d009-4839-86dd-a5db4bcdad47');
    phone4.emitEvent('mouseDown');
});
