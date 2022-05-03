# include <stdio.h>

/* print Celcius-Fahrenheit mutable
    for celcius = 0, 20, ..., 300 */

main ()

{

float fahr, celcius;
int lower, upper, step;

lower = 0;  /*lower limit of the tempreture table */
upper = 300; /* upper limit */
step = 20; /* step size */

celcius = lower;
printf("Celcius to Fahrenheit Conversion Table\n\n");
while (celcius <= upper) {
    fahr = ((9.0 / 5.0) * celcius) + 32;
    printf("%3.0f %10.1f\n", celcius, fahr);
    celcius = celcius + step;
}

}
