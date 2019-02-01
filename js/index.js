    const a = parseFloat(prompt('Enter A'));
    const b = parseFloat(prompt('Enter B'));
    const c = parseFloat(prompt('Enter C'));

    const result = solveQuargeEq(a, b, c);
    alert(result);

    function solveQuargeEq(a, b, c){
      const diskr = calcDisk(a, b, c);
        if(diskr > 0){
          const x1 = (-b - Math.sqrt(diskr))/(2*a);
          const x2 = (-b + Math.sqrt(diskr))/(2*a);
          return 'x1 ='+ x1 + '\nx2 = '+ x2;
        }
        if(diskr === 0){
          return x1=(-b)/(2*a);
        }
        else {
          return "Has no valid solutions";
        }
    }
    function calcDisk(a, b, c){
      return b*b-4*a*c;
    }
