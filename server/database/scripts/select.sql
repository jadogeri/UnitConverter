/**
@author  Joseph Adogeri
@since   18-DEC-2024
@version 1.0  

**/

SELECT l_name "LIFESPAN SERVICE",
       l_total "LS TOTAL",
       d_name "DAILYSPAN SERVICE",
       d_total "DS TOTAL"
FROM DAILYSPAN
INNER JOIN LIFESPAN
ON (l_name = d_name);