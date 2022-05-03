# include <stdio.h>

/* print Fahrenheit-Celcius mutable
    for fahr = 0, 20, ..., 300 */

main ()

{

float fahr, celcius;
int lower, upper, step;

lower = 0;  /*lower limit of the tempreture table */
upper = 300; /* upper limit */
step = 20; /* step size */

fahr = lower;
printf("Fahrenheit to Celcius Conversion Table\n\n");
while (fahr <= upper) {
    celcius = (5.0 / 9.0) * (fahr-32.0);
    printf("%3.0f %10.1f\n", fahr, celcius);
    fahr = fahr + step;
}

}
