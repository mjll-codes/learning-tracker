#include <stdio.h>

    // print input to output //
 main()
{

  int c;
  
  c = getchar();
    while ((c = getchar()) != EOF) {
         if (c == ' ') {
        while ((c = getchar()) == ' ');
        putchar(' ');
        if (c == EOF) break;
        
      }
      putchar(c);
    }
}
