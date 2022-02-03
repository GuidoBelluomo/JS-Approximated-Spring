# JS-Approximated-Spring
An helper class that approaches a set scalar value to a scalar target value, with an approximated and configurable springyness.

Example usage:

```js
const deltaTime = 1 / 60; // The deltaTime should be expressed in seconds, retrieve it as needed. In this case it should be a fixed 60FPS delta time.
const spring = new ApproxSpring(0, 0, 200, 0.00001); // Create spring class
spring.setTarget(1); // Set the target value
spring.calc(deltaTime); // Run this repeatedly as per requirements to calculate the new value of the spring.
spring.getValue(); // Returns the updated value
```

A common use-case would be to make springy dimensions as they get updated, or to move objects so they spring around the destination point.
