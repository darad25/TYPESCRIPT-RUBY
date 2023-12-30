// Assume a function to get a random number between 100 and 200
function rand(): number {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  }
  
  // Constants
  const tubesPerUnit = 4;
  const unitsInClassroom = 4;
  const hoursPerDay = 15;
  const daysPerWeek = 5;
  const weeksPerYear = 39;
  const monthsPerYear = 9;
  const costPerTube = 7;
  
  // Function to calculate the total broken tubes and cost
  function calculateCost(): { totalTubes: number; totalCost: number } {
    let totalTubes = 0;
    let totalCost = 0;
  
    for (let unit = 1; unit <= unitsInClassroom; unit++) {
      let tubesInUnit = tubesPerUnit;
      let tubesFailed = 0;
      let hoursLeft = 0;
  
      for (let day = 1; day <= daysPerWeek * weeksPerYear * monthsPerYear; day++) {
        for (let tube = 1; tube <= tubesInUnit; tube++) {
          if (hoursLeft <= 0) { 
            // Fluorescent tube failed, replace it
            totalTubes++;
            tubesInUnit--;
            hoursLeft = rand();
            tubesFailed += 1
          } else {
            hoursLeft--;
          }
        }
  
        // If 2 tubes failed, replace all 4 tubes in the unit
        if (tubesFailed >= 2) {
          totalTubes += tubesInUnit;
          tubesInUnit = tubesPerUnit;
          tubesFailed = 0;
        }
      }
    }
  
    totalCost = totalTubes * costPerTube;
    return { totalTubes, totalCost };
  } 
  
  // Calculate and print the result
  const result = calculateCost();
  console.log(`Total broken tubes in 1 year: ${result.totalTubes}`);
  console.log(`Total cost per year: $${result.totalCost}`);
  