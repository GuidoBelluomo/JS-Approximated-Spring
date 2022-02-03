function ApproxSpring(value, targetValue, strength, damping) {
    let vel = 0;

    this.calc = function (deltaTime) {
        vel += (targetValue - value) * strength * deltaTime;
        vel *= Math.pow(damping, deltaTime);
        value += vel * deltaTime;
    }

    this.set = function (newValue, newTargetValue, newStrength, newDamping)
    {
        value = newValue
        targetValue = newTargetValue
        strength = newStrength
        damping = newDamping
    }

    this.setValue = function (newValue)
    {
        value = newValue;
    }

    this.setTargetValue = function (newTargetValue)
    {
        targetValue = newTargetValue;
    }

    this.setStrength = function (newStrength)
    {
        strength = newStrength;
    }

    this.setDamping = function (newDamping)
    {
        damping = newDamping;
    }

    this.getValue = function ()
    {
        return value;
    }

    this.getTargetValue = function ()
    {
        return targetValue;
    }

    this.getStrength = function ()
    {
        return strength;
    }

    this.getDamping = function ()
    {
        return damping;
    }
}

window.ApproxSpring = ApproxSpring;
