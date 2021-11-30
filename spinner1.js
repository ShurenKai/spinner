setTimeout(() => {
  process.stdout.write('\r|   ');
  setTimeout(() => {
    process.stdout.write('\r/   ');
    setTimeout(() => {
      process.stdout.write('\r-   ');
      setTimeout(() => {
        process.stdout.write('\r\\   ');
        setTimeout(() => {
          process.stdout.write('\r|  ');
          setTimeout(() => {
            process.stdout.write('\r/  ');
            setTimeout(() => {
              process.stdout.write('\r-  ');
              setTimeout(() => {
                process.stdout.write('\r\\  ');
                setTimeout(() => {
                  process.stdout.write('\r|  ');
                  process.stdout.write('\n');
                }, 1900)
              }, 1600)
            }, 1300)
          }, 1100)
        }, 900)
      }, 700);
    }, 500);
  }, 300);  
}, 100);
