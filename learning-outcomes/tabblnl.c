#include <stdio.h>

    // count characters in input; 2nd version //
    // tabs = '\t'  newlines = '\n'  blanks = '\'
main()
{

  int c, tab, nl, bl;
  
  tab = 0;
  nl = 0;
  bl = 0;
  
  while ((c = getchar()) != EOF){
    if (c=='\t')
      ++tab;
    if (c==' ')
      ++bl;
    if (c=='\n')
      ++nl;}
  printf("%d\n%d\n%d\n", nl, tab, bl);
  
  
}
