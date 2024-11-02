useEffect(() => {
  if (rigidBodies.current) {
    rigidBodies.current.forEach((api) => {
      const body = rapier.world.getRigidBody(api.handle);
      if (body) {
        body.setEnabled(false);
      }
    });
    setStartInterval(true);
  }
}, [rigidBodies, rapier]); // No return needed

useEffect(() => {
  if (startInterval) {
    const interval = setInterval(() => {
      if (currentBody < cubesCount) {
        const body = rapier.world.getRigidBody(
          rigidBodies.current[currentBody].handle
        );
        if (body) {
          const options = [40, 6, -44, -29, -20, 6, 6, 40];
          const choice = Math.floor(Math.random() * 8);
          body.setEnabled(true);
          body.setTranslation(
            RAPIER.vec3({
              x: options[choice] + Math.random() * 10 - 5,
              y: 100 + Math.random() * 10 - 5,
              z: 0 + Math.random() * 10 - 5,
            })
          );
        }
        setCurrentBody((prev) => prev + 1); // Move to the next body
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, 20); // Adjust timing as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }
}, [startInterval, currentBody]); // Added currentBody to dependencies
