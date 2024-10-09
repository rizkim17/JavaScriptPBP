// Function to evaluate if it's a homicide
function isHomicide(criteria) {
  let score = 0;
  
  if (criteria.cyanideInStomach) score += 50;
  if (criteria.moreThan50MgCyanide) score += 500;
  if (criteria.cctvClear) score += 250;
  if (criteria.cctvBlurred) score += 150;
  if (criteria.twoOrMoreFingerprints) score += 100;
  if (criteria.suspiciousMovements) score += 50;
  if (criteria.cyanideInPerpPocket) score += 750;

  if (score > 1300 && criteria.cctvClear && criteria.twoOrMoreFingerprints) {
      return {
          score,
          isMurder: true,
          message: "It is certain that this is a murder."
      };
  } else {
      return {
          score,
          isMurder: false,
          message: "There is insufficient evidence to determine a murder."
      };
  }
}


let caseCriteria = {
  cyanideInStomach: true,    
  moreThan50MgCyanide: true,     
  cctvClear: true,          
  cctvBlurred: false,       
  twoOrMoreFingerprints: true,   
  suspiciousMovements: true,      
  cyanideInPerpPocket: true    
};

let result = isHomicide(caseCriteria);
console.log(`Total Score: ${result.score}`);
console.log(result.message);
