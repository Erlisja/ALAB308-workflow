/*
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.

Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:

1. Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

2. Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

3. Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
*/
const PI = 3.1415;
const radius = 5;
const requiredSpace = 0.8;
let initialPlants = 20;

const area = PI * radius * radius;

// nr of plants that can fit in the area
const maxPlants =  area / requiredSpace;

const growthRate = 2;

// maximum capacity of the garden
console.log(`The total capacity of the garden is: ${maxPlants}`);

// *** Week 1 ***
console.log('================= ***Week 1 **** ===================================');
let plantsWeek1 = initialPlants * growthRate;
console.log(`The number of plants after week 1 is: ${plantsWeek1}`);

// we need to check if the plants are exceeding the capacity of the garden
if (plantsWeek1 < maxPlants * 0.5){
    console.log('Plant more plants, the count is less than 50% of the maximum capacity of the garden');
}
else if ((plantsWeek1 >= maxPlants * 0.5) && (plantsWeek1 < maxPlants * 0.8)){
    console.log('Monitor the plants, the count is between 50% and 80% of the maximum capacity of the garden');
}
else {
    console.log('Prune the plants, the count is greater than 80% of the maximum capacity of the garden');
}
// *** Week 2 ***
console.log('================= ***Week 2 **** ===================================');
let plantsWeek2 = plantsWeek1 * growthRate;
console.log(`The number of plants after week 2 is: ${plantsWeek2}`);

// we need to check if the plants are exceeding the capacity of the garden
if (plantsWeek2 < maxPlants * 0.5){
    console.log('Plant more plants, the count is less than 50% of the maximum capacity of the garden');
}
else if ((plantsWeek2 > maxPlants * 0.5) && (plantsWeek2 < maxPlants * 0.8)){
    console.log('Monitor the plants, the count is between 50% and 80% of the maximum capacity of the garden');
}
else {
    console.log('Prune the plants, the count is greater than 80% of the maximum capacity of the garden');
}
// *** Week 3 ***
console.log('================= ***Week 3 **** ===================================');
let plantsWeek3 = plantsWeek2 * growthRate;
console.log(`The number of plants after week 3 is: ${plantsWeek3}`);
// we need to check if the plants are exceeding the capacity of the garden

if (plantsWeek3 < maxPlants * 0.5){
    console.log('Plant more plants, the count is less than 50% of the maximum capacity of the garden');
}
else if ((plantsWeek3 > maxPlants * 0.5) && (plantsWeek3 < maxPlants * 0.8)){
    console.log('Monitor the plants, the count is between 50% and 80% of the maximum capacity of the garden');
}
else {
    console.log('Prune the plants, the count is greater than 80% of the maximum capacity of the garden');
}



//     ***** Part 2 *****

/*
Part 2: Thinking Bigger
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?
*/
let initialPlants2 = 100;
let weeks = 10;


//  *** Week 10 ***
console.log('================= ***Week 10 **** ===================================');
// to calculate the nr of plants after 10 weeks, we can use the formula: initialPlants * growthRate^weeks
let plantsWeek10 = initialPlants2 * Math.pow(growthRate, weeks);
console.log(`The number of plants after week 10 is: ${plantsWeek10}`);
// the required space for the plants after 10 weeks
let requiredSpace10 = plantsWeek10 * requiredSpace;
console.log(`The required space for the plants after 10 weeks is: ${requiredSpace10} square meters`);
// the aditional space that would be required
let additionalSpace = requiredSpace10 - area;
console.log(`The additional space that would be required is: ${additionalSpace} square meters`);
// the radius of the expanded garden
let radius2 = Math.sqrt((additionalSpace / PI));
console.log(`The radius of the expanded garden is: ${radius2} meters`);