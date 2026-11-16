// Grab the elements from the page
const images = document.querySelectorAll('.grid-item img');
const bucket = document.getElementById('bucket');
const countDisplay = document.getElementById('bucket-count');
let itemsInBucket = 0;

// 1. Make every image draggable
images.forEach(img => {
  img.draggable = true;

  // When you start dragging an image
  img.addEventListener('dragstart', (e) => {
    // Save the image link so we know what is being dragged
    e.dataTransfer.setData('text/plain', e.target.src);
    img.style.opacity = '0.5'; // Make the image slightly see-through while dragging
  });

  // When you let go of the image
  img.addEventListener('dragend', () => {
    img.style.opacity = '1'; // Return to normal visibility
  });
});

// 2. Set up the Bucket to accept drops
bucket.addEventListener('dragover', (e) => {
  e.preventDefault(); // This is required by the browser to allow dropping
  bucket.classList.add('drag-over'); // Makes the bucket glow/grow when hovering over it
});

bucket.addEventListener('dragleave', () => {
  bucket.classList.remove('drag-over'); // Stop glowing if you drag away
});

// 3. Handle the actual Drop INTO the bucket
bucket.addEventListener('dragenter', (e) => {
  e.preventDefault(); // Tells the browser "Yes, we allow drops here!"
});

bucket.addEventListener('dragover', (e) => {
  e.preventDefault();
  bucket.classList.add('drag-over');
});

bucket.addEventListener('dragleave', () => {
  bucket.classList.remove('drag-over');
});
// Increase the counter and update the tiny circle number (1, 2, 3...)
itemsInBucket++;
countDisplay.innerText = itemsInBucket;

// Add the "pop" animation to make it feel like it went inside
bucket.classList.add('pop-animation');

// Remove the animation after a split second so it can pop again next time
setTimeout(() => {
  bucket.classList.remove('pop-animation');
}, 300);

// Get the image link that was just dropped (for later when we add the AI search!)
const droppedImageSrc = e.dataTransfer.getData('text/plain');
console.log('Outfit saved to bucket:', droppedImageSrc);
});